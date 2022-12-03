import { v4 as uuidv4 } from "uuid";

export interface Link {
  id: string;
  to: string;
  title: string;
}
export const links: Link[] = [
  { id: uuidv4(), to: "/", title: "Главная" },
  { id: uuidv4(), to: "/maps", title: "Карты" },
  { id: uuidv4(), to: "/table", title: "Таблица" },
  { id: uuidv4(), to: "/exp", title: "Expandable" },
];
