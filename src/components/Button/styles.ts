import styled from "styled-components";
import { ButtonProps } from "../../types/componentPropsType";

export const ButtonWrapper = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 33px;
  font-weight: 800;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0.21em;
  text-transform: uppercase;
  cursor: pointer;
  ${({ type }) => {
    switch (type) {
      case "default":
        return "background-color: #0E0E0E;";
      case "danger":
        return "background-color: #E11D48;";
      case "success":
        return "background-color: #45D6A9;";
      default:
        return "background-color: #0E0E0E;";
    }
  }}
  opacity: ${({ disabled }) => (disabled ? "0.12" : "1")};
`;
