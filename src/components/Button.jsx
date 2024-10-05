function Button({ className, content }) {
  return (
    <li>
      <a href="https://links.tailgrids.com/play-download" className={className}>
        {content}
      </a>
    </li>
  );
}

export default Button;
