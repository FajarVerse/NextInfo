const Header = (props) => {
  const { className, children } = props;

  return (
    <>
      <h1 className={`font-kanit font-bold text-4xl text-secondary tracking-tight ${className}`}>
        {children}
      </h1>
    </>
  );
};

export default Header;
