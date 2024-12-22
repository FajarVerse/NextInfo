const Header = (props) => {
  const { className, children } = props;

  return (
    <>
      <h1 className={`font-montserrat font-bold text-3xl tracking-tight ${className}`}>
        {children}
      </h1>
    </>
  );
};

export default Header;
