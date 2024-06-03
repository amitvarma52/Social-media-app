import React, { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";
export const appContext = createContext();
const reducer = (currentvalue, action) => {
  if (action.type === "add") {
    const newCardObj = [
      ...currentvalue,
      {id:currentvalue.length, title: action.payload.title, description: action.payload.description,hashtags:action.payload.hashtags },
    ];
    return newCardObj;
  } else if (action.type === "delete") {
    const newCardObj = currentvalue.filter((element) => {
      return element.id != action.payload.deleteItem;
    });
    return newCardObj;
  }
};
const Store = ({ children }) => {
  const [show, setShow] = useState(true);
  const [cardObj, cardDispatch] = useReducer(reducer, []);
  const handleAddPost = (title, description,hashtags) => {
    const newAddObject = {
      type: "add",
      payload: {
        title,
        description,
        hashtags
      },
    };
    cardDispatch(newAddObject);
  };
  const handleDeletePost = (deleteItem) => {
    const newDeleteObject = {
      type: "delete",
      payload: {
        deleteItem,
      },
    };
    cardDispatch(newDeleteObject);
  };

  return (
    <appContext.Provider
      value={{ show, setShow, cardObj, handleAddPost, handleDeletePost }}
    >
      {children}
    </appContext.Provider>
  );
};

export default Store;
