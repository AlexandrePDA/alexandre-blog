import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="container  my-12">
      <h2 className="text-center text-primary text-3xl font-bold md:text-5xl">
        Mon blog
      </h2>
      <p className="mb-16 mt-4 text-center text-[#647084]">
        Retrouve tous mes articles ici
      </p>
      {postPreviews}
    </div>
  );
};

export default Home;
