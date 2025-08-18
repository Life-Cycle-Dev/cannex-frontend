import { FileContent } from "./file";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Paginate {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface MetadataPaginate {
    pagination: Paginate;
}

export interface PaginateParams {
    "pagination[withCount]": 'true' | 'false';
    "pagination[pageSize]": number;
    "pagination[page]": number;
}

export interface PagenateResponse<T> {
    data: T[];
    meta: MetadataPaginate;
}

export type SortOption = "createdAt:desc" | "view:desc";

export const getEmptyPagenate = (): PagenateResponse<any> => {
    return {
        data: [],
        meta: {
            pagination: {
                page: 0,
                pageSize: 0,
                pageCount: 0,
                total: 0
            }
        }
    }
}

export interface Seo {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalURL: string;
    metaImage: FileContent;
}
