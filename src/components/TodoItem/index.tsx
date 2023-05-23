import React from "react";
import {
  ArrowWrapper,
  ItemAction,
  ItemActionWrapper,
  ItemTitleWrapper,
  TodoItemWrapper,
} from "./styles";
import { IconArrowDown, IconCheck, IconEdit, IconRemove } from "../Icons";
import { TodoItemProps } from "../../types/componentPropsType";

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  desc,
  status,
  onEdit,
  onRemove,
  onStatusChange,
}) => {
  return (
    <TodoItemWrapper>
      <ItemTitleWrapper>
        <ArrowWrapper>
          <IconArrowDown />
        </ArrowWrapper>
        <p>{title}</p>
      </ItemTitleWrapper>
      <ItemActionWrapper>
        <ItemAction onClick={onEdit}>
          <IconEdit />
        </ItemAction>
        <ItemAction onClick={onStatusChange}>
          <IconCheck checked={status} />
        </ItemAction>
        <ItemAction onClick={onRemove}>
          <IconRemove />
        </ItemAction>
      </ItemActionWrapper>
    </TodoItemWrapper>
  );
};
