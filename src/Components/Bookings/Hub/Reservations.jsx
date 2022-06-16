import React, { useEffect, useState } from "react";
import Reservation from "./Reservation";
import { handleFormatInfo } from "../../../handlers/Bookings/handlers";

const Reservations = ({ info, details, setDetails }) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    handleFormatInfo(info, setData);
  }, [info]);

  return (
    <div className="border-resv rounded-md pb-14">
      <div className="flex justify-between border-b-2 border-b-color2 border-opacity-60 py-4 txt-16">
        <h4 className="w-3/12 font-bold pl-2 sm:pl-14">Locator</h4>
        <h4 className="w-3/12 font-bold">Holder Name</h4>
        <h4 className="w-3/12 font-bold">Service Type</h4>
        <h4 className="w-2/12 font-bold">Detail</h4>
      </div>
      {data.map((info, index) => (
        <Reservation
          key={index}
          locator={info.locator}
          name={info.name}
          service={info.service}
          services={info.services}
          bg={index}
          details={details}
          setDetails={setDetails}
        />
      ))}
    </div>
  );
};

export default Reservations;
