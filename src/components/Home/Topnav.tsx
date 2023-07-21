import { BsLayoutTextSidebarReverse, BsSearch, BsFolder, BsFileEarmark, BsBookmark } from "react-icons/bs";

export default function Topnav() {
  return (
    <>
      <div className="h-full flex items-center">
        <div className="w-[42px] flex justify-center">
          <BsLayoutTextSidebarReverse size={18} />
        </div>
        <div className="flex flex-1 ml-4 space-x-4">
          <BsFolder size={18} />
          <BsSearch size={18} />
          <BsFileEarmark size={18} />
          <BsBookmark size={18} />
        </div>
      </div>
    </>
  );
}
