export interface CreateAdDto {
  title: string;
  description: string;
  createdAt: Date;
  runsUntil: Date;
  announcerId: string;
  categoryId: string;
}