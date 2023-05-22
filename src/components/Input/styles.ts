import styled from "styled-components";

export const InputWrapper = styled.div`
  background-color: #0e0e0e;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 15px;
  width: 100%;
  input {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
    flex: 1;
  }
  div {
    margin: 0 5px;
    display: flex;
  }
`;
