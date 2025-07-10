import "./AboutUs.css";
import { Link, Outlet } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link to="history">Minha História</Link>
        </li>
        <li>
          <Link to="mission">Hobbies</Link>
        </li>
      </ul>
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
