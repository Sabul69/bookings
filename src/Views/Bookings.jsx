import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";

//Components
import Filter from "../Components/Bookings/Filter";
import Hub from "../Components/Bookings/Hub";
//Styles
import "../Styles/Booking/Booking.styles.css";
const Bookings = () => {
  const [info, setInfo] = useState([]);

  const handleFetchData = async () => {
    const { data } = await axios.get(
      `https://nexusgov3.nexustours.net/ExperiencesHubServices.STG/api/ExperiencesHub/BookingsByAgency?intIdCli=3109`
    );
    setInfo(data);
    console.log(info);
  };

  useEffect(() => {
    handleFetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="contain m-auto">
      <Filter />
      <Hub info={info} />
    </div>
  );
};

export default Bookings;
