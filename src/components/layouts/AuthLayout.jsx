const AuthLayout = (props) => {
  const { children } = props;

  return (
    <>
      <section className="py-24 pb-10">
        <div className="container">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
