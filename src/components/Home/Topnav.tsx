import { FaTableColumns, FaFolderClosed, FaMagnifyingGlass, FaFile, FaBookmark } from "react-icons/fa6";

export default function Topnav() {
  return (
    <>
      <div className="h-full flex items-center">
        <div className="w-[42px] flex justify-center">
          <FaTableColumns size={18} />
        </div>
        <div className="flex flex-1 ml-4 space-x-4">
          <FaFolderClosed size={18} />
          <FaMagnifyingGlass size={18} />
          <FaFile size={18} />
          <FaBookmark size={18} />
        </div>
      </div>
    </>
  );
}
