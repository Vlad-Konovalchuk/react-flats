import styled from 'styled-components'

const Header = styled.header`
  padding: 20px 16px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
`;

const HeaderTitle = styled.h2`
  padding: 0;
  margin: 0;
  color: #fff;
`;
const HeaderNav = styled.nav`
  padding: 0;
`;
const HeaderNavList = styled.ul`
  margin: 0;
  padding: 0;
  display:flex;
  list-style: none;
`;
const HeaderNavItem = styled.li`
  margin: 0 16px;
  padding: 0;
  color: #fff;
`;
export const Styled = {
    Header,
    HeaderTitle,
    HeaderNav,
    HeaderNavList,
    HeaderNavItem,
}
