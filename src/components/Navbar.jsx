import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGraduationCap, FaUserAlt, FaSignOutAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logOut().then(() => {
      toast.info("Logged out successfully");
      setOpen(false);
      setMobileMenu(false);
      navigate("/");
    });
  };

  const linkClass = ({ isActive }) =>
    `relative py-2 transition-all duration-300 font-medium ${
      isActive
        ? "text-indigo-600 md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-full md:after:h-0.5 md:after:bg-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <FaGraduationCap className="text-white text-xl" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-800">
            Study<span className="text-indigo-600">Mate</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/find-partners" className={linkClass}>Find Partners</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/create-profile" className={linkClass}>Create Profile</NavLink></li>
              <li><NavLink to="/my-connections" className={linkClass}>My Connections</NavLink></li>
            </>
          )}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 md:gap-4" ref={dropdownRef}>
          {!user ? (
            <div className="hidden sm:flex gap-2">
              <Link to="/auth/login" className="btn btn-ghost btn-sm text-indigo-600 font-bold">Login</Link>
              <Link to="/auth/register" className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none btn-sm px-5 rounded-full">Register</Link>
            </div>
          ) : (
            <div className="relative">
              <div onClick={() => setOpen(!open)} className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-100 cursor-pointer border transition-all">
                <img src={user.photoURL || "https://i.ibb.co/2kR5w5G/user.png"} className="w-8 h-8 rounded-full object-cover border-2 border-indigo-200" alt="profile" />
                <FaChevronDown className={`text-gray-400 text-xs transition-transform ${open ? 'rotate-180' : ''}`} />
              </div>

              {open && (
                <div className="absolute right-0 mt-3 w-56 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-3 border-b border-gray-50 mb-1 text-sm">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Signed in as</p>
                    <p className="font-semibold text-gray-800 truncate">{user?.displayName}</p>
                  </div>
                  <Link to="/profile" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <FaUserAlt className="text-sm" /> Profile
                  </Link>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 transition-colors">
                    <FaSignOutAlt className="text-sm" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t ${mobileMenu ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-6 gap-4">
          <li><NavLink to="/" onClick={() => setMobileMenu(false)} className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/find-partners" onClick={() => setMobileMenu(false)} className={linkClass}>Find Partners</NavLink></li>
          {user ? (
            <>
              <li><NavLink to="/create-profile" onClick={() => setMobileMenu(false)} className={linkClass}>Create Profile</NavLink></li>
              <li><NavLink to="/my-connections" onClick={() => setMobileMenu(false)} className={linkClass}>My Connections</NavLink></li>
            </>
          ) : (
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link to="/auth/login" onClick={() => setMobileMenu(false)} className="btn btn-outline border-indigo-600 text-indigo-600">Login</Link>
              <Link to="/auth/register" onClick={() => setMobileMenu(false)} className="btn bg-indigo-600 text-white border-none">Register</Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;