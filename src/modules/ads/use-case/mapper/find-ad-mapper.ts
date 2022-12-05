import { IAd, IAdCategory, IAnnouncer } from "../../../domain";
import { AdItemDto, CreateAdDto } from "../../dto";

export const mapToDto = (entity: IAd): AdItemDto => {
  return {
    id: entity._id ?? '',
    title: entity.title,
    description: entity.description,
    createdAt: entity.createdAt,
    runsUntil: entity.runsUntil,
    announcer: (entity.announcer as IAnnouncer).name,
    category: (entity.category as IAdCategory).name,
  }
}