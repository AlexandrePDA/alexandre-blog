import Link from "next/link";
import Image from "next/image";
import Ressources from "../../public/assets/ressources.png";

const PostPreview = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl ">
        <div className="mx-auto  max-w-3xl">
          <Link href="/ressources">
            <div className="flex flex-col border-border border rounded-lg hover:bg-purple-100 dark:hover:bg-gray-900 items-center  text-center sm:flex-row sm:text-left">
              <Image
                src={Ressources}
                alt="image pour section ressources"
                width={500}
                height={500}
                className="inline-block p-4 h-32 w-40"
              />

              <div className="px-4 sm:px-8 sm:pt-0">
                <p className="text-lg mb-2 font-bold text-primary">
                  Toutes les ressources
                </p>
                <p className="text-sm">
                  Sites, Outils, Plugins... Retrouve dans cette section tous les
                  liens qui te seront utiles !
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-xs text-muted-foreground mb-6 sm:mb-0">
                    Mise à jour : 06/11/2023
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostPreview;
