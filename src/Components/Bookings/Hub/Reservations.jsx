import React from "react";
import Reservation from "./Reservation";

const Reservations = ({ details, setDetails }) => {
  const data = [
    {
      locator: "5A26J9",
      name: "Omar Mejenes",
      service: "Transfer In",
      services: ["servicio1", "servicio2", "servicio3"],
    },
    {
      locator: "8A26J9",
      name: "Pedro Perez",
      service: "Transfer Out",
      services: ["servicio1"],
    },
    {
      locator: "7A26J9",
      name: "Jose Garcia",
      service: "Transfer In",
      services: ["servicio1", "servicio2"],
    },
  ];
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
