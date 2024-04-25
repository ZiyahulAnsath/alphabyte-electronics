import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Model from "@/components/ManageSection/Model/page";
import ModelData from "@/components/ManageSection/Model/ModelData/page";

export const metadata: Metadata = {
  title: "Model | Alphabyte Electronics"
};

const ModelPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
       <Model/>
       <ModelData/>
      </div>
    </DefaultLayout>
  );
};

export default ModelPage;
