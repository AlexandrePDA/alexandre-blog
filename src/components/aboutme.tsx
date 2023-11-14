import Link from "next/link";
import My from "../../public/assets/mypicture.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <Link href="https://github.com/AlexandrePDA/">
        <div className="hover:bg-purple-100 md:w-2/3 mx-auto dark:hover:bg-gray-900 my-8 border-border text-muted-foreground dark:text-white border rounded-lg p-4 flex items-center justify-center flex-col md:flex-row gap-8">
          <Image src={My} alt="me" className=" h-40 w-52" />
          <div className="flex flex-col   ">
            <h3 className="text-primary font-bold mb-4">
              Développeur Web Freelance 🚀
            </h3>
            <div className="mx-auto ">
              <p>➡️ ReactJs</p>
              <p>➡️ NodeJs</p>
              <p>➡️ TypeScript</p>
              <p>➡️ NextJs</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default AboutMe;
