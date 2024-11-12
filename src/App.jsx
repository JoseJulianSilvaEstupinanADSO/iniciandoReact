import "./App.css";
import { useCatImage } from "./hooks/useCatImg";
import { useCatFact } from "./hooks/useRefreshFact";
import { Otro } from "./component/Otro";

export function App() {
  // recurepara la cita
  const { fact, refreshFact } = useCatFact();
  //recuperar la imagen
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };
  return (
    <section>
      <p>Api Cat</p>
      <button onClick={handleClick}>Refrescar</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="imgan extraida de la api"></img>}
      {/* <Otro /> */}
    </section>
  );
}
