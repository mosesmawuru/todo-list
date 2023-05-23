import styled from "styled-components";

export const ModalWrapper = styled.div<{ isshow?: string }>`
  max-width: 560px;
  width: 95%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 40px;
  border-radius: 20px;
  background: #0a0a0a;
  box-shadow: 0px 0px 40px 5px rgba(255, 255, 255, 0.2);
  opacity: ${({ isshow }) => (isshow ? 1 : 0)};
  visibility: ${({ isshow }) => (isshow ? "visible" : "hidden")};
`;

export const ModalOverLay = styled.div<{ isshow?: string }>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00000080;
  opacity: ${({ isshow }) => (isshow ? 1 : 0)};
  visibility: ${({ isshow }) => (isshow ? "visible" : "hidden")};
  backdrop-filter: blur(5px);
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  & > span:last-child {
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  margin: 40px 0;
`;

export const ModalFormWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 24px;
  }
`;

export const ModalActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;
