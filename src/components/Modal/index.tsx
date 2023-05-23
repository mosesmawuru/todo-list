import React, { useState } from "react";
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
import { useDispatch } from "react-redux";

export const TodoModal: React.FC<ModalProps> = ({
  isShow,
  onClose,
  type = "add",
}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", desc: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    onClose && onClose();
  };

  return (
    <React.Fragment>
      <ModalWrapper isShow={isShow}>
        <ModalTitle>
          <span>{type === "add" ? "Create" : "Edit"} Todo</span>
          <span onClick={onClose}>&times;</span>
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
          <Button label="Cancel" onClick={onClose} type="default" />
          <Button label="Export" onClick={handleSave} type="success" />
        </ModalActionWrapper>
      </ModalWrapper>
      <ModalOverLay onClick={onClose} isShow={isShow} />
    </React.Fragment>
  );
};
