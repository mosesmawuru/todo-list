import styled from "styled-components";

export const InputWrapper = styled.div`
  background-color: #0e0e0e;
  min-height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 15px;
  width: 100%;
  input,
  textarea {
    resize: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
    flex: 1;
  }
  textarea {
    height: 100px;
    padding: 12px 0;
  }
  div {
    margin: 0 5px;
    display: flex;
  }
`;

export const InputLabel = styled.div`
  font-weight: 800;
  font-size: 9px;
  line-height: 20px;
  letter-spacing: 0.21em;
  text-transform: uppercase;
  color: #cdcdcd;
  margin-bottom: 4px;
`;
