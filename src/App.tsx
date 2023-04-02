import { Navbar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import "./assets/i18n";
function App() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="/navbars">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/">Dashboard</Link>
          <Link to="/user-profile">User Profile</Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
