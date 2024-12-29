const Input = (props) => {
  const { type, id, placeholder } = props;

  return (
    <>
      <label htmlFor={id}>
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          className="input"
          required
        />
      </label>
    </>
  );
};

export default Input;
