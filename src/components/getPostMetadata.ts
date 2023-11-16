import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    // Ensure tags are always treated as an array.
    let tags = matterResult.data.tags;
    if (!Array.isArray(tags)) {
      tags = [tags]; // Convert single tag to an array
    }

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      tags,
      slug: fileName.replace(".md", ""),
      image: matterResult.data.image,
    };
  });

  // Convert date from "dd/mm/yyyy" to a Date object.
  const parseDate = (dateString: any) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day);
  };

  // Sort posts by date from most recent to oldest.
  posts.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return posts;
};

export default getPostMetadata;
