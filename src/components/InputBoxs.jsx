function InputBoxs({
  htmlFor,
  labelName,
  type,
  inputName,
  placeholder,
  className,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-4 block text-sm text-body-color dark:text-dark-6"
      >
        {labelName}
      </label>
      {type === "textarea" ? (
        <textarea
          name={inputName}
          rows="1"
          placeholder={placeholder}
          className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
        ></textarea>
      ) : (
        <input
          type={type}
          name={inputName}
          placeholder={placeholder}
          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
        />
      )}
    </div>
  );
}

export default InputBoxs;
