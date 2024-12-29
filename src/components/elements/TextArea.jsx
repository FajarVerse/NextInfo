const TextArea = (props) => {
  const { id, placeholder } = props;

  return (
    <>
      <label htmlFor={id}>
        <textarea
          name={id}
          id={id}
          placeholder={placeholder}
          className="message"
        ></textarea>
      </label>
    </>
  );
};

export default TextArea;
