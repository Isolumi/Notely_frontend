import { BsFiles, BsFileEarmarkPlus, BsTerminal, BsQuestionCircle, BsGear, BsCodeSlash, BsColumnsGap } from "react-icons/bs";

export default function Sidenav() {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex flex-col items-center space-y-4 mt-2">
          <BsFileEarmarkPlus size={18} />
          <BsFiles size={18} />
          <BsColumnsGap size={18} />
          <BsCodeSlash size={18} />
          <BsTerminal size={18} />
        </div>
        <div className="flex flex-col items-center space-y-4 mt-auto mb-2">
          <BsQuestionCircle size={18} />
          <BsGear size={18} />
        </div>
      </div>
    </>
  );
}
