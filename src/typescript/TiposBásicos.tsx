export const TiposBásicos = () => {
  let nombre: string = "gaston";

  const edad: number = 35;

  const estaActivo: boolean = true;

  const poderes: string[] = ["velocidad", "volar", "respirar"];

  return (
    <>
      <h3>tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? "activo" : "no activo"}
      <br />
      {poderes.join(', ')}
    </>
  );
};
