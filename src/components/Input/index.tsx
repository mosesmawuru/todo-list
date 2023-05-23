import React from "react";
import { InputProps } from "../../types/componentPropsType";
import { InputLabel, InputWrapper } from "./styles";

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  textarea,
  name,
  value,
  label,
  prefix,
  suffix,
}) => {
  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper>
        {prefix && <div>{prefix}</div>}
        {textarea ? (
          <textarea
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            value={value}
          />
        )}
        {suffix && <div>{suffix}</div>}
      </InputWrapper>
    </div>
  );
};
