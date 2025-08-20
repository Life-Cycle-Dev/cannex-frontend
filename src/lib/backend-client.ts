import { ContactForm } from "@/types/contact-forms";
import { Event } from "@/types/event";
import { NewsRooms } from "@/types/new-rooms";
import {
  getEmptyPagenate,
  PagenateResponse,
  PaginateParams,
  Seo,
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
          "populate[image][fields][0]": "*",
          "populate[seo][fields][0]": "*",
          "populate[seo][populate][metaImage][fields][0]": "*",
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
          "populate[image][fields][0]": "*",
          "populate[seo][fields][0]": "*",
          "populate[seo][populate][metaImage][fields][0]": "*",
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
          "populate[image][fields][0]": "*",
          "populate[seo][fields][0]": "*",
          "populate[seo][populate][metaImage][fields][0]": "*",
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
          "populate[image][fields][0]": "*",
          "populate[seo][fields][0]": "*",
          "populate[seo][populate][metaImage][fields][0]": "*",
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

  async getSeoFromPage(page: "homepage" | "aboutUsPage" | "productPage" | "researchAndDevelopmentPage" | "partnershipPage" | "contactUsAndInquiryPage" | "newsroomPage" | "eventPage"): Promise<Seo | null> {
    try {
      const params: Record<string, string> = {
        "populate[0]": page,
        [`populate[${page}][populate][metaImage][fields][0]`]: "*",
      };

      const response = await this.client.get("/api/seo", { params });
      return response.data.data[page];
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async getEventHighlight(): Promise<Event[]> {
    try {
      const response = await this.client.get("/api/highlight", {
        params: {
          "populate[events][fields][0]": "title",
          "populate[events][fields][1]": "description",
          "populate[events][fields][2]": "publishedAt",
          "populate[events][fields][3]": "slug",
          "populate[events][populate][image][fields][0]": "url",
          "populate[events][populate][image][fields][1]": "alternativeText"
        }
      });
      return response.data.data.events;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getNewsroomsHighlight(): Promise<NewsRooms[]> {
    try {
      const response = await this.client.get("/api/highlight", {
        params: {
          "populate[newsrooms][fields][0]": "title",
          "populate[newsrooms][fields][1]": "description",
          "populate[newsrooms][fields][2]": "publishedAt",
          "populate[newsrooms][fields][3]": "slug",
          "populate[newsrooms][populate][image][fields][0]": "url",
          "populate[newsrooms][populate][image][fields][1]": "alternativeText"
        }
      });
      return response.data.data.newsrooms;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
