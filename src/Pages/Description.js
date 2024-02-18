import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "../Global.css";

function Description() {
  const { id } = useParams();

  const [mountainId, setMountainId] = useState([]);
  const [para, setPara] = useState([]);

  useEffect(() => {
    const fetchMountainsId = async (idh) => {
      try {
        const response = await axios.get(
          `https://apitesting-com.onrender.com/mountain/${idh}`
        );
        setMountainId(response.data[0]);

        // setPara(
        //   response.data.descriptionContent.replace(/\r\n/g, "\n").split("\n\n")
        // );
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchMountainsId(id);
  }, [id]);
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
          src={`https://apitesting-com.onrender.com/${mountainId.photoPath}`}
          alt={mountainId.mountainName}
          className="card-image"
        />

        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          {/* {`http://localhost:5001/${mountainId.descriptionPath}`} */}
          {/* <iframe
            src={`http://localhost:5001/description_1707762803564.txt`}
            width="100%"
           
          ></iframe> */}
          {para.map((value, index) => (
            <p
              key={index}
              style={{
                color: "black",
                textAlign: "justify",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              {value}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Description;
