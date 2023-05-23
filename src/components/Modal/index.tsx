import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalActionWrapper,
  ModalContent,
  ModalFormWrapper,
  ModalOverLay,
  ModalTitle,
  ModalWrapper,
} from "./styled";
import { Input, Button } from "../";
import { ModalProps } from "../../types/componentPropsType";
import { todoActions } from "../../store/todo";
import { TodoDataTypes, TodoState } from "../../types/dataTypes";
import { getCurrentDate } from "../../utils/getCurrentDate";

export const TodoModal: React.FC<ModalProps> = ({
  isShow,
  onClose,
  editId = -1,
  type = "add",
}) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: TodoState) => state.todo);
  const [form, setForm] = useState({ title: "", desc: "" });

  useEffect(() => {
    if (type === "edit" && isShow) {
      const editData = data.filter((f) => f.id === editId)[0];
      setForm({ title: editData.title, desc: editData.desc });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    if (form.title) {
      if (type === "add") {
        const newData: TodoDataTypes = {
          id:
            data.length > 0
              ? [...Object.freeze(data)].sort(
                  (a: TodoDataTypes, b: TodoDataTypes) => a.id - b.id
                )[data.length - 1].id + 1
              : 0,
          title: form.title,
          desc: form.desc,
          status: false,
          date: getCurrentDate(),
        };
        dispatch(todoActions.add(newData));
      } else if (type === "edit") {
        const newData: TodoDataTypes = {
          id: editId,
          title: form.title,
          desc: form.desc,
          status: false,
          date: getCurrentDate(),
        };
        dispatch(todoActions.edit(newData));
      }
      toast.success("Created Todo list successful.");
      setForm({ title: "", desc: "" });
      onClose && onClose();
    } else {
      toast.warn("Title field is required.");
    }
  };

  const handleClose = () => {
    setForm({ title: "", desc: "" });
    onClose && onClose();
  };

  return (
    <React.Fragment>
      <ToastContainer theme="dark" />
      <ModalWrapper isshow={isShow ? "true" : undefined}>
        <ModalTitle>
          <span>{type === "add" ? "Create" : "Edit"} Todo</span>
          <span onClick={handleClose}>&times;</span>
        </ModalTitle>
        <ModalContent>
          <ModalFormWrapper>
            <Input
              label="TODO TITLE"
              name="title"
              value={form.title}
              placeholder="Input Title Here"
              onChange={handleChange}
            />
            <Input
              textarea
              label="TODO DESCRIPTION"
              value={form.desc}
              name="desc"
              placeholder="Input Description here"
              onChange={handleChange}
            />
          </ModalFormWrapper>
        </ModalContent>
        <ModalActionWrapper>
          <Button label="Cancel" onClick={handleClose} type="default" />
          <Button label="Save" onClick={handleSave} type="success" />
        </ModalActionWrapper>
      </ModalWrapper>
      <ModalOverLay
        onClick={handleClose}
        isshow={isShow ? "true" : undefined}
      />
    </React.Fragment>
  );
};
