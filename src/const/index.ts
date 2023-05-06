export enum LEVEL {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
}

export const LEVEL_DICT = {
  1: "初级",
  2: "中级",
  3: "高级",
};

export enum FEE_TYPE {
  BOOTCAMP = "bootcamp",
  MEMBER = "member",
  FREE = "free",
}

export const FEE_TYPE_DICT: {
  [index: string]: string;
} = {
  bootcamp: "实战课",
  member: "会员",
  free: "免费",
};
