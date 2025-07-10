import "./Header.css";
import Logo from "../Logo/Logo";
import Navbar from "../NavBar/NavBar";
 
function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
