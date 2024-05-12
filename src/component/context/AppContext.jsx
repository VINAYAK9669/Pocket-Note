/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notesData, setNotesData] = useState([]);
  const [selectedNoteDetails, setSelectedNoteDetails] = useState("");

  const changeNote = (id) => setSelectedNote(id);

  // Function to get notesData from local storage
  const getNotesData = () => {
    const storedData = localStorage.getItem("notesData");
    if (storedData) {
      setNotesData(JSON.parse(storedData));
    }
  };

  const getSelectedIdDetails = () => {
    if (selectedNote !== null && notesData.length > 0) {
      const selectedNoteData = notesData.find(
        (item) => item.id === selectedNote
      );
      if (selectedNoteData) {
        setSelectedNoteDetails(selectedNoteData);
      }
    }
  };

  useEffect(() => {
    getSelectedIdDetails();
  }, [selectedNote, notesData]);

  // Function to add a new object to notesData and save to local storage
  const addNoteData = (newData) => {
    const existingData = JSON.parse(localStorage.getItem("notesData")) || [];
    const updatedData = [...existingData, newData];
    localStorage.setItem("notesData", JSON.stringify(updatedData));
    setNotesData(updatedData); // Update state with the new data
  };

  // Function to add a new note to the notes array of a specific object in notesData
  const addNoteToSelected = (selectedID, newNote) => {
    const updatedData = notesData.map((item) => {
      if (item.id === selectedID) {
        return {
          ...item,
          notes: [...item.notes, newNote],
        };
      }
      getNotesData();
      return item;
    });

    localStorage.setItem("notesData", JSON.stringify(updatedData));
    setNotesData(updatedData); // Update state with the updated data
  };

  const value = {
    selectedNote,
    changeNote,
    notesData,
    getNotesData,
    addNoteData,
    addNoteToSelected,
    selectedNoteDetails,
    getSelectedIdDetails,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
