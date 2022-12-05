import { IAd } from "../../../domain";
import { CreateAdDto } from "../../dto";

export const mapToEntity = (dto: CreateAdDto): IAd => {
  return {
    title: dto.title,
    description: dto.description,
    createdAt: dto.createdAt,
    runsUntil: dto.runsUntil,
    announcer: dto.announcerId,
    category: dto.categoryId,
  }
}