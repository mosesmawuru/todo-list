import React from "react";
import { ButtonWrapper } from "./styles";
import { ButtonProps } from "../../types/componentPropsType";

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "default",
  onClick,
  disabled = false,
}) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled} type={type}>
      {label}
    </ButtonWrapper>
  );
};
