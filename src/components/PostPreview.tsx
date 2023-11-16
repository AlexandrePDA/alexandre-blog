import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import { Calendar } from "lucide-react";

const PostPreview = (props: PostMetadata) => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto  max-w-3xl">
          <Link href={`/posts/${props.slug}`}>
            <div className="flex flex-col p-2 border-border  border rounded-lg hover:bg-purple-100 dark:hover:bg-gray-900 items-center mb-4 text-center sm:flex-row sm:text-left">
              <Image
                src={props.image}
                alt="image illustrant l'article"
                width={400}
                height={400}
                className="inline-block p-4 h-40 w-40"
              />

              <div className="px-4 sm:px-8 sm:pt-0">
                <p className="text-lg mb-2 font-bold text-primary">
                  {props.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {props.subtitle}
                </p>
                <div className="flex my-4 flex-wrap  justify-center md:justify-start gap-2">
                  {props.tags.map((tag: string) => (
                    <p
                      key={tag}
                      className="text-slate-800 p-2 text-xs rounded-lg bg-purple-300  "
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2 items-center mb-6 sm:mb-0">
                  <Calendar size={12} color="#9CA3AF" />
                  <p className="text-xs text-muted-foreground ">{props.date}</p>
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
