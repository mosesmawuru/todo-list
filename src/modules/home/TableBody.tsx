import React, { useState } from "react";
import { TableBodyWrapper } from "./styles";
import { TodoItem } from "../../components";
import { TableBodyProps } from "../../types/componentPropsType";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo";
import { TodoDataTypes } from "../../types/dataTypes";

export const TableBody: React.FC<TableBodyProps> = ({ todoList, onEdit }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState<number>();

  const handleExpend = (id: number) => {
    setExpanded(expanded === id ? -1 : id);
  };

  const handleRemove = (item: TodoDataTypes) => {
    dispatch(todoActions.remove(item));
  };

  const handleStatusChange = (item: TodoDataTypes) => {
    let tempData = { ...item, status: !item.status };
    dispatch(todoActions.edit(tempData));
  };

  return (
    <TableBodyWrapper>
      {todoList.length > 0 ? (
        todoList.map((item, key) => (
          <TodoItem
            key={key}
            {...item}
            onExpend={handleExpend}
            isExpand={item.id === expanded}
            onEdit={() => onEdit("edit", item.id)}
            onRemove={() => handleRemove(item)}
            onStatusChange={() => handleStatusChange(item)}
          />
        ))
      ) : (
        <p>No Data</p>
      )}
    </TableBodyWrapper>
  );
};
