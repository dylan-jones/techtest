import styled from "styled-components";

const DialogStyled = styled.dialog`
  width: 600px;
  height: 400px;
  border-radius: 20px;
  background: #ffffffff;
  box-shadow: 0px 2px 20px 0px #0000004d;
  border: none;
`;

const Dialog = ({ children }) => {
  return (
    <DialogStyled open>
      {children}
    </DialogStyled>
  );
};

export default Dialog;
