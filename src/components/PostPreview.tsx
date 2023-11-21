import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import { Calendar } from "lucide-react";

const PostPreview = (props: PostMetadata & { index: number }) => {
  // Ajout de d'un logo pour nouvel article
  const newArticle = (index: number) => {
    if (index === 0) {
      return <p className="animate-bounce mr-2">🆕</p>;
    } else {
      return "";
    }
  };
  const addItemForNewArticle = newArticle(props.index);

  return (
    <section>
      <div className="mx-auto w-full ">
        <div className="flex flex-col items-center mx-auto md:p-4 md:m-4 ">
          <div>
            <Link
              href={`/posts/${props.slug}`}
              className="flex flex-col gap-4 rounded-md bg-white dark:bg-[#040712] p-4 xs:w-80 mb-3 sm:mb-0  border hover:bg-purple-100 dark:hover:bg-gray-900"
            >
              <div className="relative">
                <Image
                  src={props.image}
                  alt=""
                  width={400}
                  height={400}
                  className="inline-block  object-cover w-80 h-72"
                />
                <div className="absolute bottom-[-10%] right-[8%] flex h-16 w-16 items-center justify-center rounded-full border-4 border-solid border-[#f2f2f7] bg-[#040712]">
                  {props.emoji}
                </div>
              </div>
              <div className="flex w-full flex-col gap-5">
                <div className="rounded-md  px-2 py-1.5">
                  <p className="text-sm ">
                    {props.tags.map((tag, index) => {
                      return (
                        <span
                          key={index}
                          className="text-slate-800 p-2 text-xs rounded-lg bg-purple-300 mr-2"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  {addItemForNewArticle}
                  <p className="font-bold text-primary">{props.title}</p>
                </div>
                <p className="text-muted-foreground">{props.subtitle}</p>

                <div className="flex items-center">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} color="#9CA3AF" />
                      <h6 className="text-xs text-muted-foreground">
                        {props.date}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPreview;
