import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router";
import { TrackingMosue } from "../../context/TrackingMouse";

const Menu = () => {
  const { isTracking } = useContext(TrackingMosue);
  const MenuRef = useRef();

  useEffect(() => {
    const handleTracking = () => {
      if (isTracking) {
        MenuRef.current.classList.add("menu-active");
        MenuRef.current.classList.remove("menu-nonactive");
      } else {
        MenuRef.current.classList.add("menu-nonactive");
        MenuRef.current.classList.remove("menu-active");
      }
    };

    handleTracking();
  }, [isTracking]);

  return (
    <>
      <header
        ref={MenuRef}
        className="w-auto fixed bottom-6 left-1/2 -translate-x-1/2 px-7 py-1.5 bg-background shadow-md shadow-slate-400 rounded-md transition-all duration-500 ease-in-out hover:translate-y-0 hover:opacity-100 hover:visible"
      >
        <div className="container">
          <div className="w-full flex items-center gap-7">
            <Link className="navbar-icon">
              <svg
                className="fill-inherit mx-a"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z" />
              </svg>
            </Link>
            <Link className="navbar-icon">
              <svg
                className="fill-inherit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M160-120q-33 0-56.5-23.5T80-200v-480h80v480h600v80H160Zm160-160q-33 0-56.5-23.5T240-360v-480h680v480q0 33-23.5 56.5T840-280H320Zm0-80h520v-400H320v400Zm80-120h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80ZM320-360v-400 400Z" />
              </svg>
            </Link>
            <Link className="navbar-icon">
              <svg
                className="fill-inherit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </Link>
            <Link className="navbar-icon">
              <svg
                className="fill-inherit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
                <path d="M160-40v-80h640v80H160Zm0-800v-80h640v80H160Zm320 400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm70-80q45-56 109-88t141-32q77 0 141 32t109 88h70v-480H160v480h70Zm118 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-280q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0 40Z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
