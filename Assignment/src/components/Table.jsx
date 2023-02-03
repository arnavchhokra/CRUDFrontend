import React from "react";
import { useState } from "react";
import Popup from "./Popup.jsx";

const Table = ({ props, handleEditCard }) => {
  return (
    <table style={{ width: "100%" }}>
      <thead style={{ width: "100%" }}>
        <tr>
          <th>Lead Date</th>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Source</th>
          <th>Last updated</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody style={{ width: "100%" }}>
        {props.map((data,index) => (
          <tr key={index}>
            <td>{data.Date}</td>
            <td>{data.Name}</td>
            <td>{data.Number}</td>
            <td>{data.Email}</td>
            <td>{data.Source}</td>
            <td>{data.DateModified}</td>
            <td>{data.Status}</td>
            <td>
              <button onClick={() => handleEditCard(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
