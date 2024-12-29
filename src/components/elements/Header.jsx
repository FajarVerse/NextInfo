const Header = (props) => {
  const { className, children } = props;

  return (
    <>
      <h1 className={`font-kanit font-bold text-4xl text-secondary tracking-tight ${className} md:text-6xl lg:text-5xl xl:text-7xl`}>
        {children}
      </h1>
    </>
  );
};

export default Header;
