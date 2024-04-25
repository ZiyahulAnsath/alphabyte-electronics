import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

interface SidebarHeaderProps {
  setSidebarOpen: (arg: boolean) => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <Link href="/">
        <Image
          width={176}
          height={32}
          src={"/images/logo/logo.svg"}
          alt="Logo"
          priority
        />
      </Link>

      <button
        onClick={() => setSidebarOpen(false)}
        aria-controls="sidebar"
        aria-expanded={false}
        className="block lg:hidden"
      >
        <FaArrowLeftLong className="h-5 w-5 text-blue-300 dark:text-meta-3" />
      </button>
    </div>
  );
};

export default SidebarHeader;
