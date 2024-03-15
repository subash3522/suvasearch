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
    console.log(declaredVariable.nextVariable);
  

    fetchMountainsId(id);
  }, [id]);

  console.log(mountainId);
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
    </>
  );
}

export default Description;
