// ImageUploader.jsx

"use client";
import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface ImageUploaderProps {
  onImageUpload: (files: FileList) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileList: FileList = files; // Define the type explicitly as FileList
      setImageFiles(fileList);

      if (fileList.length > 0 && fileList.length <= 5) {
        setSelectedImages(Array.from(fileList).map((file) => URL.createObjectURL(file)));
        // Call the onImageUpload function with the uploaded files
        onImageUpload(fileList);
      } else {
        alert("Please select between 1 and 5 images.");
      }
    }
  };

  const handleDeleteImage = (index: number) => {
    if (!imageFiles) return;

    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);

    const updatedFiles = Array.from(imageFiles);
    updatedFiles.splice(index, 1);

    const newFileList = new DataTransfer();
    updatedFiles.forEach((file) => {
      newFileList.items.add(file);
    });

    setImageFiles(newFileList.files);

    // Call the onImageUpload function with the updated image list
    onImageUpload(newFileList.files);
  };

  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Upload Image
      </label>
      <div className="flex flex-wrap">
        <input
          type="file"
          className="w-1/3 cursor-pointer rounded-lg h-fit border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        {selectedImages.map((image, index) => (
          <div key={index} className="relative m-2">
            <img
              src={image}
              alt={`image-${index}`}
              className="h-32 w-32 rounded-md object-cover"
            />
            <button
              onClick={() => handleDeleteImage(index)}
              className={`group absolute right-1 top-1  p-1 text-white flex items-center rounded-sm bg-white px-4 py-3 bg-opacity-40`}
              style={{ padding: "0.35rem" }}
            >
              <RiDeleteBinLine className="h-5 w-5 text-white hover:text-meta-1" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
