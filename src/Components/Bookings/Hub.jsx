import { useState } from "react";
import flecha from "../../icons/flecha.png";
import Reservations from "./Hub/Reservations";
import loaderGif from "../../icons/Loader.gif";

const Hub = ({ data, setSlice, loader, slice }) => {
  const [details, setDetails] = useState();

  const handleClose = () => {
    setDetails(false);
  };
  const handleOpen = () => {
    setDetails(true);
  };

  const handleSlice = (value) => {
    setSlice(value);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between">
        <h3 className="txt-25 text-color3 font m-5">Hub for Travel Partner</h3>
        <div className="flex flex-wrap justify-between w-full  lg:w-5/12 xl:w-1/3">
          <div
            className="flex w-5/12 sm:w-1/3 mt-5 cursor-pointer"
            onClick={handleClose}
          >
            <p className="text-color4 mr-0 sm:mr-3">Cerrar todos</p>{" "}
            <img className="w-4 h-4 m-1 rotate-180" src={flecha} alt="." />
          </div>
          <div
            className="flex w-5/12 sm:w-1/3 mt-5 cursor-pointer"
            onClick={handleOpen}
          >
            <p className="text-color4 mr-0 sm:mr-3 ">Abrir todos</p>{" "}
            <img className="w-4 h-4 m-1 " src={flecha} alt="." />
          </div>
          <div className="flex flex-col sm:flex-row w-2/12 sm:w-1/3 my-5 justify-center">
            <p className="font-semibold text-color3 mt-1 mr-3">Results:</p>
            <select
              name="results"
              className="ipt-filter sm:w-1/3 lg:w-full"
              onChange={(e) => handleSlice(e.target.value)}
              defaultValue={"30"}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>
      {loader ? (
        <div className="flex items-center w-full justify-center">
          <div className="flex flex-col w-3/5 text-center">
            <p>Loading ....</p>
            <div className="w-full flex justify-center">
              <img src={loaderGif} alt="loader" className="h-32 " />
            </div>
          </div>
        </div>
      ) : (
        <Reservations
          setSlice={setSlice}
          slice={slice}
          data={data}
          details={details}
          setDetails={setDetails}
        />
      )}
    </>
  );
};

export default Hub;
