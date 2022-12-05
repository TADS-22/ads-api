import { IAdCategory } from "./ad-category";
import { IAnnouncer } from "./announcer";

export interface IAd {
  _id? : string;
  title: string;
  description: string;
  createdAt: Date;
  runsUntil: Date;
  announcer: IAnnouncer | string;
  category: IAdCategory | string;
}