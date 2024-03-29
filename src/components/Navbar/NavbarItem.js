import { NavItem, NavLink } from "react-bootstrap";

function NavBarItem(props) {
  const { text, setCurr, curr } = props;

  const handleClick = () => {
    setCurr(text.toLowerCase());
  };

  return (
    <NavItem
      onClick={handleClick}
      className={curr === text.toLowerCase() && "bg-dark rounded-2"}
    >
      <NavLink
        className={curr === text.toLowerCase() ? "text-light" : "text-dark"}
      >
        {text}
      </NavLink>
    </NavItem>
  );
}

export default NavBarItem;