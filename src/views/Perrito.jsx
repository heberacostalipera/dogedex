import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Material
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Perrito = () => {
  const { breed } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getImagenes = () => {
    setLoading(true);
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(r => r.json())
      .then(result => {
        setImage(result);
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h1>has seleccionado: {breed}</h1>
      <div style={{ marginBottom: 10 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={getImagenes}
          style={{ marginRight: 10 }}
        >
          Obtener imagen al azar
        </Button>
        <Button color="primary" variant="contained" component={Link} to="/">
          volver
        </Button>
      </div>
      {loading && <CircularProgress />}
      {image && !loading && <img src={image.message} width={500} alt="" />}
    </div>
  );
};

export default Perrito;
