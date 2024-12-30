import { useContext } from "react";
import { TrackingMosue } from "../../context/TrackingMouse";
import Menu from "./Navbar";

const AuthLayout = (props) => {
  const { className, children } = props;
  const { isTracking, setIsTracking } = useContext(TrackingMosue);

  console.log(isTracking);
  let mouseTimeOut;
  const handleMouseMove = () => {
    setIsTracking(true);
    clearTimeout(mouseTimeOut);

    mouseTimeOut = setTimeout(() => {
      setIsTracking(!isTracking);
    }, 1000);
  };

  return (
    <>
      <Menu />
      <section
        className={`py-24 pb-10 ${className} lg:py-28 xl:py-32`}
        onMouseMove={() => handleMouseMove()}
      >
        <div className="container mx-auto">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
