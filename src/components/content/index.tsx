import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ContentProps } from "./contentProps";
import { Expandable } from "./expandable";
import { Main } from "./main";
import { Maps } from "./maps";
import { Table } from "./table";
import { tempState } from "./table/localState";

export const Content: FC<ContentProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/table" element={<Table boardRowsAndCols={tempState} />} />
      <Route path="/exp" element={<Expandable />} />
    </Routes>
  );
};
