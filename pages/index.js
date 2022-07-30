import { useState, useEffect } from "react";
import Card from "../components/card/card";

export default function Home() {
  const idGen = () => {
    return Math.round(new Date().valueOf().toString() * Math.random());
  };

  const handleFetch = () => {
    const promises = helperArr.map(() => fetch("https://random.dog/woof.json"));

    Promise.all(promises)
      .then(async (res) => {
        return Promise.all(res.map(async (data) => await data.json()));
      })
      .then((res) => setData(res));
  };

  const handleAddFavorite = (e) => {
    const targetImgUrl = e.target
      .closest(".card")
      .firstChild.getAttribute("src");
    const favoriteObj = {
      id: idGen(),
      url: targetImgUrl,
    };
    if (localStorage.getItem("favoriteDogArr")) {
      const lsArr = JSON.parse(localStorage.getItem("favoriteDogArr"));
      lsArr.push(favoriteObj);
      localStorage.setItem("favoriteDogArr", JSON.stringify(lsArr));
      lsArr = [];
    } else {
      const newArr = [favoriteObj];
      localStorage.setItem("favoriteDogArr", JSON.stringify(newArr));
    }
  };

  const helperArr = [1, 2, 3, 4, 5, 6];

  const [data, setData] = useState();

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="container containerStyle">
      <div className="row center">
        {data ? (
          data.map((dog) => (
            <Card
              buttonName={"Add to Favorites"}
              src={dog.url}
              key={idGen()}
              handler={handleAddFavorite}
            />
          ))
        ) : (
          <h2>Loading ...</h2>
        )}
        <div className="center">
          <button className="btn btn-info btn-r" onClick={handleFetch}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
