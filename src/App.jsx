/* eslint-disable no-unused-vars */
import { useContext } from "react";

import AppContext from "./component/context/AppContext";
import useDeviceWidth from "./component/hooks/useDeviceWidth";
import SideBar from "./component/SideBar";
import MainBar from "./component/MainBar";

/* eslint-disable no-unused-vars */
function App() {
  const { selectedNote } = useContext(AppContext);

  const innerWidth = useDeviceWidth(640);

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex h-screen w-screen  justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1512px] 2xl:w-[1512px] h-full flex border-[1px] border-gray-200 ">
        {innerWidth && selectedNote === null ? (
          <SideBar />
        ) : innerWidth ? (
          <>
            <MainBar />
          </>
        ) : (
          <>
            <SideBar />
            <MainBar />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
