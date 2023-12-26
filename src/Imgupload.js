import axios from "axios";
import React, { useEffect, useState } from "react";

function Imgupload() {
  const [imgfile, setImgfile] = useState();
  const [img, setImg] = useState()

  const handlechangeimage = (e) => {
    setImgfile(e.target.files[0]);
  };

  const onuploadclicker = () => {
    const formdata = new FormData();
    formdata.append("image", imgfile);
    axios
      .post("http://localhost:5001/upload", formdata)
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:5001/upload")
    .then (res => {console.log(res.data); setImg(res.data)})
  });
  return (
    <>
    <div>
      <input type="file" onChange={handlechangeimage} />
      <button onClick={onuploadclicker}>upload</button>
    </div>
    <div>{img}</div>
    </>

  );
}

export default Imgupload;
