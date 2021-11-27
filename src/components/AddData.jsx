import axios from "axios";
import React, { useState } from "react";
import "./AddData.css";
import Table from "./Table";
import { Link } from "react-router-dom";
let baseUrl = "https://thahreez-2021.herokuapp.com";
// let baseUrl = "http://localhost:8000";

function AddData({ url, title }) {
  const [image, setImage] = useState("7");

  //Individual or group
  const [individual, setIndividual] = useState(true);

  const [firstData, setFirstData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [thirdData, setThirdData] = useState("");
  //
  const [firstSearch, setFirstSearch] = useState("");
  const [secondSearch, setSecondSearch] = useState("");
  const [thirdSearch, setThirdSearch] = useState("");
  //
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [firstTeam, setFirstTeam] = useState("");
  const [firstGrade, setFirstGrade] = useState("");
  const [firstAdm, setFirstAdm] = useState("");
  const [secondTeam, setSecondTeam] = useState("");
  const [secondName, setsecondName] = useState("");
  const [secondGrade, setsecondGrade] = useState("");
  const [secondAdm, setSecondAdm] = useState("");
  const [thirdName, setthirdName] = useState("");
  const [thirdTeam, setThirdTeam] = useState("");
  const [thirdGrade, setthirdGrade] = useState("");
  const [thirdAdm, setThirdAdm] = useState("");
  const getFirstData = (e) => {
    e.preventDefault();
    axios.get(`${baseUrl}/candidate/chs/${firstSearch}`).then((data) => {
      console.log(data);
      setFirstData(data);
      setFirstName(data.data.name);
      setFirstAdm(data.data.adm);
      setFirstTeam(data.data.team);
    });
  };
  const getSecondData = (e) => {
    e.preventDefault();
    axios.get(`${baseUrl}/candidate/${url}/${secondSearch}`).then((data) => {
      setSecondData(data);
      setsecondName(data.data.name);
      setSecondTeam(data.data.team);
      setSecondAdm(data.data.adm);
    });
  };
  const getThirdData = (e) => {
    e.preventDefault();
    axios.get(`${baseUrl}/candidate/${url}/${thirdSearch}`).then((data) => {
      setThirdData(data);
      setthirdName(data.data.name);
      setThirdTeam(data.data.team);
      setThirdAdm(data.data.adm);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = window.confirm("are you sure?");
    if (answer) {
      axios
        .post(`https://thahreez-2021.herokuapp.com/poster/${url}`, {
          name,
          firstTeam,
          firstName,
          firstGrade,
          firstAdm,
          secondGrade,
          secondName,
          secondTeam,
          secondAdm,
          thirdName,
          thirdGrade,
          thirdTeam,
          thirdAdm,
          image,
        })
        .then((result) => {
          window.location.reload();
        });
    }
  };
  const individualOrGroup = (selected) => {
    if (selected === "group") {
      setIndividual(false);
    } else {
      setIndividual(true);
    }
  };
  return (
    <>
      <div className="gr">
        <select
          className="group-individual"
          onChange={(e) => individualOrGroup(e.target.value)}
          id="select"
          name="country"
        >
          <option className="text-center" value="individual">
            individual
          </option>
          <option className="text-center" value="group">
            group
          </option>
        </select>
      </div>
      <Link to={`/`}>
        <img style={{ width: "300px" }} src="/images/logo.jpg" alt="" />
      </Link>

      <form onSubmit={handleSubmit} className="form-data">
        <h1>{title}</h1>
        <h5 className="text-center">Programme's Name</h5>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Programmes' Name "
          required
          className="inputField"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h2 className="heading one">First Prize </h2>
        {firstData || !individual ? (
          <>
            {individual ? (
              <>
                {" "}
                <h5 className="text-center" htmlFor="fname">
                  Candidate's Name
                </h5>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Candidate's Name.."
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </>
            ) : (
              ""
            )}
            <h5 className="text-center" htmlFor="fname">
              House
            </h5>
            {individual ? (
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="House"
                value={firstTeam}
                onChange={(e) => setFirstTeam(e.target.value)}
              />
            ) : (
              <select
                onChange={(e) => setFirstTeam(e.target.value)}
                id="select"
                name="country"
              >
                <option className="text-center">select team</option>
                <option className="text-center" value="JUMAIRA">
                  JUMAIRA
                </option>
                <option className="text-center" value="MAJANNA">
                  MAJANNA
                </option>
                <option className="text-center" value="WAQIF">
                  WAQIF
                </option>
                <option className="text-center" value="MIRBAD">
                  MIRBAD
                </option>
              </select>
            )}

            <h5 className="text-center" htmlFor="lname">
              Grade
            </h5>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Grade"
              value={firstGrade}
              onChange={(e) => setFirstGrade(e.target.value)}
            />
            <h5 className="text-center" htmlFor="lname">
              ADM No:
            </h5>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="ADM No:"
              value={firstAdm}
            />
          </>
        ) : (
          ""
        )}
        {individual ? (
          <>
            <h5 className="heading" htmlFor="fname">
              Search Chest No
            </h5>
            <input
              type="text"
              placeholder="enter a chest no"
              onChange={(e) => setFirstSearch(e.target.value)}
            ></input>
            <input
              type="submit"
              id="search-btn"
              style={{ backgroundColor: "#07182c" }}
              onClick={getFirstData}
              value="search"
            />
          </>
        ) : (
          ""
        )}
        {/* second  */}
        <h2 className="heading two">Second Prize </h2>
        {secondData || !individual ? (
          <>
            {individual ? (
              <>
                {" "}
                <h5 className="text-center" htmlFor="fname">
                  Candidate's Name
                </h5>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Candidate's Name.."
                  className="form-control"
                  value={secondName}
                  onChange={(e) => setsecondName(e.target.value)}
                />
              </>
            ) : (
              ""
            )}
            <h5 className="text-center" htmlFor="fname">
              House
            </h5>
            {individual ? (
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="House"
                value={secondTeam}
                onChange={(e) => secondTeam(e.target.value)}
              />
            ) : (
              <select
                onChange={(e) => setSecondTeam(e.target.value)}
                id="select"
                name="country"
                defaultValue={"JUMAIRA"}
              >
                <option className="text-center">select team</option>
                <option className="text-center" value="JUMAIRA">
                  JUMAIRA
                </option>
                <option className="text-center" value="MAJANNA">
                  MAJANNA
                </option>
                <option className="text-center" value="WAQIF">
                  WAQIF
                </option>
                <option className="text-center" value="MIRBAD">
                  MIRBAD
                </option>
              </select>
            )}

            <h5 className="text-center" htmlFor="lname">
              Grade
            </h5>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Grade"
              value={secondGrade}
              onChange={(e) => setsecondGrade(e.target.value)}
            />
            <h5 className="text-center" htmlFor="lname">
              ADM No:
            </h5>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="ADM No:"
              value={secondAdm}
              onChange={(e) => setSecondAdm(e.target.value)}
            />
          </>
        ) : (
          ""
        )}
        {individual ? (
          <>
            <h5 className="heading" htmlFor="fname">
              Search Chest No
            </h5>
            <input
              type="text"
              placeholder="enter a chest no"
              onChange={(e) => setSecondSearch(e.target.value)}
            ></input>
            <input
              type="submit"
              id="search-btn"
              onClick={getSecondData}
              style={{ backgroundColor: "#035f5a" }}
              value="search"
            />
          </>
        ) : (
          ""
        )}
        {/* Third  */}
        <h2 className="heading three">Third Prize </h2>
        {thirdData || !individual ? (
          <>
            {individual ? (
              <>
                {" "}
                <h5 className="text-center" htmlFor="fname">
                  Candidate's Name
                </h5>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Candidate's Name.."
                  className="form-control"
                  value={thirdName}
                  onChange={(e) => setthirdName(e.target.value)}
                />
              </>
            ) : (
              ""
            )}
            <h5 className="text-center" htmlFor="fname">
              House
            </h5>
            {individual ? (
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="House"
                value={thirdTeam}
                onChange={(e) => setthirdName(e.target.value)}
              />
            ) : (
              <select
                onChange={(e) => setThirdTeam(e.target.value)}
                id="select"
                name="country"
              >
                <option className="text-center">select team</option>
                <option className="text-center" value="JUMAIRA">
                  JUMAIRA
                </option>
                <option className="text-center" value="MAJANNA">
                  MAJANNA
                </option>
                <option className="text-center" value="WAQIF">
                  WAQIF
                </option>
                <option className="text-center" value="MIRBAD">
                  MIRBAD
                </option>
              </select>
            )}

            <h5 className="text-center" htmlFor="lname">
              Grade
            </h5>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Grade"
              value={thirdGrade}
              onChange={(e) => setthirdGrade(e.target.value)}
            />
            <h5 className="text-center" htmlFor="lname">
              ADM No:
            </h5>
            <input
              type="text"
              id="lname"
              placeholder="ADM No:"
              value={thirdAdm}
              onChange={(e) => setThirdAdm(e.target.value)}
            />
          </>
        ) : (
          ""
        )}
        {individual ? (
          <>
            <h5 className="heading" htmlFor="fname">
              Search Chest No
            </h5>
            <input
              type="text"
              placeholder="enter a chest no"
              onChange={(e) => setThirdSearch(e.target.value)}
            ></input>
            <input
              type="submit"
              id="search-btn"
              onClick={getThirdData}
              style={{ backgroundColor: "#0e0101" }}
              value="search"
            />
          </>
        ) : (
          ""
        )}

        <input
          type="submit"
          style={{ marginTop: "2rem" }}
          defaultValue="submit"
          id="submit-btn"
        />
        <Table url={url} />
      </form>
    </>
  );
}

export default AddData;
