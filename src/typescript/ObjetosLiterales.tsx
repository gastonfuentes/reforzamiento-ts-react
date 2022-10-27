interface Persona {
  nombreCompleto: string;
  edad: number;
  dirección: Dirección;
}

interface Dirección {
  país: string;
  provincia: string;
  códigoPostal: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Gaston",
    edad: 38,
    dirección: {
      país: "Argentina",
      provincia: "La Rioja",
      códigoPostal: 5300,
    },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
