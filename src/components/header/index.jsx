import logo from "../../assets/websitelogo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./header.css";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { StoreContext } from "../../App";

export const headerRoutes = [
  {
    id: 2,
    link: "/",
    name: "The Journey",
  },
  {
    id: 3,
    link: "/team",
    name: "Team",
  },
  {
    id: 4,
    link: "/store",
    name: "Store",
  },
  {
    id: 5,
    link: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const { dispatch, showMobileMenu } = useContext(StoreContext);
  console.log({ showMobileMenu });
  return (
    <>
      <header className="wrapperWidth">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>

        <nav className="header-nav">
          {headerRoutes.map((route) => (
            <NavLink activeClassName="active" key={route.id} to={route.link}>
              <span>{route.name}</span>
            </NavLink>
          ))}
        </nav>

        {showMobileMenu ? (
          <IoClose
            className="hamburger"
            size={25}
            onClick={() => {
              dispatch({
                method: "TOGGLE_MENU",
                payload: false,
              });
            }}
          />
        ) : (
          <HiOutlineMenuAlt3
            className="hamburger"
            size={25}
            onClick={() => {
              dispatch({
                method: "TOGGLE_MENU",
                payload: true,
              });
            }}
          />
        )}

        <div className="profile">
          <FiUser size={25} />
          <span>Tajender</span>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
