import React from "react";
import { InputProps } from "../../types/componentPropsType";
import { InputWrapper } from "./styles";

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  value,
  prefix,
  suffix,
}) => {
  return (
    <InputWrapper>
      {prefix && <div>{prefix}</div>}
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {suffix && <div>{suffix}</div>}
    </InputWrapper>
  );
};
