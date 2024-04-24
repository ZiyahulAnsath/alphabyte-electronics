import Image from "next/image";
import Link from "next/link";
import categoriesData from "@/data/categories";

export default function Categories() {
  return (
    <>
      {categoriesData.map((item) => (
        <div key={item.id} className="transform transition-transform hover:scale-105 hover:shadow-md hover:shadow-gray-bg_categories">
          <Link href={`/category${item.pathName}`}>
            <div className="flex md:gap-8 items-center bg-gray-bg_categories  ease-in-out duration-300 hover:bg-green-text hover:text-gray-bg_primary text-gray-text border-none rounded-r-md mb-3">
              <div className="mx-auto">
                <Image
                  src={"/images/logo/logo-icon2.svg"}
                  alt="logo"
                  width={60}
                  height={60}
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
