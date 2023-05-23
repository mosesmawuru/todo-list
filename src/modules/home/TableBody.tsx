import React from "react";
import { TableBodyWrapper } from "./styles";
import { TodoItem } from "../../components";
import { TableBodyProps } from "../../types/componentPropsType";

export const TableBody: React.FC<TableBodyProps> = ({ todoList }) => {
  const handleEdit = () => {};

  const handleRemove = () => {};

  const handleStatusChange = () => {};

  return (
    <TableBodyWrapper>
      {todoList.map((item, key) => (
        <TodoItem
          key={key}
          {...item}
          onEdit={handleEdit}
          onRemove={handleRemove}
          onStatusChange={handleStatusChange}
        />
      ))}
    </TableBodyWrapper>
  );
};
