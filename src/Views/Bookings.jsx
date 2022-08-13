import axios from "axios";
import React, { useEffect, useState } from "react";
//Components
import Filter from "../Components/Bookings/Filter";
import Hub from "../Components/Bookings/Hub";
//Styles
import "../Styles/Booking/Booking.styles.css";
//handler
import { handleFormatInfo } from "../handlers/Bookings/handlers.js";
import { clientId, mainUrl } from "../Utils/UrlVariables";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [slice, setSlice] = useState(30);
  const [formatedArray, setFormatedArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState({
    nombre: "",
    agencia: "",
    localizador: "",
    registrada: "si",
    destino: "15",
    fecha: "Reservacion",
  });
  const [url, setUrl] = useState(
    `${mainUrl}/ExperiencesHub/BookingsByAgency?intIdCli=${clientId}`
  );

  const handleUrl = () => {
    let nombre;
    let apellido;
    const a = filter.nombre.split(" ");
    if (a.length === 2) {
      [nombre, apellido] = a;
    }
    if (a.length === 3) {
      nombre = a[0];
      apellido = `${a[1]} ${a[2]}`;
    }
    if (a.length === 4) {
      nombre = `${a[0]} ${a[1]}`;
      apellido = `${a[2]} ${a[3]}`;
    }
    setUrl(
      `https://nexusgov3.nexustours.net/ExperiencesHubServices.STG/api/ExperiencesHub/BookingsByAgency?intIdCli=3109${
        filter.agencia && `&strReferenceAgency=${filter.agencia}`
      }${filter.localizador && `&strRecord=${filter.localizador}`}${
        filter.destino && `&intIdDel=${filter.destino}`
      }${nombre && `&strName=${nombre}`}${
        apellido ? `&strLastName=${apellido}` : ""
      }${
        filter.inicio && filter.fecha === "Reservacion"
          ? `&dteDateIni=${filter.inicio}T00:00:00`
          : ""
      }${
        filter.final && filter.fecha === "Reservacion"
          ? `&dteDteFin=${filter.final}T00:00:00`
          : ""
      }
      ${
        filter.inicio && filter.fecha === "Viaje"
          ? `&dteTravelIni=${filter.inicio}T00:00:00`
          : ""
      }${
        filter.final && filter.fecha === "Viaje"
          ? `&dteTravelFin=${filter.final}T00:00:00`
          : ""
      }`
    );
  };

  const handleFetchData = async () => {
    setLoader(true);
    const { data } = await axios.get(url);
    const array = handleFormatInfo(data);
    setFormatedArray(array);
    setLoader(false);
  };

  const handleSlice = (array, slice) => {
    const fragment = array.slice(0, slice);
    setData(fragment);
  };

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    handleSlice(formatedArray, slice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, slice, formatedArray]);

  return (
    <div className="contain m-auto">
      <Filter handleUrl={handleUrl} filter={filter} setFilter={setFilter} />
      <Hub data={data} slice={slice} setSlice={setSlice} loader={loader} />
    </div>
  );
};

export default Bookings;
