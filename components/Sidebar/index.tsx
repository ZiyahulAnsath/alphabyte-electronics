import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { IoIosArrowDown } from "react-icons/io";
import SidebarHeader from "./SidebarHeader/page";
import SidebarMenu from "./SidebarMenu/page";
import SidebarUtilities from "./SidebarUtilities/page";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || !((target as Node) instanceof Node) || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // Function to generate SidebarLinkGroup
  const generateSidebarLinkGroup = (
    title: string,
    icon: JSX.Element,
    linkBase: string,
    links: { label: string; path: string }[]
  ) => {
    return (
      <SidebarLinkGroup
        activeCondition={pathname === linkBase || pathname.includes(linkBase)}
      >
        {(handleClick, open) => (
          <>
            <Link
              href="#"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                (pathname === linkBase || pathname.includes(linkBase)) &&
                "bg-graydark dark:bg-meta-4"
              }`}
              onClick={(e) => {
                e.preventDefault();
                sidebarExpanded ? handleClick() : setSidebarExpanded(true);
              }}
            >
              {icon}
              {title}
              <IoIosArrowDown
                className={`absolute right-4 top-1/2 h-[20px] w-[20px] -translate-y-1/2 fill-current ${
                  open && "rotate-180"
                }`}
              />
            </Link>
            <div
              className={`translate transform overflow-hidden ${!open && "hidden"}`}
            >
              <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                {links.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                        pathname === path && "text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </SidebarLinkGroup>
    );
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 h-screen w-72.5 flex flex-col overflow-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <SidebarHeader setSidebarOpen={setSidebarOpen} />
        <SidebarMenu pathname={pathname} generateSidebarLinkGroup={generateSidebarLinkGroup} />
        <SidebarUtilities pathname={pathname} generateSidebarLinkGroup={generateSidebarLinkGroup} />
      </div>
    </aside>
  );
};

export default Sidebar;
