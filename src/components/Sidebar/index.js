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
function Sidebar({ isOpen, toggle }) {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="about" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="discover" onClick={toggle}>
                Discover
              </SidebarLink>
              <SidebarLink to="service" onClick={toggle}>
                Service
              </SidebarLink>
              <SidebarLink to="signup" onClick={toggle}>
                Sign Up
              </SidebarLink>
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
