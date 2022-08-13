import { rest } from "lodash";

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}
const handleFormatInfo = (info) => {
  //format data
  const formatedData = info.reduce((acc, cur, idx) => {
    let service;
    if (cur.ServiceType === "OUT") {
      //Format date
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
        delegation_id: cur.Delegation,
        line: cur.DepartureLines,
      };
    } else {
      //Format date
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
        delegation_id: cur.Delegation,
        line: cur.ArrivalLines,
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
        nam: cur.Name,
        lastName: cur.LastName,
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
  return formatedArray;
};

const formatPost = (info, ip) => {
  if (info.newName !== `${info.name} ${info.lastName}`) {
    const a = info.newName.split(" ");
    info.name = a[0];
    a.shift();
    info.lastName = a.join(" ");
  }

  const channels = [];
  if (info.email !== "") {
    channels.push({
      rank: 0,
      channel: "email",
      value: info.email,
    });
  }
  if (info.whatsapp !== "") {
    channels.push({
      rank: 0,
      channel: "whatsapp",
      value: "+" + info.whatsapp,
    });
  }
  if (info.phone !== "") {
    channels.push({
      rank: 0,
      channel: "sms",
      value: "+" + info.phone,
    });
  }

  const template = {
    locator: info.locator,
    name: info.name,
    lastname: info.lastName ? info.lastName : "",
    language: info.language,
    delegation_id: info.delegation_id,
    lines: [info.line && +info.line],
    channels,
    ip,
    terms: true,
    send_msn: false,
  };
  return template;
};

export { handleFormatInfo, formatPost };
