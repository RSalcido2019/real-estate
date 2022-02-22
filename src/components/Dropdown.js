 import React from 'react'
 import styled from 'styled-components'
 import {Button} from "./Button";

 const DropdownContainer = styled.div`
     position: fixed;
     z-index: 999;
     width: 100%;
     height: 100%;
     background: #cd853f;
     display: grid;
     align-items: center;
     top: 0;
     left: 0;
     transition: 0.3s ease-in-out;
     opacity: 1;
     top: 0;
 `;

 const Dropdown = () => {
    return (
        <DropdownContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                {menuData.map((item, index) => {
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                })}
              <DropdownMenu>
                  <BtnWrap>
                      <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                      </Button>
                      </BtnWrap>
                  </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    )
 }

 export default Dropdown;