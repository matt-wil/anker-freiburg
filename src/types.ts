import type { IconType } from "react-icons";

export type ParamsProps = {
  locale: string;
  artistName: string;
};

export type Testimonial = {
  id: number;
  name: string;
  stars: string;
  review: string;
  date: string;
  link: string;
};

export type R2AssetsList = R2Asset[];

export type AktionenResponse = {
  resources: R2AssetsList;
};

export type I18nService = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
};

export type RenderableService = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
};

export type I18nFeature = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

export type RenderableFeature = {
  icon: IconType;
  title: string;
  description: string;
};

export type DBArtist = {
  bio_de: string;
  bio_en: string;
  category: string;
  created_at: string;
  id: number;
  name: string;
  profile_img: string;
  slug: string;
  experience: number;
  r2_profile_key: string;
  specialities_en: string[];
  specialities_de: string[];
  instagram_link: string;
};

export type R2Asset = {
  key: string; // This is the full filename/path
  url: string; // This is the temporary, secure URL
  width?: number;
  height?: number;
};
