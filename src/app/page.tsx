/* eslint-disable react/no-unescaped-entities */
import Ressources from "@/components/Ressources";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="p-4 my-12">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-center text-primary text-3xl font-bold md:text-5xl">
          Le Point Dev d'Alexandre ⚡️
        </h1>

        <p className="max-w-screen-md mx-auto p-4 m-4  text-muted-foreground dark:text-white">
          Ici, tu trouveras plein d'articles couvrant divers aspects du
          développement : de l'optimisation pour booster ta performance, aux
          outils essentiels pour tout développeur, en passant par des conseils
          pratiques basés sur mon expérience. <br />
          <br />
          Avec mon parcours varié en entreprise et en freelance, j'ai eu la
          chance de voir le monde de la programmation et du développement web
          sous différents angles. Ces expériences m'ont donné une vision unique,
          que je souhaite te transmettre. <br />
          <br /> Que tu sois débutant ou développeur aguerri, parcours toutes
          mes ressources pour améliorer ta pratique et gagner en confiance ✨
        </p>
        <div className="mb-16 border border-b border-muted-foregound w-48"></div>
      </div>
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="font-semibold text-2xl text-primary mb-8">Articles</h2>
      </div>
      {postPreviews}
      <div className="mx-auto m-16 border border-b border-muted-foregound w-48"></div>
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="font-semibold text-2xl text-primary mb-8">Ressources</h2>
        <Ressources />
      </div>
    </div>
  );
};

export default Home;
