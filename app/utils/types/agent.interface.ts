interface ITraits {
  name: string;
  value: string;
  percent: string;
}

export interface IAgent {
  id: number;
  rank: string;
  name: string;
  terminated: boolean;
  image: string;
  image_hq: string;
  traits: ITraits[];
}
