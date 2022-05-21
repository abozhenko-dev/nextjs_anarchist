export interface ITimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  image?: {
    width: number;
    height: number;
    src: string;
  };
}
