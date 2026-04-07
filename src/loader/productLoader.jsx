import { getLogements } from "../scripts/logementsDatas.js";

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
}

export async function productLoader({ params }) {
  const logements = await getLogements();

  const logement = logements.find(l => l.id === params.id);

  if (!logement) {
    throw new Response("Not Found", { status: 404 });
  }

  await Promise.all(
    logement.pictures.map(src => preloadImage(src))
  );

  return logement;
}