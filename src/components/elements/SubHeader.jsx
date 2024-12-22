const SubHeader = (props) => {
  const { className, children } = props;

  return (
    <>
      <h2
        className={`font-montserrat font-bold text-2xl text-primary ${className}`}
      >
        {children}
      </h2>
    </>
  );
};

export default SubHeader;
