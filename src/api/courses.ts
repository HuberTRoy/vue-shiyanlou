import { LEVEL } from "@/const";
import { get } from "./serve";

export interface IGetCoursesCategory {
  name: string;
  tags: {
    image_url: string;
    name: string;
  }[];
}

export interface IGetCourses {
  count: number;
  next: string;
  page: number;
  page_size: number;
  previous: string | null;
  results: {
    activity_id: null;
    api_url: string;
    average_score: string;
    description: string;
    fee_type: string;
    follow_url: string;
    gp_price: null;
    html_url: string;
    id: number;
    is_important_course: boolean;
    label: string;
    level: LEVEL;
    max_interest_free_period: number;
    name: string;
    online_type: string;
    picture_url: string;
    points: string[];
    price: number;
    project_type: number;
    purchase_seconds_info: null;
    real_price: number;
    slug: string;
    students_count: number;
    tags: string[];
  }[];
}

export const coursesCategory = get<IGetCoursesCategory[]>(
  "/courses/categories"
);

export const coursesInfo = get<IGetCourses>("/courses");
