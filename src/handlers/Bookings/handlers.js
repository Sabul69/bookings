function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}
const handleFormatInfo = (info, setData, slice) => {
  //format data
  const formatedData = info.reduce((acc, cur, idx) => {
    let service;
    if (cur.ServiceType === "OUT") {
      const m = new Date(cur.DateBookingEnd);
      const month = toMonthName(m.getUTCMonth() + 1);

      const dateString =
        ("0" + m.getUTCDate()).slice(-2) +
        "/" +
        month +
        "/" +
        m.getUTCFullYear() +
        " " +
        m.toTimeString().slice(0, 5);
      service = {
        service: cur.ServiceType,
        flight: cur.FlightDeparture,
        date: dateString,
        hotel: cur.Hotel,
      };
    } else {
      const m = new Date(cur.DateBookingStart);
      const month = toMonthName(m.getUTCMonth());
      const dateString =
        ("0" + m.getUTCDate()).slice(-2) +
        "/" +
        month +
        "/" +
        m.getUTCFullYear() +
        " " +
        m.toTimeString().slice(0, 5);
      service = {
        service: cur.ServiceType,
        flight: cur.FlightArrival,
        date: dateString,
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
