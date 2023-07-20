import {
  FaFileCirclePlus,
  FaCodeFork,
  FaRegCopy,
  FaTerminal,
  FaCode,
  FaGear,
  FaRegCircleQuestion,
} from "react-icons/fa6";

export default function Sidenav() {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex flex-col items-center space-y-4 mt-2">
          <FaFileCirclePlus size={18} />
          <FaCodeFork size={18} />
          <FaRegCopy size={18} />
          <FaTerminal size={18} />
          <FaCode size={18} />
        </div>
        <div className="flex flex-col items-center space-y-4 mt-auto mb-2">
          <FaRegCircleQuestion size={18} />
          <FaGear size={18} />
        </div>
      </div>
    </>
  );
}
