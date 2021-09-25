import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Material UI
import CircularProgress from "@material-ui/core/CircularProgress";
import BotonGrande from "../components/BotonGrande";

const url = "https://dog.ceo/api/breeds/list/all";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <ul>
        {data &&
          data.message &&
          Object.keys(data.message).map(item => (
            <li key={item}>
              <BotonGrande component={Link} to={`/perrito/${item}`}>
                {item}
              </BotonGrande>
            </li>
          ))}
      </ul>
      {loading && <CircularProgress />}
    </div>
  );
};

export default Home;
