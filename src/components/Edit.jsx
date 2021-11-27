import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Edit.css";

let baseUrl = "https://asas-rivaj-2021.herokuapp.com";

function Edit() {
  const [posterData, setPosterData] = useState("");
  const [firstAdm, setFirstAdm] = useState("");
  const [secondAdm, setSecondAdm] = useState("");
  const [thirdAdm, setThirdAdm] = useState("");
  const [search, setSearch] = useState("");
  const getFirstData = (e) => {
    e.preventDefault();
    if (search === "") {
      return;
    }
    axios.get(`${baseUrl}/poster/sms/${search}`).then((data) => {
      setPosterData(data.data.data);
    });
  };
  const updateData = (e) => {
    e.preventDefault();
    axios.patch(`/poster/sms/${posterData._id}`, {
      firstAdm,
      secondAdm,
      thirdAdm,
    });
  };
  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Search by Id"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="btn" onClick={getFirstData}>
          Search
        </button>
      </form>
      {posterData ? (
        <form className="form-data" onSubmit={() => updateData}>
          <h5 className="text-center">Programme's Name</h5>
          <input type="text" name="firstname" value={posterData.name} />
          <h5 className="text-center">First Prize</h5>
          <p>Chest No</p>
          <input type="text" value={posterData.first.chestNo} />
          <p>Admission Number </p>
          <input
            type="text"
            name="firstname"
            defaultValue={posterData.first.adm}
            onChange={(e) => setFirstAdm(e.target.value)}
           />
          <p>Name </p>
          <input
            type="text"
            name="firstname"
            placeholder=""
            defaultValue={posterData.first.name}
           />
          <h5>Second Prize </h5>
          <p>Chest No</p>
          <input type="text" value={posterData.second.chestNo} />
          <p>Admission Number </p>
          <input
            type="text"
            name="firstname"
            placeholder=""
            defaultValue={posterData.second.adm}
            onChange={(e) => setSecondAdm(e.target.value)}
           />
          <p>Name </p>
          <input
            type="text"
            name="firstname"
            placeholder="Enter Programmes' Name "
            defaultValue={posterData.second.name}
           />
          <h5>Third Prize </h5>
          <p>Chest No</p>
          <input type="text" value={posterData.third.chestNo} />
          <p>Admission Number </p>
          <input
            type="text"
            name="firstname"
            placeholder=""
            defaultValue={posterData.third.adm}
            onChange={(e) => setThirdAdm(e.target.value)}
           />
          <p>Name </p>
          <input
            type="text"
            name="firstname"
            defaultValue={posterData.third.name}
           />
          <button className="btn" type="submit">
            save
          </button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Edit;
