import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const BrandDatalist = [
  {
    id: 1,
    name: "Acer",
    models: [
      "Swift 3",
      "Aspire 5",
      "Predator Helios 300",
      "Chromebook Spin 713",
    ],
  },
  {
    id: 2,
    name: "Apple",
    models: [
      "MacBook Pro 16-inch",
      "MacBook Pro 13-inch",
      "MacBook Air",
      "MacBook Pro 14-inch",
    ],
  },
  {
    id: 3,
    name: "ASUS",
    models: [
      "ZenBook 14",
      "VivoBook S15",
      "ROG Zephyrus G14",
      "TUF Gaming A15",
    ],
  },
  {
    id: 4,
    name: "Dell",
    models: [
      "XPS 15",
      "XPS 13",
      "Inspiron 15 5000",
      "Inspiron 14 5000",
      "Alienware m15",
    ],
  },
  {
    id: 5,
    name: "HP",
    models: [
      "Spectre x360",
      "ENVY x360",
      "Pavilion 15",
      "Elite Dragonfly",
      "OMEN 15",
    ],
  },
  {
    id: 6,
    name: "Lenovo",
    models: [
      "ThinkPad X1 Carbon",
      "ThinkPad X1 Yoga",
      "IdeaPad 5",
      "Legion 5",
      "Yoga 9i",
    ],
  },
];

const ModelData = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Model Data" /> */}
      <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  S.No
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Model Name
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {BrandDatalist.map((brand) =>
                brand.models.map((model, index) => (
                  <tr key={`${brand.id}-${index}`}>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        {brand.id}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <span className="font-medium text-black dark:text-white">
                        {model}
                      </span>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <FaEdit className="h-5 w-5" />
                        </button>
                        <button className="hover:text-red">
                          <RiDeleteBinFill className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ModelData;
