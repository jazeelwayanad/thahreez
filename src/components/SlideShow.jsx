import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./SlideShow.css";

function Slideshow() {
  const [posters, setPosters] = useState([]);
  useEffect(() => {
    const getAllPosters = async () => {
      const result = await axios.get(
        `https://thahreez-2021.herokuapp.com/poster/chs`
      );
      setPosters(result.data.posters);
    };
    getAllPosters();
  }, []);
  console.log(posters);
  return (
    <Carousel>
      {posters.map((data, index) => (
        <Carousel.Item key={index} data-ride="carousel" data-interval="500">
          <div className="none" style={{ display: "none" }}>
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
                    src={`/profile/${data.first.adm}.jpg`}
                    alt=""
                    onError="this.onerror=null;this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'"
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
              <img
                className="profile"
                src={`/profile/${data.second.adm}.jpg`}
                alt=""
                onError="this.onerror=null;this.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'"
              />

              <h1 className="chestNo">{data.second.chestNo}</h1>

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
              <img
                className="profile"
                src={`/profile/${data.third.adm}.jpg`}
                alt=""
                onError="this.onerror=null;this.src='<?=base_url()?>assets1/img/default.jpg';"
              />

              <h1 className="chestNo">{data.third.chestNo}</h1>

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
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/hexagonal-honeycomb-abstract-3d-background-picture-id905438692?b=1&k=20&m=905438692&s=170667a&w=0&h=pTjmS2z305vjoU2j-yWgUwEK_mdK-F8IH5yGtVsbDAY="
            alt=""
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slideshow;
