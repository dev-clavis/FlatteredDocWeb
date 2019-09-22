export interface ISurvey {
  id?: number;
  name: string;
  questions?: IQuestion[];
  author?: string;
}

export interface IQuestion{
  qId?: number;
  name: string;
  type: number;
  ans?: IAnswer[];
  count?: number;
}

export interface IAnswer{
  optionId?: number;
  optionName: string;
  amount?: number;
}


