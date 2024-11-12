import { useEffect, useState } from "react";
import { imgCat } from "../services/imgCat";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 3).join(" ");
    imgCat(firstWord).then((url) => setImageUrl(url));
  }, [fact]);

  return { imageUrl };
}
