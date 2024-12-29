const Input = (props) => {
  const { type, id, placeholder, className } = props;

  return (
    <>
      <label htmlFor={id} className="inline-block w-full">
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          className={`input ${className}`}
          required
        />
      </label>
    </>
  );
};

export default Input;
