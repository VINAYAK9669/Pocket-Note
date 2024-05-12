import CreateNoteModal from "./CreateNoteModal";
import NotesList from "./NotesList";

function SideBar() {
  return (
    <div className="bg-white w-full sm:w-[80vw] lg:w-[435px]  h-full relative">
      <h1 className="text-primary-black text-center text-6xl font-Roboto font-medium h-[20%] flex justify-center items-center">
        Pocket Notes
      </h1>
      <NotesList />
      <div className="sticky float-end bottom-8 mr-8">
        <CreateNoteModal />
      </div>
    </div>
  );
}

export default SideBar;
