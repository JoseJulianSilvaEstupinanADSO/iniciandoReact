const endPointUrlRandomFact = `https://catfact.ninja/fact`;

export const getRandomFact = async () => {
  const res = await fetch(endPointUrlRandomFact);
    const data = await res.json();
    const { fact } = data;
    return fact;
};
