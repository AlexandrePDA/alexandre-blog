/* eslint-disable react/no-unescaped-entities */
import Ressources from "@/components/Ressources";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import Newsletter from "@/components/Newsletter";
import { CheckCircle2 } from "lucide-react";
import Presentation from "@/components/Presentation";

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => {
    return <PostPreview key={index} index={index} {...post} />;
  });

  return (
    <div className="p-4 my-12 relative">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-center text-primary text-4xl font-bold md:text-6xl">
          Le Point Dev d'Alexandre ⚡️
        </h1>
        <div className="flex flex-col md:flex-row gap-4 flex-wrap text-muted-foreground mt-8">
          <div className="flex  items-center gap-2 ">
            <CheckCircle2 color="#51EF6C" />
            <p>2 articles par semaine</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 color="#51EF6C" />
            <p>1 newsletter tous les lundis</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 color="#51EF6C" />
            <p>+ des ressources illimitées</p>
          </div>
        </div>

        <Newsletter />

        <div className="mb-16 border border-b border-muted-foregound w-48"></div>
      </div>
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-center text-3xl font-bold md:text-5xl text-primary mb-8">
          Tous les articles 📝
        </h2>
      </div>
      <div className="items-center justify-center flex flex-col md:flex-row flex-wrap max-w-screen-xl mx-auto">
        {postPreviews}
      </div>
      <div className="mx-auto m-16 border border-b border-muted-foregound w-48"></div>
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="font-semibold text-3xl text-primary mb-8">Ressources</h2>
        <Ressources />
      </div>
    </div>
  );
};

export default Home;
