import styled from "styled-components";
import Link from "next/link";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen only and (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin-left: 5rem;
`;

const Nav = () => (
  <Navbar>
    <NavMenu>
      <NavItem>
        <Link href="/#">
          <a>Link 1</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#">
          <a>Link 2</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#">
          <a>Link 3</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/#">
          <a>Link 4</a>
        </Link>
      </NavItem>
    </NavMenu>
    <div className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </Navbar>
);

export default Nav;
