const handleFormatInfo = (info, setData, slice) => {
  //format data
  const formatedData = info.reduce((acc, cur, idx) => {
    let service;
    if (cur.ServiceType === "OUT") {
      service = {
        service: cur.ServiceType,
        flight: cur.FlightDeparture,
        date: cur.DateBookingEnd,
        hotel: cur.Hotel,
      };
    } else {
      service = {
        service: cur.ServiceType,
        flight: cur.FlightArrival,
        date: cur.DateBookingStart,
        hotel: cur.Hotel,
      };
    }
    if (acc[cur.Record]) {
      acc[cur.Record] = {
        ...acc[cur.Record],
        services: [...acc[cur.Record]["services"], service],
        service: [...acc[cur.Record]["service"], cur.ServiceType],
      };
    } else {
      const name = `${cur.Name} ${cur.LastName}`;
      acc[cur.Record] = {
        locator: cur.Record,
        name,
        services: [service],
        service: [cur.ServiceType],
        language: cur.Language,
      };
    }
    return acc;
  }, []);
  let accumulator = 0;
  const formatedArray = [];
  for (const key in formatedData) {
    formatedArray[accumulator] = formatedData[key];
    formatedArray[accumulator] = {
      ...formatedData[key],
    };
    accumulator += 1;
  }
  const fragment = formatedArray.slice(0, slice);
  setData(fragment);
};
export { handleFormatInfo };
