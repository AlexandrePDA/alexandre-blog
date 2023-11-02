import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <section className="">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mx-auto mb-4 max-w-3xl ">
          <Link href={`/posts/${props.slug}`}>
            <div className="flex flex-col border-border border rounded-lg hover:bg-secondary items-center pb-8 text-center sm:flex-row sm:text-left">
              <Image
                src={props.image}
                alt="image illustrant l'article"
                width={400}
                height={400}
                className="inline-block p-4 h-40 w-40"
              />

              <div className="pt-4 sm:px-8 sm:pt-0">
                <p className="text-muted-foreground ">{props.tag}</p>
                <p className="mb-6 font-bold">{props.title}</p>
                <p>{props.subtitle}</p>

                <p className="text-sm">{props.date}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostPreview;
