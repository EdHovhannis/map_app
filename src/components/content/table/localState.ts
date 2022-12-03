export type ColType = "description" | "total" | "date" | "vote";

type Column = { col?: string; theme?: string; colType?: ColType };

export interface BoardRow {
  row: Column[];
  rowType: boolean;
}

// ===== state starts from here =====
export const tempState: BoardRow[] = [
  {
    row: [
      { col: "Начало голосования", theme: "simple", colType: "description" },
      { col: "18.07.2022 09:00", theme: "soft-blue", colType: "date" },
      { col: "За", theme: "simple", colType: "vote" },
      { col: "7", theme: "accept", colType: "total" },
    ],
    rowType: false,
  },
  {
    row: [
      { col: "Окончание голосования", theme: "simple", colType: "description" },
      { col: "18.07.2022 09:00", theme: "soft-blue", colType: "date" },
      { col: "Против", theme: "simple", colType: "vote" },
      { col: "3", theme: "danger", colType: "total" },
    ],
    rowType: false,
  },
  {
    row: [
      { col: "Подписание протокола", theme: "simple", colType: "description" },
      { col: "18.07.2022 09:00", theme: "soft-blue", colType: "date" },
      { col: "Воздержались", theme: "simple", colType: "vote" },
      { col: "3", theme: "orange", colType: "total" },
    ],
    rowType: false,
  },
  {
    row: [
      { colType: "description" },
      { colType: "date" },
      { col: "Нет ответа", theme: "simple", colType: "vote" },
      { col: "12", theme: "silver", colType: "total" },
    ],
    rowType: false,
  },
  {
    row: [
      { col: "Событие", theme: "board-header", colType: "description" },
      { col: "Дата и время", theme: "board-header", colType: "date" },
      { col: "Результаты", theme: "board-header", colType: "vote" },
      { col: "", theme: "", colType: "total" },
    ],
    rowType: true,
  },
];
