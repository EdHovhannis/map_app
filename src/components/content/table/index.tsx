import { FC } from "react";
import { BoardRow, ColType } from "./localState";
import "./style.scss";
import { TableProps } from "./tableProps";
import { v4 as uuidv4 } from "uuid";
import cls from "classnames";

export const Table: FC<TableProps> = ({ boardRowsAndCols }) => {
  const mainClass = "uavp-boardm";
  const buildRows = (boardRowsAndCols: BoardRow[], rowType: boolean) => {
    return (
      <>
        {boardRowsAndCols
          .filter((item) => item.rowType === rowType)
          .map((rowItem) => (
            <ul
              key={uuidv4()}
              className={cls({
                [`${mainClass}-table__rows`]: true,
              })}
            >
              {rowItem.row.map((colItem) => (
                <li
                  key={uuidv4()}
                  className={cls({
                    [`${mainClass}-table__cols`]: true,
                    [`${mainClass}-table__cols-${colItem.colType}`]: [
                      "description",
                      "total",
                      "date",
                      "vote",
                    ].includes(colItem.colType as ColType),
                  })}
                >
                  {/* <LabelM
                    text={colItem.col || ""}
                    theme={colItem.theme || "simple"}
                  /> */}
                  <span>{colItem.col}</span>
                </li>
              ))}
            </ul>
          ))}
      </>
    );
  };

  return (
    <div style={{ width: "800px" }}>
      <div className={`${mainClass}`}>
        {Array.isArray(boardRowsAndCols) && (
          <ul className={cls({ [`${mainClass}-table`]: true })}>
            <li className={cls({ [`${mainClass}-table-thead`]: true })}>
              {buildRows(boardRowsAndCols, true)}
            </li>
            <li className={cls({ [`${mainClass}-table-tbody`]: true })}>
              {buildRows(boardRowsAndCols, false)}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
