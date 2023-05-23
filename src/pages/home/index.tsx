import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./styles";
import { TableBody, TableHeader } from "../../modules";
import { useDispatch, useSelector } from "react-redux";
import { TodoDataTypes, TodoState } from "../../types/dataTypes";
import { initTodoData } from "../../data/todo";
import { todoActions } from "../../store/todo";
import { TodoModal } from "../../components";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [editId, setEditId] = useState<number>(-1);
  const { data } = useSelector((state: TodoState) => state.todo);
  const [filtered, setFiltered] = useState<TodoDataTypes[]>([]);

  useEffect(() => {
    dispatch(todoActions.get(initTodoData));
  }, [dispatch]);

  useEffect(() => {
    setFiltered(sortData(data));
  }, [data]);

  const handleSearch = (value: string) => {
    setTimeout(() => {
      const filteredTempData = data.filter(
        (f) =>
          f.title.toLowerCase().includes(value.toLowerCase()) ||
          f.desc.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(value ? sortData(filteredTempData) : sortData(data));
    }, 1000);
  };

  const sortData = (originData: TodoDataTypes[]) => {
    return [...Object.freeze(originData)].sort(
      (a: TodoDataTypes, b: TodoDataTypes) =>
        Number(a.status) - Number(b.status) || b.id - a.id
    );
  };

  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleAddClick = (key: "add" | "edit", id: number) => {
    setIsModal(true);
    setModalType(key);
    setEditId(id);
  };

  return (
    <HomeWrapper>
      <TableHeader onAdd={handleAddClick} onSearch={handleSearch} />
      <TableBody todoList={filtered} onEdit={handleAddClick} />
      <TodoModal
        editId={editId}
        isShow={isModal}
        type={modalType}
        onClose={handleModalClose}
      />
    </HomeWrapper>
  );
};
