import { ContactForm } from "@/types/contact-forms";
import { Event } from "@/types/event";
import { NewsRooms } from "@/types/new-rooms";
import {
  getEmptyPagenate,
  PagenateResponse,
  PaginateParams,
} from "@/types/paginate";
import { WebConfig } from "@/types/web-config";
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
    sort: 'createdAt:desc' | 'view:desc',
    search: string = "",
  ): Promise<PagenateResponse<NewsRooms>> {
    try {
      const response = await this.client.get("/api/newsrooms", {
        params: {
          ...params,
          "sort[0]": sort,
          "filters[title][$containsi]": search,
          populate: "image",
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
          populate: "image",
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
    sort: 'createdAt:desc' | 'view:desc',
    search: string = "",
  ): Promise<PagenateResponse<Event>> {
    try {
      const response = await this.client.get("/api/events", {
        params: {
          ...params,
          "sort[0]": "createdAt:asc",
          "filters[title][$containsi]": search,
          populate: "image",
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
          populate: "image",
          status,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }

  async getContactInfo(): Promise<PagenateResponse<WebConfig>> {
    try {
      const response = await this.client.get(
        "/api/web-configs?filters[key][$startsWith]=contact."
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }

  async getContactFormReason(): Promise<PagenateResponse<WebConfig>> {
    try {
      const response = await this.client.get(
        "/api/web-configs?filters[key][$eq]=contact-form.reason"
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
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

  async getGoogleMaps(): Promise<PagenateResponse<WebConfig>> {
    try {
      const response = await this.client.get(
        "/api/web-configs?filters[key][$eq][0]=contact.lab-google-map&filters[key][$eq][1]=contact.headquarter-google-map"
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return getEmptyPagenate();
    }
  }
}
