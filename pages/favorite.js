import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/card/card";

function Favorite() {
  const handleRemoveFavorite = (e) => {
    const targetId = e.target.closest(".card").getAttribute("id");
    const lsArrForRemove = JSON.parse(localStorage.getItem("favoriteDogArr"));
    const filteredArr = lsArrForRemove.filter(
      (el) => el.id !== Number(targetId)
    );
    localStorage.setItem("favoriteDogArr", JSON.stringify(filteredArr));
    setFavoriteData(JSON.parse(localStorage.getItem("favoriteDogArr")));
    if (!filteredArr[0]) {
      setFavoriteData(false);
    }
  };

  const [favoriteData, setFavoriteData] = useState();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favoriteDogArr"))[0]) {
      setFavoriteData(JSON.parse(localStorage.getItem("favoriteDogArr")));
    } else {
      setFavoriteData(false);
    }
  }, []);
  console.log(favoriteData);
  return (
    <div className="container containerStyle">
      <div className="row center">
        {favoriteData ? (
          favoriteData.map((dog) => (
            <Card
              id={dog.id}
              buttonName="Remove Favorite"
              src={dog.url}
              key={dog.id}
              handler={handleRemoveFavorite}
            />
          ))
        ) : (
          <h2>Your favorites go here ...</h2>
        )}
      </div>
    </div>
  );
}

export default Favorite;
