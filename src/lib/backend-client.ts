import { ContactForm } from "@/types/contact-forms";
import { Event } from "@/types/event";
import { NewsRooms } from "@/types/new-rooms";
import {
  getEmptyPagenate,
  PagenateResponse,
  PaginateParams,
  SortOption,
} from "@/types/paginate";
import { ContactConfig, ContactFormConfig } from "@/types/web-config";
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

  async getNewsRoomsPagination(
    params: PaginateParams,
    sort: SortOption,
    search: string = "",
  ): Promise<PagenateResponse<NewsRooms>> {
    try {
      const response = await this.client.get("/api/newsrooms", {
        params: {
          ...params,
          "sort[0]": sort,
          "filters[title][$containsi]": search,
          "populate[0]": "image",
          "populate[1]": "seo",
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }

  async getNewsRoomsBySlugId(
    slagId: string,
    status: "published" | "draft" = "published"
  ): Promise<PagenateResponse<NewsRooms>> {
    try {
      const response = await this.client.get("/api/newsrooms", {
        params: {
          "filters[slug][$eq]": slagId,
          "populate[0]": "image",
          "populate[1]": "seo",
          status,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }

  async getEventPagination(
    params: PaginateParams,
    sort: SortOption,
    search: string = "",
  ): Promise<PagenateResponse<Event>> {
    try {
      const response = await this.client.get("/api/events", {
        params: {
          ...params,
          "sort[0]": sort,
          "filters[title][$containsi]": search,
          "populate[0]": "image",
          "populate[1]": "seo",
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }

  async getEventBySlugId(
    slagId: string,
    status: "published" | "draft" = "published"
  ): Promise<PagenateResponse<NewsRooms>> {
    try {
      const response = await this.client.get("/api/events", {
        params: {
          "filters[slug][$eq]": slagId,
          "populate[0]": "image",
          "populate[1]": "seo",
          status,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }

  async getContactConfig(): Promise<ContactConfig | null> {
    try {
      const response = await this.client.get("/api/config");
      return response.data.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async getContactFormConfig(): Promise<ContactFormConfig | null> {
    try {
      const response = await this.client.get("/api/contact-form-config");
      return response.data.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async createContactForm(payload: ContactForm): Promise<boolean> {
    try {
      await this.client.post("/api/contact-forms", {
        data: payload,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
