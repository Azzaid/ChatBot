import { ModalContext } from "HOC/GlobalModalProvider";
import React, {useContext} from "react";

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal