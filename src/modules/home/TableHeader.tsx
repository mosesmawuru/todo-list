import React, { useState } from "react";
import {
  IconAdd,
  IconCircelOutlinedList,
  IconSearch,
  Input,
} from "../../components";
import {
  AddButtonWrapper,
  HeaderActionWrapper,
  HeaderTitle,
  SearchBoxWrapper,
  TableHeaderWrapper,
} from "./styles";

export const TableHeader: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const handleAddClick = () => {};

  return (
    <TableHeaderWrapper>
      <HeaderTitle>
        <IconCircelOutlinedList />
        <h3>Todo List</h3>
      </HeaderTitle>
      <HeaderActionWrapper>
        <SearchBoxWrapper>
          <Input
            value={searchInput}
            onChange={handleSearch}
            placeholder="Search..."
            suffix={<IconSearch />}
          />
        </SearchBoxWrapper>
        <AddButtonWrapper onClick={handleAddClick}>
          <IconAdd />
        </AddButtonWrapper>
      </HeaderActionWrapper>
    </TableHeaderWrapper>
  );
};
