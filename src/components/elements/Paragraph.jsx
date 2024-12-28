const Paragraph = (props) => {
  const { className, children } = props;

  return (
    <>
      <p className={`font-open_sans text-base text-lightSlate mt-2 ${className}`}>
        {children}
      </p>
    </>
  );
};

export default Paragraph;
