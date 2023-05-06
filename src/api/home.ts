import { FEE_TYPE, LEVEL } from "@/const";
import { get } from "./serve";

export interface IGetIndexCategory {
  name: string;
  recommend_courses: {
    id: number;
    name: string;
    html_url: string;
    students_count: number;
    fee_type: FEE_TYPE;
    image: string;
    level: LEVEL;
  }[];
  tags: {
    html_url: string;
    name: string;
  }[];
}

export interface IGetIndexBanner {
  background_color: string;
  html_url: string;
  mobile_picture_url: string;
  picture_url: string;
}

export const indexCategory = get<IGetIndexCategory[]>("index/categories/");
export const indexBanner = get<IGetIndexBanner[]>("index/banner-pictures/");
