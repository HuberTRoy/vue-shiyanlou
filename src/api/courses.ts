import { FEE_TYPE, LEVEL } from "@/const";
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

export interface IGetSingleCourse {
  id: number;
  name: string;
  picture_url: string;
  description: string;
  students_count: number;
  fee_type: FEE_TYPE;
  price: number;
  real_price: number;
  long_description: string;
  online_type: string;
  tags: string[];
  open_time: null;
  source: string;
  teacher: {
    id: number;
    name: string;
    avatar_url: string;
    level: number;
    member_type: string;
    teacher_info: {
      realname: string;
      title: string;
      school: string;
      link: string;
      description: string;
      lab_type_code: number[];
    };
    html_url: string;
    published_courses_count: number;
  };
  followers_count: number;
  labs_count: number;
  challenge_labs_count: number;
  lives_count: number;
  comments_count: number;
  labreports_count: number;
  questions_count: number;
  sales_config: {
    detail_url: null;
    users_limit: number;
    free_labs: number;
    activation_code: null;
    validity_days: null;
    doc_validity_days: number;
    strategy: null;
  };
  learn_config: {
    study_in_order: boolean;
    can_public_report: boolean;
    student_schema: null;
    certificate: {};
  };
  permission_config: {
    teacher_can_edit: boolean;
    teacher_can_see_box: boolean;
    notify_teacher_mode_on_question: string;
    show_box_password: boolean;
  };
  html_url: string;
  api_url: string;
  follow_url: string;
  study_minutes: number;
  seo_keywords: string[];
  end_time: string;
  is_discount: boolean;
  points: string[];
  statistic: string;
  selected_questions_count: number;
  has_certificate: boolean;
  support_embed: boolean;
  label: null;
  activity: { name: string; price: number };
  is_simple_louplus: boolean;
  max_interest_free_period: number;
  purchase_seconds_info: null;
  level: LEVEL;
  average_score: string;
  is_important_course: boolean;
  section_counts: {
    labs_count: number;
    videos_count: number;
    attachments_count: number;
    challenges_count: number;
    exams_count: number;
    documents_count: number;
    ojs_count: number;
    homeworks_count: number;
    lives_count: number;
  };
  gp_price: null;
  activity_id: null;
  learn_member_free: boolean;
}

export interface IGetSingleCourseLabs {
  is_default: boolean;
  name: string;
  order_index: number;
  sub_stages: {
    is_default: boolean;
    name: string;
    labs: {
      name: string;
      points: string;
      type: "classic" | "course_challenge";
    }[];
  }[];
}

export const coursesCategory = get<IGetCoursesCategory[]>(
  "/courses/categories"
);

export const coursesInfo = get<IGetCourses>("/courses");
export const singleCoursesInfo = async (id: string) => {
  return await get<IGetSingleCourse>(`/courses/${id}`)();
};
export const singleCoursesLabs = async (id: string) => {
  return await get<IGetSingleCourseLabs[]>(`/courses/${id}/labs`)();
};
