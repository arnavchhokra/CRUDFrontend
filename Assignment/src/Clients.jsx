import React from "react";
import "./Clients.css";
import Table from "./components/Table";
import Popup from "./components/Popup";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Clients() {
  const initialcards = [
    {
      Date: "May 26, 2021",
      Name: "John Doe",
      Number: "123456789",
      Source: "Website",
      DateModified: "May 27, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Active",
    },
    {
      Date: "May 28, 2021",
      Name: "Jane Doe",
      Number: "987654321",
      Source: "App",
      DateModified: "May 29, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Inactive",
    },
    {
      Date: "May 30, 2021",
      Name: "Jim Brown",
      Number: "111222333",
      Source: "Website",
      DateModified: "May 31, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Active",
    },
    {
      Date: "June 1, 2021",
      Name: "Sara Lee",
      Number: "444555666",
      Source: "App",
      DateModified: "June 2, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Inactive",
    },
    {
      Date: "June 3, 2021",
      Name: "Tom Smith",
      Number: "777888999",
      Source: "Website",
      DateModified: "June 4, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Active",
    },
    {
      Date: "June 5, 2021",
      Name: "Emily Davis",
      Number: "555222999",
      Source: "App",
      DateModified: "June 6, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Inactive",
    },
    {
      Date: "June 7, 2021",
      Name: "Michael Johnson",
      Number: "999333111",
      Source: "Website",
      DateModified: "June 8, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Active",
    },
    {
      Date: "June 9, 2021",
      Name: "Sarah Wilson",
      Number: "888666222",
      Source: "App",
      DateModified: "June 10, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Inactive",
    },
    {
      Date: "June 11, 2021",
      Name: "David Anderson",
      Number: "777777777",
      Source: "Website",
      DateModified: "June 12, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Active",
    },
    {
      Date: "June 13, 2021",
      Name: "Jessica Thompson",
      Number: "666666999",
      Source: "App",
      DateModified: "June 14, 2021",
      Email: "arnavchhokra@gmail.com",
      Status: "Inactive",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [Cards, SetCards] = useState(initialcards);
  function addCard(newCard) {
    SetCards([...Cards, newCard]);
    setIsOpen(!isOpen);
  }

  function editCard(updatedCard) {
    const newCards = [...Cards];
    newCards[selectedCardIndex] = updatedCard;
    SetCards(newCards);
    setIsOpen(!isOpen);
  }

  function handleEditCard(index) {
    setSelectedCardIndex(index);
    setIsOpen(!isOpen);
  }
  const deleteCard = (index) => {
    const newCards = [...Cards];
    newCards.splice(index, 1);
    SetCards(newCards);
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="Clients-Home"
      style={{
        "@media only screen and (max-width: 600px)": {
          fontSize: "1em",
        },
      }}
    >
      <div className="Clients-Container">
        <div className="Clients-Head">Clients</div>
        <div className="Clients-Sub">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input></input>
          </span>
          <button onClick={togglePopup}>
            Add a lead{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
          {isOpen && (
            <Popup
              cards={Cards}
              addCard={addCard}
              editCard={editCard}
              handleClose={togglePopup}
              deleteCard={deleteCard}
              selectedCard={
                selectedCardIndex !== null ? Cards[selectedCardIndex] : null
              }
            />
          )}{" "}
        </div>
        <div className="Clients-Details">
          <Table props={Cards} handleEditCard={handleEditCard} />
        </div>
      </div>
    </div>
  );
}

export default Clients;
