const Paragraph = (props) => {
  const { className, children } = props;

  return (
    <>
      <p className={`font-open_sans text-base text-lightSlate mt-2 ${className} md:text-lg lg:text-[1.1rem] xl:text-lg`}>
        {children}
      </p>
    </>
  );
};

export default Paragraph;
