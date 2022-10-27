import { Contador } from "./components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBásicos } from "./typescript/TiposBásicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a ts react</h1>
      <hr />
      {/* <TiposBásicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones /> */}
      <Contador />
    </div>
  );
};

export default App;
