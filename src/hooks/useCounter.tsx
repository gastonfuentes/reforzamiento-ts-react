import { useState } from "react";

export const useCounter = ( inicial:number = 10 ) => {
  const [valor, seValor] = useState(inicial);

  const acumular = (numero: number) => {
    seValor(valor + numero);
  };

  return {
    valor,
    acumular,
  };
};
