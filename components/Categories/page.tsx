import Image from "next/image";
import Link from "next/link";
import categoriesData from "@/data/categories";

export default function Categories() {
  return (
    <>
      {categoriesData.map((item) => (
        <div key={item.id} className="transform transition-transform hover:scale-105 hover:shadow-md hover:shadow-grey-bg_categories">
          <Link href={`/category${item.pathName}`}>
            <div className="flex md:gap-8 items-center bg-grey-bg_categories  ease-in-out duration-300 hover:bg-green-text hover:text-grey-bg_primary text-grey-text border-none rounded-r-md mb-3">
              <div className="mx-auto">
                <Image
                className="bg-grey-text"
                  src={item.img}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="w-2/3 uppercase font-bold ">{item.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
