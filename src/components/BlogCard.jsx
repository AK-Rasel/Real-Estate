// eslint-disable-next-line react/prop-types
function BlogCard({ img, content }) {
  return (
    <a href="blog-details.html" className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={img} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {content}
      </span>
    </a>
  );
}

export default BlogCard;
