import React from "react";
import "./Popup.css";
import { useState } from "react";

const Popup = (
  { addCard, cards, editCard, selectedCard, deleteCard },
  props
) => {
  /*const [Date, setDate] = useState("October 21, 2023");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Source, setSource] = useState("Website");
  const [DateModified, setDateModified] = useState("October 21, 2023");
  const [Email, setEmail] = useState("");
  const [Status, setStatus] = useState("Active");*/
  const [card, setCard] = useState(
    selectedCard || {
      Date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      Name: "",
      Number: "",
      Source: "Website",
      DateModified: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      Email: "",
      Status: "Active",
    }
  );

  function handleChange(event) {
    setCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    /* addCard({ Date, Name, Number, Source, DateModified, Email, Status });
     */
    selectedCard ? editCard(card) : addCard(card);
  }
  const handleDelete = (event) => {
    event.preventDefault();
    deleteCard(card.index);
  };
  return (
    <div className="popup-box">
      <div className="box">
        <form action="#" onSubmit={handleSubmit}>
          <label>Status</label>
          <select name="Status" value={card.Status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <label>Source</label>
          <select name="Source" value={card.Source} onChange={handleChange}>
            <option value="Website">Website</option>
            <option value="App">App</option>
          </select>
          <span className="popup-Lead">Lead Details</span>
          <div className="popup-Lead-Div">
            <div>
              <span>Name</span>
              <input
                type="text"
                name="Name"
                value={card.Name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <span>Number</span>
              <input
                type="text"
                name="Number"
                value={card.Number}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <span>Email</span>
              <input
                type="text"
                name="Email"
                value={card.Email}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <span>Notes</span>
              <textarea></textarea>
            </div>
          </div>

          <button className="close-icon" onClick={props.handleClose}>
            x
          </button>
          {selectedCard && (
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          )}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
