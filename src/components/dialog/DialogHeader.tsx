import { FaBolt, FaRegCircleXmark } from "react-icons/fa6";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderCol = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DialogHeader = ({ children }) => {
  return (
    <HeaderStyled>
      {children && (
        <HeaderCol>
          <FaBolt />
          <h1>{children}</h1>
        </HeaderCol>
      )}
      <HeaderCol>
        <FaRegCircleXmark />
      </HeaderCol>
    </HeaderStyled>
  );
};

export default DialogHeader;
