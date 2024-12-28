const AuthLayout = (props) => {
  const { className, children } = props;

  return (
    <>
      <section className={`py-24 pb-10 ${className}`}>
        <div className="container">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
