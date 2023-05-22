import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  h2 {
    margin-left: 20px;
  }
`;

export const FooterWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Copyright = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
`;
