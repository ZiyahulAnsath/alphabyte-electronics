import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const CategoryDatalist = [
  {
    id: 1,
    name: "Laptop",
  },
  {
    id: 2,
    name: "Desktop",
  },
  {
    id: 3,
    name: "Gaming Desktop",
  },
  {
    id: 4,
    name: "Storage",
  },
  {
    id: 5,
    name: "Power Supply",
  },
  {
    id: 6,
    name: "Graphics Card",
  },
];

const CategoryData = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Category Data" /> */}
      <div className="rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  S.No
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Category Name
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {CategoryDatalist.map((data) => (
                <tr key={data.id}>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {data.id}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {data.name}
                    </h5>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CategoryData;
