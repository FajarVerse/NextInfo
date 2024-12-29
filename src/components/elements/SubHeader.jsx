const SubHeader = (props) => {
  const { className, children } = props;

  return (
    <>
      <h2
        className={`font-kanit font-bold text-2xl text-secondary ${className} md:text-4xl xl:text-5xl`}
      >
        {children}
      </h2>
    </>
  );
};

export default SubHeader;
