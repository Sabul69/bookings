import axios from "axios";
import { useEffect, useState } from "react";
import Reservation from "./Reservation";

const Reservations = ({ data, details, setDetails }) => {
  const [ip, setIp] = useState(null);

  const fetchIp = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIp(res.data.IPv4);
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (
    <div className="border-resv rounded-md pb-14">
      <div className="flex justify-between border-b-2 border-b-color2 border-opacity-60 py-4 txt-16">
        <h4 className="w-3/12 font-bold pl-2 sm:pl-14">Locator</h4>
        <h4 className="w-3/12 font-bold">Holder Name</h4>
        <h4 className="w-3/12 font-bold">Service Type</h4>
        <h4 className="w-2/12 font-bold">Detail</h4>
      </div>

      {data?.map((info, index) => (
        <Reservation
          key={index}
          locator={info.locator}
          name={info.nam}
          lastName={info.lastName}
          service={info.service}
          services={info.services}
          bg={index}
          details={details}
          setDetails={setDetails}
          ip={ip}
        />
      ))}
    </div>
  );
};

export default Reservations;
