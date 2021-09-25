import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

const url = "https://dog.ceo/api/breeds/list/all";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const getImagenes = raza => {
    fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
      .then(r => r.json())
      .then(result => {
        setImage(result);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {image && <img src={image.message} width={500} alt="" />}
      <ul>
        {data &&
          data.message &&
          Object.keys(data.message).map(item => (
            <li key={item}>
              <Link to={`/perrito/${item}`}>{item}</Link>
            </li>
          ))}
      </ul>
      {loading && <CircularProgress />}
    </div>
  );
};

export default Home;
