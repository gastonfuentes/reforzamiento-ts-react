import { useState } from "react";

export const Contador = () => {
  const [valor, seValor] = useState(1);

  const acumular = (numero: number) => {
    seValor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        - 1
      </button>
    </>
  );
};
