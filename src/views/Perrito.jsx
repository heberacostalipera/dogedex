import React from "react";
import { useParams, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

const Perrito = () => {
  const { breed } = useParams();

  console.log("cargo detalle");

  return (
    <div>
      <h1>has seleccionado: {breed}</h1>
      <Button color="primary" variant="contained" component={Link} to="/">
        volver
      </Button>
    </div>
  );
};

export default Perrito;
