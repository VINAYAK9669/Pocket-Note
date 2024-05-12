/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import AppContext from "./context/AppContext";

function NotesList() {
  const { getNotesData, selectedNote, changeNote, notesData } =
    useContext(AppContext);
  useEffect(() => {
    getNotesData();
  }, []);

  return (
    <div className="flex flex-col overflow-y-scroll w-full  mx-auto sm:gap-[1.2rem] h-[80%] custom-scrollbar">
      {notesData?.map((note, id) => (
        <div
          className="flex gap-[1.5rem] items-center justify-start pl-5 py-2 rounded-[16px]"
          key={id}
          onClick={() => changeNote(id)}
          style={
            selectedNote === Number(note.id)
              ? { backgroundColor: "#2F2F2F2B" }
              : { backgroundColor: "white" }
          }
        >
          <div
            className="w-[68.9px] h-[68.9px] sm:w-[50px] sm:h-[50px] md:w-[68.9px] md:h-[68.9px] flex items-center rounded-full justify-center"
            style={{ backgroundColor: `${note.color}` }}
          >
            <p className="font-Roboto text-white text-xl sm:text-sm md:text-xl ">
              {note.initialName}
            </p>
          </div>
          <label className="font-Roboto font-medium text-base  sm:text-md md:text-2xl overflow-hidden">
            {note.name.length > 16 ? `${note.name.slice(0, 16)}...` : note.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
