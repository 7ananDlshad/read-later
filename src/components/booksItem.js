import React from "react";
import { FaTrash } from "react-icons/fa";
import { databaseRef } from "../firebase";

function BooksItem(props) {
  const handleDelete = () => {
    let id = props.id;
    databaseRef.doc(id).delete();
  };

  return (
    <div className="my-4 shadow p-3 bg-white rounded d-flex align-items-center justify-content-between">
      <div>
        <p className="font-weight-bold">{props.title}</p>
        <p>{props.author}</p>
      </div>
      <div>
        <FaTrash color="red" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default BooksItem;
