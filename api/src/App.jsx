import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setData(res.data.books))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {data.map((items) => {
        return (
          <div className="parent" key={items.id}>
            <h1>{items.title}</h1>
            <div className="main">
              <img src={items.imageLinks.thumbnail} alt="" />
              <p>{items.description}</p>
            </div>
            <div className="authors">
              {items.authors.map((ele, i) => {
                return <p key={i}>{ele}</p>;
              })}
            </div>
            <div className="line"></div>
          </div>
        );
      })}
    </>
  );
}

export default App;
