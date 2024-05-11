/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { arrrow_diabled_icon } from "./useImport";
import AppContext from "./context/AppContext";
import FormatDate from "./hooks/useFormatDate";

function IndividualNotes() {
  const {
    selectedNote,
    getNotesData,
    addNoteToSelected,
    selectedNoteDetails,
    getSelectedIdDetails,
    notesData,
  } = useContext(AppContext);
  console.log(selectedNoteDetails);

  const [newNote, setNewNote] = useState("");

  const handleNoteSubmit = () => {
    if (newNote.trim() !== "") {
      const currentDate = FormatDate(new Date());
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const noteObject = {
        note: newNote,
        date: currentDate,
        time: currentTime,
      };
      addNoteToSelected(selectedNote, noteObject);

      setNewNote(""); // Clear the textarea after submitting
      getSelectedIdDetails();
    }
  };

  useEffect(() => {
    getNotesData();
    getSelectedIdDetails();
  }, [selectedNote]);

  return (
    <div className="flex flex-col justify-between relative h-full ">
      <div className="flex  gap-[1.5rem] items-center justify-start pl-5 bg-background-blue h-[12%] min-h-[98px]">
        <div
          className="w-[68.9px] h-[68.9px] flex items-center rounded-full justify-center "
          style={{ backgroundColor: `${selectedNoteDetails.color}` }}
        >
          <p className="font-Roboto text-white text-xl ">
            {selectedNoteDetails?.initialName}
          </p>
        </div>
        <label className="font-Roboto font-medium text-2xl overflow-hidden text-white">
          {selectedNoteDetails?.name?.length > 40
            ? `${selectedNoteDetails?.name?.slice(0, 40)}...`
            : selectedNoteDetails?.name}
        </label>
      </div>
      <div className="h-[60%]">
        <div className="flex flex-col gap-[1rem] pt-3 px-5 overflow-y-auto h-full main-scrollbar">
          {selectedNoteDetails?.notes?.map((note, id) => (
            <div
              key={id}
              className="bg-white w-[95%] mx-auto p-3 pb-4 flex flex-col shadow-custom"
            >
              <p className="font-Roboto font-normal  text-md text-black pt-[1rem] px-[1.5rem] pb-[1.5rem]">
                {note.note}
              </p>
              <p className="flex flex-center justify-end items-center gap-3 text-md font-Roboto font-medium">
                {note.date}{" "}
                <span className="w-[8px] h-[8px] bg-primary-darkGray rounded-full"></span>{" "}
                {note.time}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background-blue w-full flex justify-center items-center h-full py-8 relative">
        <div className="relative w-[90%] h-full">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="w-full outline-none px-4 py-4 font-Roboto text-5.5xl text-primary-gray h-full resize-none rounded-[9px]"
            placeholder="Enter your text here..........."
          ></textarea>
          <button
            className="absolute top-[70%] right-[2%]"
            onClick={handleNoteSubmit}
          >
            <img
              src={arrrow_diabled_icon}
              alt="button"
              className="w-[34.44px] h-[29px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualNotes;
