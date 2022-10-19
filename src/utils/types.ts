export interface IProject {
  readonly name: string;
}

export interface IContact {
  readonly index: number;
  readonly title: string;
  readonly link: string;
}

export interface IScreenshot {
  readonly index: number;
  readonly name: string;
  readonly screenshot: string;
}

export interface IProjectData {
  readonly index: number;
  readonly name: string;
  readonly stack: string[];
  readonly link?: string;
  readonly image: string;
  readonly linkCode: string;
  readonly imageCode: string;
  readonly screenshots?: IScreenshot[];
}
