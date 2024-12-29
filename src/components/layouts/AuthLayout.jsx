const AuthLayout = (props) => {
  const { className, children } = props;

  return (
    <>
      <section className={`py-24 pb-10 ${className} lg:py-28 xl:py-32`}>
        <div className="container mx-auto">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
