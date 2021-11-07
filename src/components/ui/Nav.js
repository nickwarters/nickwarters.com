import styled from "styled-components";
import Link from "next/link";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const NavMenu = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin-left: 5rem;
`;

const Hamburger = styled.div`
  display: block;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background-color: #000000;
`;

const Nav = () => (
  <Navbar>
    <div>NW</div>
    <NavMenu>
      <NavItem>
        <Link href="#">
          <a>Link 1</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#">
          <a>Link 2</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#">
          <a>Link 3</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#">
          <a>Link 4</a>
        </Link>
      </NavItem>
    </NavMenu>
    <Hamburger>
      <Bar />
      <Bar />
      <Bar />
    </Hamburger>
  </Navbar>
);

export default Nav;
