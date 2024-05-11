import { Lock_icon, entry_Imag } from "./useImport";

function HeroPage() {
  return (
    <>
      <div className="flex items-center justify-center h-full flex-col gap-2">
        <img src={entry_Imag} alt="poster" className="" />
        <div className="max-w-[650px] flex flex-col gap-2">
          <h1 className="text-center font-bold text-7xl font-Roboto">
            Pocket Notes
          </h1>
          <p className="text-lg font-medium font-Roboto">
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-center w-full items-center absolute bottom-5">
        <img src={Lock_icon} />
        <p className="font-Roboto font-normal text-lg text-primary-mdGray">
          end-to-end encrypted
        </p>
      </div>
    </>
  );
}

export default HeroPage;
