import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const { user } = { user: { photoURL: 'logo.png', displayName: 'Sumon Kaysar' } }

  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex items-center text-sm md:text-xl">
            <img className="w-5 h-5 md:w-7 md:h-7 mr-2" src="logo.png" />
            <span>Learning Frontend Development</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 hidden md:flex">
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {
              user ?
                <li>
                  <Link to="/profile">
                    <img title={user?.displayName} className="w-7 h-7 rounded-full" src={user?.photoURL} />
                  </Link>
                </li> :
                <li><Link to="/login">Login</Link></li>
            }
          </ul>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <FaBars />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
              {
                user ?
                  <li>
                    <Link to="/profile">
                      <img className="w-5 h-5 rounded-full" src={user.photoURL} />
                      {
                        user?.displayName
                      }
                    </Link>
                  </li> :

                  <li><Link to="/login">Login</Link></li>
              }
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
