import Image from "next/image";
import Link from "next/link";
import categoriesData from "@/data/categories";

export default function Categories() {
  return (
    <>
      {categoriesData.map((item) => (
        <div key={item.id}>
          <Link href={`category/${item.name}`}>
            <div className="flex md:gap-8 items-center bg-gray-bg_categories hover:bg-gradient-to-tr from-green-text  to-green-background ease-in-out duration-150  hover:text-gray-bg_primary hover:font-bold border-none rounded-r-md mb-2">
              <div className="mx-auto">
                <Image
                  src={"/alphabyte.svg"}
                  alt="logo"
                  width={60}
                  height={60}
                />
              </div>
              <div className="w-2/3">{item.name}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
