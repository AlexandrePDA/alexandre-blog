import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import Comments from "@/components/Comments";
import AboutMe from "@/components/aboutme";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className=" p-4 ">
      <div className="my-12 text-center flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-xs my-2">{post.data.date}</p>
        <h1 className="text-3xl text-primary font-bold">{post.data.title}</h1>
        <p className="text-muted-foreground mt-2">#{post.data.tag}</p>

        <div className="mb-8 mt-8 border border-b border-muted-foregound w-72"></div>
      </div>
      <article className=" max-w-screen-3xl mx-auto prose dark:prose-white prose-black">
        <Markdown>{post.content}</Markdown>
      </article>
      <div className="max-w-screen-3xl mt-24 md:w-1/2 mx-auto ">
        <AboutMe />
        <Comments />
      </div>
    </div>
  );
};

export default PostPage;
