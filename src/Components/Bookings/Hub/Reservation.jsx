import { useEffect, useState } from "react";
import Detail from "./Detail";
import flecha from "../../../icons/flecha-indiv.png";
import flecha2 from "../../../icons/flecha-hacia-arriba.svg";

const Reservation = ({
  locator,
  name,
  service,
  services,
  bg,
  details,
  setDetails,
}) => {
  const [open, setOpen] = useState(false);
  const [fill, setFill] = useState({});
  const [endFill, setEndFill] = useState(false);
  const [sendAll, setSendAll] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleFill = () => {
    setEndFill(true);
  };
  const handleSendAll = () => {
    setSendAll(true);
  };

  useEffect(() => {
    if (details === true && open === false) {
      setOpen(true);
      setDetails("stop");
    }
    if (details === false && open === true) {
      setOpen(false);
      setDetails("stop");
    }
  }, [details, setDetails, open]);

  return (
    <div>
      <div
        className={`txt-14 flex justify-between p-2 ${
          bg % 2 === 0 && "bg-color"
        }`}
      >
        <p className="w-3/12 pl-2 sm:pl-14">{locator}</p>
        <p className="w-3/12">{name}</p>
        <p className="w-3/12">{service}</p>
        <div className="w-2/12 cursor-pointer flex" onClick={handleOpen}>
          <p className="text-color4 hidden sm:contents">
            {!open ? "VER DETALLE" : "CERRAR DETALLE"}
          </p>
          <img
            src={flecha}
            alt=""
            className={`h-6 w-6 ml-2 ${open && "rotate-180"}`}
          />
        </div>
      </div>
      <div
        className={`w-96 m-auto border-b-2 border-b-color2 border-opacity-60 ${
          open && "hidden"
        }`}
      ></div>
      {open && (
        <div className="m-auto bg-colordet pb-2">
          <div className="flex justify-between flex-wrap">
            <h4 className="txt-20 text-color3 p-2 sm:p-6">
              Detalles de la reserva
            </h4>
            <div>
              <button
                className="text-color2 p-2 bg-white border-2 border-color2 rounded-md my-3 txt-14"
                onClick={handleFill}
              >
                Aplicar a todos
              </button>
              <button
                className="text-color2 p-2 bg-white border-2 border-color2 rounded-md my-3 mx-7 txt-14"
                onClick={handleSendAll}
              >
                Enviar ATP a todos
              </button>
            </div>
          </div>
          {services.map((service, index) => (
            <Detail
              key={index}
              index={index}
              fill={fill}
              setFill={setFill}
              setEndFill={setEndFill}
              endFill={endFill}
              setSendAll={setSendAll}
              sendAll={sendAll}
            />
          ))}
          <div
            className="bg-color2 w-full h-6 mt-12 cursor-pointer flex"
            onClick={handleOpen}
          >
            <img src={flecha2} alt="" className="w-5 h-5 m-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
