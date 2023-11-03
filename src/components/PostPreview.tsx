import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <section className="">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="mx-auto  max-w-3xl">
          <Link href={`/posts/${props.slug}`}>
            <div className="flex flex-col border-border border rounded-lg hover:bg-secondary items-center mb-4 text-center sm:flex-row sm:text-left">
              <Image
                src={props.image}
                alt="image illustrant l'article"
                width={400}
                height={400}
                className="inline-block p-4 h-40 w-40"
              />

              <div className="pt-4 sm:px-8 sm:pt-0">
                <p className="text-lg font-bold text-primary">{props.title}</p>
                <p className="text-sm">{props.subtitle}</p>
                <div className="mt-2">
                  <p className="text-muted-foreground text-sm">#{props.tag}</p>
                  <p className="text-xs text-muted-foreground mb-6 sm:mb-0">
                    {props.date}
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
