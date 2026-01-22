//basic types for course parts
export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBasic extends CoursePartBase {
  //basic is CoursePartBase with description
  description: string;
  kind: "basic";
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

export interface CoursePartBackground extends CoursePartBase {
  description: string;
  backgroundMaterial: string;
  kind: "background";
}
export interface CoursePartSpecial extends CoursePartBase {
  description: string;
  requirements: string[];
  kind: "special";
}
//discriminated union
export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
