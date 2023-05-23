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
import { TableHeaderProps } from "../../types/componentPropsType";

export const TableHeader: React.FC<TableHeaderProps> = ({
  onAdd,
  onSearch,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearch && onSearch(e.target.value);
  };

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
        <AddButtonWrapper onClick={() => onAdd("add", -1)}>
          <IconAdd />
        </AddButtonWrapper>
      </HeaderActionWrapper>
    </TableHeaderWrapper>
  );
};
