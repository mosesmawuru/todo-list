import styled from "styled-components";

export const TableHeaderWrapper = styled.div`
  border-bottom: 1px solid #49454f;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    margin-left: 20px;
  }
`;

export const HeaderActionWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchBoxWrapper = styled.div`
  margin-right: 14px;
  max-width: 300px;
  width: 100%;
`;

export const AddButtonWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ffffff10;
  }
  &:active {
    background-color: #ffffff30;
  }
`;
