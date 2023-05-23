import React from "react";
import {
  ModalActionWrapper,
  ModalContent,
  ModalOverLay,
  ModalTitle,
  ModalWrapper,
} from "./styled";
import { ModalProps } from "../../types/componentPropsType";
import { Button } from "../";

export const ConfirmModal: React.FC<ModalProps> = ({
  isShow,
  onClose,
  onOk,
}) => {
  return (
    <React.Fragment>
      <ModalWrapper isshow={isShow ? "true" : undefined}>
        <ModalTitle>
          <span>Delete Todo</span>
          <span onClick={onClose}>&times;</span>
        </ModalTitle>
        <ModalContent>
          <p>Do you want to delete this todo, really?</p>
        </ModalContent>
        <ModalActionWrapper>
          <Button label="Cancel" onClick={onClose} type="default" />
          <Button label="Confirm" onClick={onOk} type="danger" />
        </ModalActionWrapper>
      </ModalWrapper>
      <ModalOverLay isshow={isShow ? "true" : undefined} />
    </React.Fragment>
  );
};
