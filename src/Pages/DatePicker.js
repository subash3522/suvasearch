import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function CustomDatePicker({ postId, destination }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

  const handleSendDateToBackend = (postId, destination) => {
    if (selectedDate) {
      axios
        .post(`${apiUrl}/selectdate/${postId}/${destination}`, {
          date: selectedDate,
          userId: 5,
        })
        .then((response) => {
          console.log("Date sent successfully");
          // Handle success scenario if needed
        })
        .catch((error) => {
          console.error("Error occurred while sending date:", error);
          // Handle error scenario if needed
        });
    } else {
      console.warn("No date selected");
      // Handle scenario when no date is selected
    }
  };

  return (
    <>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      <button onClick={() => handleSendDateToBackend(postId, destination)}>
        OK
      </button>

      

    </>
  );
}

export default CustomDatePicker;
