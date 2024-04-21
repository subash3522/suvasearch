import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../Global.css";
import myContextVariable from "../Context FIles/Context";

function Description() {
  const { id } = useParams();

  const declaredVariable = useContext(myContextVariable);

  const [mountainId, setMountainId] = useState([]);

  useEffect(() => {
    const fetchMountainsId = async (idh) => {
      try {
        const response = await axios.get(
          `http://localhost:5001/mountain/${idh}`
        );
        setMountainId(response.data[0]);
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };
    // console.log(declaredVariable.nextVariable);

    fetchMountainsId(id);
  }, []);

  // console.log(mountainId);

  const [dateData, setDateData] = useState([]);

  const fetchDateData = async (destination) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/fetchDate/${destination}`
      );
      setDateData(response.data);
    } catch (error) {
      console.error("Error fetching date data:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
 
  useEffect(() => {
    fetchDateData(mountainId.mountainName);
  }, []);

  console.log("people going", dateData);

  return (
    <>
      <div style={{ maxWidth: "90%", margin: "0 auto", padding: "20px" }}>
        <img
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
          src={`http://localhost:5001/${mountainId.photoPath}`}
          alt={mountainId.mountainName}
          className="card-image"
        />

        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          {
            <p
              style={{
                color: "black",
                textAlign: "justify",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              {mountainId.descriptionPath}
            </p>
          }
        </div>
      </div>
      <div>
        <h2>Going Users:</h2>
        <ul>
          {dateData.map((data, index) => (
            <li key={index}>
              UserID: {data.userId} {"     ....       "}
              on Date {"     ....       "} {data.date} 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Description;
