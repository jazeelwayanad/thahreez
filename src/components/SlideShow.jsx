import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SlideShow.css";
import { Carousel } from "react-bootstrap";
let baseUrl = "https://asas-rivaj-2021.herokuapp.com";

function Slideshow({ url }) {
  const [posters, setPosters] = useState([]);
  console.log(posters);
  useEffect(() => {
    const getAllPosters = async () => {
      const result = await axios.get(`${baseUrl}/poster/${url}`);
      setPosters(result.data.posters);
    };
    getAllPosters();
  }, []);
  return (
    <Carousel>
      {posters.map((data) => (
        <Carousel.Item data-ride="carousel" data-interval="500">
          <div style={{ display: "none" }}>
            {parseInt(data.first.adm, data.second.adm, data.third.adm)}
          </div>
          <div className="result-bg">
            <h1 className="programme-name">{data.name}</h1>
          </div>
          <div className="results">
            <div className="first">
              {!data.first.name ? (
                <h1>{data.first.team}</h1>
              ) : (
                <>
                  <img
                    className="profile"
                    src={`/profile/${
                      !data.first.adm || data.first.adm === ""
                        ? "default.png"
                        : `${data.first.adm}.JPG`
                    }`}
                    alt=""
                  />
                  <h1 className="chestNo">{data.first.chestNo}</h1>
                </>
              )}
              <h3 className="name">{data.first.name}</h3>
              {data.first.name ? (
                <h3 className="team">{data.first.team}</h3>
              ) : (
                ""
              )}
              <h3 className={`${data.first.name ? `grade` : "team-grade"}`}>
                {data.first.grade}
              </h3>
            </div>
            <div className="second">
              {!data.first.name ? (
                <h1>{data.second.team}</h1>
              ) : (
                <>
                  <img
                    className="profile"
                    src={`/profile/${
                      !data.second.adm || data.second.adm === ""
                        ? "default.png"
                        : `${data.second.adm}.JPG`
                    }`}
                    alt=""
                  />
                  <h1 className="chestNo">{data.second.chestNo}</h1>
                </>
              )}
              <h3 className="name">{data.second.name}</h3>
              {data.second.name ? (
                <h3 className="team">{data.second.team}</h3>
              ) : (
                ""
              )}
              <h3 className={`${data.second.name ? `grade` : "team-grade"}`}>
                {data.second.grade}
              </h3>
            </div>
            <div className="third">
              {!data.first.name ? (
                <h1>{data.third.team}</h1>
              ) : (
                <>
                  <img
                    className="profile"
                    src={`/profile/${
                      !data.third.adm || data.third.adm === ""
                        ? "default.png"
                        : `${data.third.adm}.JPG`
                    }`}
                    alt=""
                  />{" "}
                  <h1 className="chestNo">{data.third.chestNo}</h1>
                </>
              )}
              <h3 className="name">{data.third.name}</h3>
              {data.third.name ? (
                <h3 className="team">{data.third.team}</h3>
              ) : (
                ""
              )}
              <h3 className={`${data.third.name ? `grade` : "team-grade"}`}>
                {data.third.grade}
              </h3>
            </div>
          </div>
          <div className="bg">
            <img className="d-block w-100" src={`/images/pattern.jpg`} alt="" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slideshow;
