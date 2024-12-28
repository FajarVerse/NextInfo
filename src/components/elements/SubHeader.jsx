const SubHeader = (props) => {
  const { className, children } = props;

  return (
    <>
      <h2
        className={`font-kanit font-bold text-2xl text-secondary ${className}`}
      >
        {children}
      </h2>
    </>
  );
};

export default SubHeader;
