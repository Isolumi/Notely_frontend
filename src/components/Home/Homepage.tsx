import Content from "./Content";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

export default function Homepage() {
  return (
    <>
      <div className="flex">
        <div className="flex h-screen flex-col w-[325px]">
          <div className="border-b w-full h-[35px]">
            <Topnav />
          </div>
          <div className="flex flex-1 flex-row min-w-full">
            <div className="border-r w-[45px]">
              <Sidenav />
            </div>
            <div className="border-r flex-1"></div>
          </div>
        </div>
        <div className="border flex-1">
          <Content />
        </div>
      </div>
    </>
  );
}
