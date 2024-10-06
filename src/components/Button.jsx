function Button({ className, content, href }) {
  return (
    <a href={href} className={`${className} cursor-pointer`}>
      {content}
    </a>
  );
}

export default Button;
