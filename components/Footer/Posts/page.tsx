import { footerPosts } from "@/data/footerContent";
import Image from "next/image";
import Link from "next/link";

export default function Posts() {
  return (
    <>
      {footerPosts.map((item, i) => (
        <div key={i}>
          <h5 className=" text-xs md:text-base mb-3 md:mb-7 text-grey-text font-bold tracking-widest underline underline-offset-8 decoration-green-text">{item.title}</h5>
          {item.postData.map((posts) => (
            <div className="flex flex-col pb-3" key={posts.id}>
              <div className="flex items-center">
                <div className="w-2/3">
                  <div className="flex flex-col">
                    <Link
                      href={`product/${posts.id}`}
                      className=" hover:text-green-text  hover:underline ease-in-out duration-700"
                    >
                      <h5 className=" text-xs md:text-sm hover:font-semibold mb-1">
                        {posts.name}
                      </h5>
                    </Link>
                    <p className="text-[10px] md:text-xs text-grey-text">
                      {posts.description}
                    </p>
                  </div>
                </div>
                <div className="mx-auto rounded-md border">
                  <Image
                    src={`${posts.img}`}
                    alt={`${posts.name}`}
                    width={70}
                    height={60}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
