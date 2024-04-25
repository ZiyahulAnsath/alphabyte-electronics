import { footerMenus } from "@/data/footerContent";
import Link from "next/link";

export default function Menus() {
  return (
    <>
      {footerMenus.map((item, i) => (
        <div
          key={i}
        >
          <h5 className="text-xs text-grey-text md:text-base mb-3 md:mb-7 font-bold tracking-widest underline underline-offset-8 decoration-green-text ">{item.title}</h5>
          <div className="flex flex-col flex-wrap gap-x-5 gap-y-2 mb-3 md:mb-0">
            {item.menuList.map((link, i) => (
              <Link
                href={link.routerPath}
                key={i}
                className=" text-grey-text hover:text-green-text hover:font-semibold ease-in-out duration-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
