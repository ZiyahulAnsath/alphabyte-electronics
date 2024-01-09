import { bannerBrand } from "@/data/bannerContent";
import Image from "next/image";
import Link from "next/link";

const BrandPage = () => {
  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3 md:gap-4 gap-2 ">
        {bannerBrand.map((brand, index) => (
          <Link
            href={`${brand.routerPath}`}
            className="glossy_brand flex flex-col items-center justify-center hover:filter drop-shadow-lg bg-green-500 bg-opacity-60 hover:text-green-text hover:font-semibold hover:shadow-lg hover:shadow-green-text/60 p-4"
            key={brand.id}
          >
            <div className="pb-5">
              <Image
                src={brand.img}
                alt={`Image ${index + 1}`}
                //   layout="fill"
                //   objectFit="cover"
                width={80}
                height={80}
              />
            </div>
            <div>{brand.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
