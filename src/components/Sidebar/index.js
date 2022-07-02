import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElement";
function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="about">About</SidebarLink>
              <SidebarLink to="discover">Discover</SidebarLink>
              <SidebarLink to="service">Service</SidebarLink>
              <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebarBtnWrap>
          </SidebarWrapper>
        </Icon>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
