import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./styles";
import { TableBody, TableHeader } from "../../modules";
import { useDispatch, useSelector } from "react-redux";
import { TodoState } from "../../types/dataTypes";
import { initTodoData } from "../../data/todo";
import { todoActions } from "../../store/todo";
import { TodoModal } from "../../components";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const { data } = useSelector((state: TodoState) => state.todo);

  useEffect(() => {
    dispatch(todoActions.get(initTodoData));
  }, [dispatch]);

  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleAddClick = () => {
    setIsModal(true);
    setModalType("add");
  };

  return (
    <HomeWrapper>
      <TableHeader onAdd={handleAddClick} />
      <TableBody todoList={data} />
      <TodoModal isShow={isModal} type={modalType} onClose={handleModalClose} />
    </HomeWrapper>
  );
};
