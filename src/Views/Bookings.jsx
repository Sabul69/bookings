import axios from "axios";
import React, { useEffect, useState } from "react";
//Components
import Filter from "../Components/Bookings/Filter";
import Hub from "../Components/Bookings/Hub";
//Styles
import "../Styles/Booking/Booking.styles.css";
//handler
import { handleFormatInfo } from "../handlers/Bookings/handlers.js";

const Bookings = () => {
  const [filter, setFilter] = useState({
    nombre: "",
    agencia: "",
    localizador: "",
    registrada: "si",
    destino: "15",
  });
  const [data, setData] = useState([]);
  const [slice, setSlice] = useState(30);
  const [url, setUrl] = useState(
    `https://nexusgov3.nexustours.net/ExperiencesHubServices.STG/api/ExperiencesHub/BookingsByAgency?intIdCli=5622`
  );

  const handleUrl = () => {
    const [nombre, apellido] = filter.nombre.split(" ");
    setUrl(
      `https://nexusgov3.nexustours.net/ExperiencesHubServices.STG/api/ExperiencesHub/BookingsByAgency?intIdCli=5622${
        filter.agencia && `&strReferenceAgency=${filter.agencia}`
      }${filter.localizador && `&strRecord=${filter.localizador}`}${
        filter.destino && `&intIdDel=${filter.destino}`
      }${nombre && `&strName=${nombre}`}${
        apellido ? `&strLastName=${apellido}` : ""
      }${filter.inicio ? `&dteTravelIni=${filter.inicio}T00:00:00` : ""}${
        filter.final ? `&dteTravelFin=${filter.final}T00:00:00` : ""
      }`
    );
    console.log(url);
  };

  const handleFetchData = async () => {
    const { data } = await axios.get(url);
    handleFormatInfo(data, setData, slice);
  };

  useEffect(() => {
    handleFetchData();
    console.log(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, slice]);

  return (
    <div className="contain m-auto">
      <Filter handleUrl={handleUrl} filter={filter} setFilter={setFilter} />
      <Hub data={data} setSlice={setSlice} />
    </div>
  );
};

export default Bookings;
