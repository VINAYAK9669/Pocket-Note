import { useContext } from "react";
import AppContext from "./context/AppContext";
import HeroPage from "./HeroPage";
import IndividualNotes from "./IndividualNotes";

function MainBar() {
  const { selectedNote } = useContext(AppContext);
  return (
    <div className="max-w-[1077px] bg-background-skyBlue relative flex-grow h-full w-full">
      {selectedNote == null ? <HeroPage /> : <IndividualNotes />}
    </div>
  );
}

export default MainBar;
