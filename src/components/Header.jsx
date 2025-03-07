import { NavLink } from "react-router-dom";

function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <div className="shadow px-2 py-5 text-xl flex flex-row justify-around">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <div onClick={logout}>logout</div>
      </div>
    </div>
  );
}

export default Header;
