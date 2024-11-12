export const imgCat = async (firstWord) => {
  const response = await fetch(
        `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    );
    const { url } = response;
    return url;
};
