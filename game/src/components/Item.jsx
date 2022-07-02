import React from "react";
import { createContext } from "react";

import { useState } from "react";
import { Basket } from "./Basket";
export const UserContent = createContext();

export const Item = () => {
  const itemContainer = [
    {
      id: Math.floor(Math.random() * 999999),
      name: "Nature",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      add: false,
    },
    {
      id: Math.floor(Math.random() * 999999),
      name: "Forrest",
      img: "https://cdn.europosters.eu/image/750/posters/spring-forrest-i101995.jpg",
      add: false,
    },
    {
      id: Math.floor(Math.random() * 999999),
      name: "Sea",
      img: "https://media.wired.com/photos/5bb6accf0abf932caf294b18/master/pass/waves-730260985.jpg",
      add: false,
    },
    {
      id: Math.floor(Math.random() * 999999),
      name: "Cinema",
      img: "https://www.europa-cinemas.org/storage/1416/prix-europa-cinemas-2018.jpeg",
      add: false,
    },
    {
      id: Math.floor(Math.random() * 999999),
      name: "Avatar",
      img: "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1",
      add: false,
    },
    {
      id: Math.floor(Math.random() * 999999),
      name: "Office",
      img: "https://content.instantoffices.com/Prod/images/centres/original/51606/51606-376778.jpg",
      add: false,
    },
  ];
  const [item, setItem] = useState(itemContainer);
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    const newList = item.filter((single) => single.id !== id);
    const addedItem = item.filter((single) => single.id == id);
    setItem(newList);
    setCart([...cart, addedItem]);
  };
  return (
      <>
           
      {item.map((single) => {
        return (
          <div className="card">
            <img src={single.img} />
            <div className="card-content">
              <b>{single.name}</b>
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(single.id)}
              >
                დამატება
              </button>
            </div>
          </div>
        );
      })}
      <UserContent.Provider value={cart}>
        <Basket />
      </UserContent.Provider>
    </>
  );
};
