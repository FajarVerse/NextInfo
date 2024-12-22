import { Link } from "react-router";

const CustomLink = (props) => {
  const { className, url, children } = props;

  return (
    <>
      <Link
        className={`font-montserrat font-semibold text-base ${className}`}
        to={`${url}`}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
