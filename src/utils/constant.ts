import { ContactConfig } from "@/types/web-config";

export const MENUS = [
  { title: "About Us", path: "/about-us" },
  { title: "Products", path: "/products" },
  { title: "Research & Development", path: "/research-and-development" },
  { title: "Newsroom", path: "/newsroom" },
  { title: "Events & Updated", path: "/events" },
  { title: "Partnership", path: "/partnership" },
];

export const SOCIAL_MEDIAS: {
  key: keyof ContactConfig,
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
