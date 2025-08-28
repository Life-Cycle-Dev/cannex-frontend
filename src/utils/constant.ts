import { ContactConfig } from "@/types/web-config";

export const MENUS = [
  { title: "About Us", path: "/about-us", width: "w-[132px]" },
  { title: "Products", path: "/products", width: "w-[129px]" },
  {
    title: "Research & Development",
    path: "/research-and-development",
    width: "w-[250px]",
  },
  { title: "Newsroom", path: "/newsroom", width: "w-[142px]" },
  { title: "Events & Updated", path: "/events", width: "w-[196px]" },
  { title: "Partnership", path: "/partnership", width: "w-[150px]" },
];

export const SOCIAL_MEDIAS: {
  key: keyof ContactConfig;
  name: string;
}[] = [
  {
    key: "instagram",
    name: "Instagram",
  },
  {
    key: "fackbook",
    name: "Facebook",
  },
  {
    key: "linkedIn",
    name: "LinkedIn",
  },
];
