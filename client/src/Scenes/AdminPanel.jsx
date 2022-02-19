import React from "react";
import styled from 'styled-components';

const StyledAdminPanelHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AdminPanel = (props) => {
  return (
    <StyledAdminPanelHolder>
      <div>
        Nothing yet there
      </div>
    </StyledAdminPanelHolder>
  )
}

export default AdminPanel