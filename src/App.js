import React, { useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";


// Styles
import "./App.css";
import BotonGrande from "./components/BotonGrande";

const url = "https://dog.ceo/api/breeds/list/all";

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 20,
    margin: theme.spacing(2, 0)
  }
}));

function App() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const getData = () => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  };

  const getImagenes = raza => {
    fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
      .then(r => r.json())
      .then(result => {
        setImage(result);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <BotonGrande
          disabled={loading || data}
          onClick={getData}
          className={classes.button}
          color="primary"
        >
          DESCARGAR
        </BotonGrande>
      </div>
      {image && <img src={image.message} width={500} alt="" />}
      <ul>
        {data &&
          data.message &&
          Object.keys(data.message).map(item => (
            <li key={item}>
              <BotonGrande onClick={() => getImagenes(item)}>{item}</BotonGrande>
            </li>
          ))}
      </ul>
      {loading && <div>cargando...</div>}
    </div>
  );
}

export default App;
