import { FaBolt, FaRegCircleXmark } from "react-icons/fa6";

const DialogHeader = ({ children }) => {
  return (
    <header>
      <div>
        <FaBolt />
        <h1>{children}</h1>
      </div>
      <div>
        
        <FaRegCircleXmark />
      </div>
    </header>
  );
};

export default DialogHeader;
