import React, {useState} from "react";

function ListingCard({listing, onHandleDelete}) {

  const { id, image, description, location } = listing
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  }

  const handleDelete = () => {

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then (console.log("deleted!"))

    onHandleDelete(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick ={ handleDelete } className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
