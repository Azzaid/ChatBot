import React, {useState} from "react";
import styled from "styled-components";

const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .modalWindow {
    background-color: ${props => props.theme.infoCardBackgroundColor};
    padding: 10px 20px;
  }
`

export const ModalContext = React.createContext(() => {console.log('you forgot to set value')});

const GlobalModalProvider = (props) => {
  const [modalContent, setModalContent] = useState();

  return <React.Fragment>
    {!!modalContent &&
      <StyledModalWrapper>
        <div className={"modalWindow"}>
          {modalContent}
        </div>
      </StyledModalWrapper>
    }
    <ModalContext.Provider value={setModalContent}>
      {props.children}
    </ModalContext.Provider>

  </React.Fragment>
}

export default GlobalModalProvider