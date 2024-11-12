import { useCatImage } from "../hooks/useCatImg"
import { useCatFact } from "../hooks/useRefreshFact";

export function Otro () {
    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({fact})

    return (
        <>
        {imageUrl && <img src={imageUrl} />}
        </>
    )
}