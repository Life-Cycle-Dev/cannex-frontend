import { NewsRooms } from "@/types/new-rooms";
import { getEmptyPagenate, PagenateResponse, PaginateParams } from "@/types/paginate";
import axios, { AxiosInstance } from "axios";


export class BackendClient {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.NEXT_PUBLIC_BACKEND_PATH,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        });
    }

    async getNewsRoomsPagination(params: PaginateParams, search: string = ""): Promise<PagenateResponse<NewsRooms>> {
        try {
            const response = await this.client.get("/api/newsrooms", {
                params: {
                    ...params,
                    "sort[0]": "index:asc",
                    "filters[title][$containsi]": search,
                    "populate": "image"
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
            return getEmptyPagenate();
        }
    }
}