import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import Comments from "@/components/Comments";
import AboutMe from "@/components/aboutme";
import RandomPosts from "@/components/RandomPost";

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
    <div className="relative p-4 ">
      <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          background:
            "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)",
        }}
      ></div>
      <div className="my-12 text-center flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-xs my-2">{post.data.date}</p>
        <h1 className="text-3xl text-primary font-bold">{post.data.title}</h1>
        <div className="flex gap-2 my-4 flex-wrap">
          {post.data.tags.map((tag: string) => (
            <p
              key={tag}
              className="text-slate-800 p-2 rounded-lg text-xs bg-purple-300 m-1 inline-block"
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="mb-8 mt-8 border border-b border-muted-foregound w-72"></div>
      </div>
      <article className=" max-w-screen-3xl mx-auto prose dark:prose-white prose-black">
        <Markdown>{post.content}</Markdown>
      </article>
      <div className="max-w-screen-3xl mt-24 md:w-1/2 mx-auto ">
        <AboutMe />
        <Comments />
      </div>
      <div className="max-w-screen-3xl mt-24 md:w-1/2 mx-auto ">
        <RandomPosts currentPostHref={`/posts/${slug}`} />
      </div>
    </div>
  );
};

export default PostPage;
