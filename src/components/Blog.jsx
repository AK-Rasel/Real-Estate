import blog_1 from "../assets/images/blog/blog-01.jpg";
import blog_2 from "../assets/images/blog/blog-02.jpg";
import BlogCard from "./BlogCard";
function Blog() {
  return (
    <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
        <div className="flex flex-col gap-8">
          <BlogCard
            content=" I think really important to design with..."
            img={blog_1}
          />
          <BlogCard
            content=" Recognizing the need is the primary..."
            img={blog_2}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
