import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  ArrowWrapper,
  ItemAction,
  ItemActionWrapper,
  ItemDescWrapper,
  ItemTitleWrapper,
  TodoItemWrapper,
} from "./styles";
import { IconArrowDown, IconCheck, IconEdit, IconRemove } from "../Icons";
import { TodoItemProps } from "../../types/componentPropsType";
import { ConfirmModal } from "../Modal/ConfirmModal";

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  desc,
  status,
  isExpand,
  onExpend,
  onEdit,
  onRemove,
  onStatusChange,
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleRemove = () => {
    onRemove();
    setIsShow(false);
    toast.success("Todo item deleted successful.");
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <TodoItemWrapper>
        <ItemTitleWrapper onClick={() => onExpend(id)}>
          <ArrowWrapper isexpand={isExpand ? "true" : undefined}>
            <IconArrowDown />
          </ArrowWrapper>
          <p>{title}</p>
        </ItemTitleWrapper>
        <ItemActionWrapper>
          <ItemAction
            onClick={
              status
                ? () => {
                    toast.error(
                      "You can't edit because this item is already completed."
                    );
                  }
                : onEdit
            }
          >
            <IconEdit />
          </ItemAction>
          <ItemAction onClick={onStatusChange}>
            <IconCheck checked={status} />
          </ItemAction>
          <ItemAction onClick={() => setIsShow(true)}>
            <IconRemove />
          </ItemAction>
        </ItemActionWrapper>
      </TodoItemWrapper>
      {isExpand && (
        <ItemDescWrapper>{desc ? desc : "No Description"}</ItemDescWrapper>
      )}
      <ConfirmModal
        isShow={isShow}
        onOk={handleRemove}
        onClose={() => setIsShow(false)}
      />
    </>
  );
};
