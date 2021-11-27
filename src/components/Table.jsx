import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Table.css";

let baseUrl = "https://asas-rivaj-2021.herokuapp.com";
function Table({ url }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllPosters = async () => {
      const result = await axios.get(`${baseUrl}/poster/${url}/all`);
      setData(result.data.posters);
    };
    getAllPosters();
  }, []);
  const deleteData = async (id) => {
    axios.delete(`${baseUrl}/poster/${url}/${id}`).then((deleted) => {
      window.location.reload();
    });
  };
  return (
    <>
      <table>
        <tr>
          <th>SI No:</th>
          <th>Programme Name</th>
          <th>ID:</th>
          <th>Delete</th>
        </tr>
        {data.map((poster, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{poster.name}</td>
            <td>{poster._id}</td>
            <td className="">
              <FontAwesomeIcon
                className="icon"
                onClick={() => {
                  if (
                    window.confirm(
                      `Are you sure you wish to delete ${poster.name} ?`
                    )
                  )
                    deleteData(poster._id);
                }}
                icon={faTrash}
              />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Table;
