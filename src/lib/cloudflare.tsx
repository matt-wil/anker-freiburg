import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { R2Asset } from "@/types";

const ACCOUNT_ID = process.env.NEXT_R2_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.NEXT_R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.NEXT_R2_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.NEXT_R2_BUCKET_NAME;
const FALLBACK_IMG = "/anker_logo.png";

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY || !BUCKET_NAME) {
  throw new Error(
    "R2 environment variables are not correctly set. Please check your .env.local file.",
  );
}

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

export async function getAssetsByFolder(prefix: string): Promise<R2Asset[]> {
  //console.log(`[R2] Fetching assets for prefix: "${prefix}"`);

  try {
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    });

    const listResponse = await s3Client.send(listCommand);

    const contents = listResponse.Contents;
    if (!contents || contents.length === 0) {
      //console.log(`[R2] No contents found for prefix: "${prefix}"`);
      return [];
    }

    //console.log(`[R2] Found ${contents.length} item(s) for prefix: "${prefix}"`,);

    const assetPromises = contents
      .filter((item) => item.Key && !item.Key.endsWith("/"))
      .map(async (item) => {
        const getCommand = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: item.Key!,
        });
        const url = await getSignedUrl(s3Client, getCommand, {
          expiresIn: 3600,
        });
        let dimensions: { width?: number; height?: number } = {};
        const filename = item.Key!.split("/").pop() || "";
        const match = filename.match(/_(\d+)x(\d+)\.\w+$/);

        if (match && match[1] && match[2]) {
          dimensions = {
            width: parseInt(match[1], 10),
            height: parseInt(match[2], 10),
          };
        }
        return { key: item.Key!, url, ...dimensions };
      });

    const assets = await Promise.all(assetPromises);
    //console.log(`[R2] Successfully generated ${assets.length} signed URLs.`);
    return assets;
  } catch (error) {
    console.error(
      `[R2] CRITICAL ERROR getting assets from folder "${prefix}":`,
      error,
    );
    return [];
  }
}

export async function getArtistAssets(
  category: "Tattoo" | "Piercing",
  artistName: string,
) {
  const prefix = `Artists/${category}/${artistName}/`;
  const allAssets = await getAssetsByFolder(prefix);

  const profileImage = allAssets.find((asset) => asset.key.includes("profile"));
  const portfolioImages = allAssets.filter(
    (asset) => !asset.key.includes("profile"),
  );

  return {
    profileImage,
    portfolioImages,
  };
}

export async function getPresignedUrlForKey(key: string): Promise<string> {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  } catch (error) {
    console.error(`Error generating signed URL for key ${key}:`, error);
    return FALLBACK_IMG;
  }
}

export async function getSingleImage(key: string): Promise<string> {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return url;
  } catch (error) {
    console.error(`[R2] Error generating signed URL for key "${key}":`, error);
    return FALLBACK_IMG;
  }
}
