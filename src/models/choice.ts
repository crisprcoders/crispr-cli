export interface Answer {
  overwrite?: boolean;
  init: InitOperationChoiceValue;
}

export interface Choice {
  name: string;
  value: InitOperationChoiceValue;
}

export enum InitOperationChoiceValue {
  WORKPLACE = "workplace",
  COURSE = "course",
  WORK = "work",
  SCHOOL = "school",
}
