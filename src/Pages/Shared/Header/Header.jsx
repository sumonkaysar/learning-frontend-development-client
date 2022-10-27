import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { RiPaintFill } from 'react-icons/ri'
import { useContext } from "react";
import Logo from '../../../assets/logo/logo.png';
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut, theme, themeChanger } = useContext(AuthContext);

  // Logout
  const handleLogout = () => {
    logOut()
    .then(() => console.log('logged out'))
    .catch(err => console.error(err));
  }

  // Theme changer
  const handleTheme = () => {
    let newTheme;
    if (theme === 'dark') {
      newTheme = 'light';
    }else{
      newTheme = 'dark';
    }
    themeChanger(newTheme);
  }

  return (
    <div className="navbar bg-base-100 fixed top-0 z-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex items-center text-sm md:text-xl">
            <img className="w-5 h-5 md:w-7 md:h-7 mr-2" src={Logo} />
            <span>Learning Frontend Development</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 hidden md:flex">
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li onClick={handleTheme}>
              <span><RiPaintFill className="w-6 h-6" /></span>
            </li>
            {
              user ?
                <>
                  <li>
                    <Link to="/profile">
                      <img title={user?.displayName} className="w-7 h-7 rounded-full" src={user?.photoURL} />
                    </Link>
                  </li>
                  <li className="items-center">
                    <button onClick={handleLogout} className="btn btn-outline btn-sm py-0">Logout</button>
                  </li>
                </> :
                <li><Link to="/login">Login</Link></li>
            }
          </ul>
          {/* Mobile menu */}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FaBars />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
              {
                user ?
                  <>
                    <li>
                      <Link to="/profile">
                        <img className="w-5 h-5 rounded-full" src={user.photoURL} />
                        {
                          user?.displayName
                        }
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="btn btn-outline btn-primary">Logout</button>
                    </li>
                  </> :
                  <li><Link to="/login">Login</Link></li>
              }
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li onClick={handleTheme}>
                <span><RiPaintFill className="w-6 h-6" /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
