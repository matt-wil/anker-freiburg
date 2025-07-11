export interface CloudinaryImage {
    access_control: null; // Or `any` if it could be other types
    access_mode: "public" | string; // Assuming "public" is common, but could be other strings
    aspect_ratio: number;
    asset_folder: string;
    asset_id: string;
    backup_bytes: number;
    bytes: number;
    created_at: string; // ISO 8601 date string, e.g., "2025-06-17T19:43:59+00:00"
    created_by: null; // Or `any` if it could be other types
    display_name: string;
    etag: string;
    filename: string;
    format: string; // e.g., "jpg", "png", "gif"
    height: number;
    pixels: number;
    public_id: string;
    resource_type: "image" | string; // Assuming "image" is common, but could be other strings
    secure_url: string; // HTTPS URL
    status: "active" | string; // Assuming "active" is common, but could be other strings
    type: "upload" | string; // Assuming "upload" is common, but could be other strings
    uploaded_at: string; // ISO 8601 date string
    uploaded_by: null; // Or `any` if it could be other types
    url: string; // HTTP URL
    version: number;
    width: number;
  }

export type ParamsProps = {
  locale: string
  artistName: string
}

export type Testimonial = {
  id: number
  name: string
  stars: string
  review: string
  date: string
  link: string
}

export type CloudinaryImageList = CloudinaryImage[]