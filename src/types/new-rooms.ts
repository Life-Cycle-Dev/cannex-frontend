import { FileContent } from "./file";

export interface NewsRooms {
    id: number;
    documentId: string;
    title: string;
    index: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    description: string;
    image: FileContent;
}