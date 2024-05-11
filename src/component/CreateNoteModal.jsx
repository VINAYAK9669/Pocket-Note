import Modal from "./Modal";
import { useContext, useState } from "react";
import { plus } from "./useImport";
import AppContext from "./context/AppContext";

function CreateNoteModal() {
  // Accessing addNoteData function from context
  const { addNoteData } = useContext(AppContext);

  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = () => {
    // Validate input
    if (!groupName.trim() || !selectedColor) {
      alert("Please enter a group name and select a color.");
      return;
    }

    // Format data
    const newData = {
      id: localStorage.length, // Assigning id based on local storage length
      name: groupName,
      color: selectedColor,
      notes: [],
      initialName: getInitialName(groupName),
    };

    // Save data using context API
    addNoteData(newData);

    // Reset form
    setGroupName("");
    setSelectedColor("");
  };

  const getInitialName = (name) => {
    const words = name.split(" ");
    return words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase();
  };

  return (
    <Modal>
      <Modal.Open opens="note-modal">
        <button className="font-nunito text-md font-semibold text-primary-normal_gray w-[93px] h-[93px] bg-background-blue flex justify-center items-center rounded-full">
          <img src={plus} alt="Add" />
        </button>
      </Modal.Open>

      <Modal.Window name="note-modal">
        <div className="flex h-full flex-col justify-between gap-4 md:gap-6">
          <h1 className="font-Roboto font-medium text-[18.4px]  md:text-5.5xl text-black">
            Create New group
          </h1>
          <div className="flex items-center gap-4 md:gap-[3rem]">
            <label
              htmlFor="groupName"
              className="font-Roboto font-medium text-[14.6px] leading-[23.39px] md:text-3xl text-black"
            >
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-[150px] md:w-[435px] h-[23px]  md:h-[51px] rounded-[9.72px] md:rounded-[22px] outline-none border-[2px] border-background-gray p-3 md:p-5 text-[10px] md:text-av"
            />
          </div>
          <div className="flex items-center gap-2 md:gap-[3rem] mt-[1rem]">
            <label className="font-Roboto font-medium text-[14.6px] leading-[23.39px] md:text-3xl text-black">
              Choose colour
            </label>
            <div className="flex gap-2 md:gap-4 items-center">
              <span
                onClick={() => setSelectedColor("#B38BFA")}
                className="w-[17.67px] h-[17.67px] md:w-[40px] md:h-[40px] rounded-full bg-options-pale_blue cursor-pointer"
                style={
                  selectedColor === "#B38BFA"
                    ? { border: "1px solid black" }
                    : {}
                }
              ></span>
              <span
                onClick={() => setSelectedColor("#FF79F2")}
                className="w-[17.67px] h-[17.67px] md:w-[40px] md:h-[40px] rounded-full bg-options-pink cursor-pointer"
                style={
                  selectedColor === "#FF79F2"
                    ? { border: "1px solid black" }
                    : {}
                }
              ></span>
              <span
                onClick={() => setSelectedColor("#43E6FC")}
                className="w-[17.67px] h-[17.67px] md:w-[40px] md:h-[40px] rounded-full bg-options-cyan cursor-pointer"
                style={
                  selectedColor === "#43E6FC"
                    ? { border: "1px solid black" }
                    : {}
                }
              ></span>
              <span
                onClick={() => setSelectedColor("#F19576")}
                className="w-[17.67px] h-[17.67px] md:w-[40px] md:h-[40px] rounded-full bg-options-brown cursor-pointer"
                style={
                  selectedColor === "#F19576"
                    ? { border: "1px solid black" }
                    : {}
                }
              ></span>
              <span
                onClick={() => setSelectedColor("#0047F")}
                className="w-[17.67px] h-[17.67px] md:w-[40px] md:h-[40px] rounded-full bg-options-blue cursor-pointer"
                style={
                  selectedColor === "#0047F"
                    ? { border: "1px solid black" }
                    : {}
                }
              ></span>
              <span
                onClick={() => setSelectedColor("#6691FF")}
                className="w-[17.67px] h-[17.67px] md:w-[40px] md:h-[40px] rounded-full bg-options-skyBlue cursor-pointer"
                style={
                  selectedColor === "#6691FF"
                    ? { border: "1px solid black" }
                    : {}
                }
              ></span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-[1rem]">
            <button
              onClick={handleSubmit}
              className="w-[284px] sm:w-[154px] h-[38px] bg-background-blue rounded-[11px] font-Roboto text-white sm:text-[20px] text-[17px]"
            >
              Create
            </button>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default CreateNoteModal;
