/* eslint-disable no-unused-vars */
import { useContext } from "react";
import CreateNoteModal from "./component/CreateNoteModal";

import IndividualNotes from "./component/IndividualNotes";
import NotesList from "./component/NotesList";
import AppContext from "./component/context/AppContext";
import HeroPage from "./component/HeroPage";

/* eslint-disable no-unused-vars */
function App() {
  const { selectedNote } = useContext(AppContext);

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex h-screen w-screen  justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1512px] 2xl:w-[1512px] h-full flex border-[1px] border-gray-200 ">
        <div className="bg-white w-[80vw] lg:w-[435px]  h-full relative">
          <h1 className="text-primary-black text-center text-6xl font-Roboto font-medium h-[20%] flex justify-center items-center">
            Pocket Notes
          </h1>
          <NotesList />
          <div className="sticky    float-end bottom-8 mr-8">
            <CreateNoteModal />
          </div>
        </div>
        <div className="max-w-[1077px] bg-background-skyBlue relative flex-grow h-full w-full">
          {selectedNote == null ? <HeroPage /> : <IndividualNotes />}
        </div>
      </div>
    </div>
  );
}

export default App;
