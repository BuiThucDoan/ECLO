export interface IHighlight {
  id: number;
  content: string;
  link: string;
  children?: IHighlight[];
}

export interface ITrending {
  id:number;
  content:string;
  type:string;
  link:string;
}
export interface ITopic {
  id: number;
  title: string;
  image: string;
  link:string;
  highlight: IHighlight[];
  description: String;
}
export interface IFindAnswer {
  id: number;
  title: string;
  image: string;
  link:string;
  highlight?: IHighlight[];
}
