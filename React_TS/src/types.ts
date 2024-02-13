export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CourseDescription extends CoursePartBase {
  description: string;
}

export interface CoursePartBasic extends CourseDescription {
  kind: "basic";
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

export interface CoursePartBackground extends CourseDescription {
  backgroundMaterial: string;
  kind: "background";
}

export interface CoursePartSpecial extends CourseDescription {
  requirements: string[];
  kind: "special";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
