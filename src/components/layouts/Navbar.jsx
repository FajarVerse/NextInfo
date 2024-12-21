import { useRef } from "react";

const Navbar = () => {
  const NavbarRef = useRef(null);
  const HeaderRef = useRef(null);

  const handleClickMenu = () => {
    NavbarRef.current.classList.toggle("navbar-menu-active");
  };

  window.onscroll = function () {
    const fixNavbar = HeaderRef.current.offsetTop;
    if (window.scrollY > fixNavbar) {
      HeaderRef.current.classList.add("header-fixed");
    } else {
      HeaderRef.current.classList.remove("header-fixed");
    }
  };

  return (
    <>
      <header
        className="py-5 bg-background sticky top-0 left-0 right-0 transition duration-300 ease-in"
        ref={HeaderRef}
      >
        <div className="container">
          <div className="w-full px-5 flex justify-between">
            <div>
              <div className="navbar-btn group" onClick={handleClickMenu}>
                <a href="#" className="navbar-icon">
                  <svg
                    className="fill-inherit"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </a>
              </div>
              <div
                className="invisible opacity-0 w-36 px-5 py-3 bg-secondary rounded-xl absolute -translate-y-4 z-50 transition duration-500 ease-in-out"
                ref={NavbarRef}
              >
                <ul className="block">
                  <li className="navbar-list">
                    <a href="">Home</a>
                  </li>
                  <li className="navbar-list">
                    <a href="">News</a>
                  </li>
                  <li className="navbar-list">
                    <a href="">About Us</a>
                  </li>
                  <li className="navbar-list">
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="navbar-btn group">
                <a href="#" className="navbar-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </a>
              </div>
              <div className="navbar-btn group">
                <a href="#" className="navbar-icon">
                  <svg
                    className="fill-inherit"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
