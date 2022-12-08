import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import amazonButton from "../../../assets/amazon-button.png";
import { yourLists, userAccountMenuList } from "./data";

const NavigationList = ({ data, title }) => {
  return (
    <ListWrapper>
      <ListTitle>{title}</ListTitle>
      <Lists>
        {data.map((item) => {
          return (
            <ListItem key={item.name}>
              <StyledLinkRegular to={item.to}>{item.name}</StyledLinkRegular>
            </ListItem>
          );
        })}
      </Lists>
    </ListWrapper>
  );
};

const SignInFlyout = ({ isOpen }) => {
  return (
    <>
      {isOpen ? (
        <FlyOutAnchor>
          <FlyOutContent>
            <Wrapper>
              <Grid direction="column">
                <Grid direction="column" align="center">
                  <ButtonLink to="#">Sign in</ButtonLink>
                  <NavItem>
                    <NavText>New customer?</NavText>
                    <StyledLink to="#">Start here.</StyledLink>
                  </NavItem>
                </Grid>
                <Divider />
                <Grid direction="row">
                  <NavigationList title="Your Lists" data={yourLists} />
                  <Divider vertical />
                  <NavigationList
                    title="Your Account"
                    data={userAccountMenuList}
                  />
                </Grid>
              </Grid>
            </Wrapper>
          </FlyOutContent>
        </FlyOutAnchor>
      ) : null}
    </>
  );
};

export default SignInFlyout;

const verticalDivider = css`
  width: 1px;
`;
const horizontalDivider = css`
  height: 1px;
`;

const Divider = styled.div`
  background: #eee;

  ${(props) => (props.vertical ? verticalDivider : horizontalDivider)}
  margin-left: 20px;
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Lists = styled.ul``;

const ListTitle = styled.h4``;

const ListItem = styled.li`
  white-space: nowrap;
`;

const ListWrapper = styled.div``;
const StyledLinkRegular = styled(Link)`
  text-decoration: none;
  color: #444;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    color: orange;
  }
`;

const FlyOutAnchor = styled.div`
  position: relative;
`;

const FlyOutContent = styled.div`
  position: absolute;
  top: -6px;
  left: -200px;
  z-index: 100;
`;

const Wrapper = styled.div`
  background-color: white;
  min-width: 210px;

  padding: 12px;
  border-radius: 5px;
  color: black;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  justify-content: center;
  align-items: ${(props) => (props.align !== "" ? props.align : "start")}; ;
`;

const ButtonLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  text-decoration: none;
  text-align: center;

  margin: 0;
  padding: 0;
  border-radius: 5px;

  height: 36px;
  width: 220px;

  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
  color: #000;

  background-image: url(${amazonButton});
  background-size: cover;
`;

const NavItem = styled.div`
  text-align: center;
`;
const NavText = styled.span`
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  margin-left: 8px;
  /* cursor: pointer; */
  &:hover {
    text-decoration: underline;
  }
`;
