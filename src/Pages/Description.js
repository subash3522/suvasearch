import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Description() {
  const { id } = useParams();

  const [mountainId, setMountainId] = useState([]);
  const [para, setPara] = useState([]);

  useEffect(() => {
    const fetchMountainsId = async (idh) => {
      try {
        const response = await axios.get(
          `http://localhost:5001/mountain/${idh}`
        );
        setMountainId(response.data);
        setPara(
          response.data.descriptionContent.replace(/\r\n/g, "\n").split("\n\n")
        );
        console.log(response.data.descriptionContent.split("\n\n"));
      } catch (error) {
        console.error("Error fetching mountains:", error);
      }
    };

    fetchMountainsId(id);
  }, [id]);
  return (
    <>
      <div>
        {para.map((value) => (
          <div>
            <p style={{ color: "red" }}>{value}</p>
          </div>
        ))}
      </div>
      <div>{mountainId.ID}</div>
    </>
  );
}

export default Description;
