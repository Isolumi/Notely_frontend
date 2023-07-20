import {
  FaFileCirclePlus,
  FaCodeFork,
  FaCopy,
  FaTerminal,
  FaCode,
  FaGear,
  FaRegCircleQuestion,
} from "react-icons/fa6";

export default function Sidenav() {
  return (
    <>
      <div className="border-r h-screen max-w-[45px] flex flex-col">
        <div className="flex flex-col items-center space-y-4">
          <FaFileCirclePlus size={18} />
          <FaCodeFork size={18} />
          <FaCopy size={18} />
          <FaTerminal size={18} />
          <FaCode size={18} />
        </div>
        <div className="flex flex-col items-center space-y-4 mt-auto">
          <FaRegCircleQuestion size={18} />
          <FaGear size={18} />
        </div>
      </div>
    </>
  );
}
