import { Calendar } from "@nextui-org/calendar";
import { useState } from "react";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
};

export default MyCalendar;
