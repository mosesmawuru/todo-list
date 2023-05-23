import styled from "styled-components";

export const TodoItemWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #49454f;
  padding-bottom: 12px;
`;

export const ItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    span {
      margin-left: 10px;
      font-size: 16px;
      opacity: 0.7;
    }
  }
`;

export const ItemActionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #ffffff10;
  }
  &:active {
    background-color: #ffffff30;
  }
`;

export const ArrowWrapper = styled.div<{ isexpand?: string }>`
  display: flex;
  align-items: center;
  margin-right: 22px;
  transform: ${({ isexpand }) => (isexpand ? "rotate(-180deg)" : "rotate(0)")};
`;

export const ItemDescWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 10px 40px;
`;
