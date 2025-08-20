import { FileContent } from "./file";
import { Seo } from "./paginate";

export interface NewsRooms {
    id: number;
    documentId: string;
    title: string;
    index: number;
    content: string;
    publishedAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    description: string;
    image: FileContent;
    seo: Seo;
}