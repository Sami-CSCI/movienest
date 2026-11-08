const STORAGE_KEY = "react-favourites";

export function loadFavourites() {
  try {
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (savedText === null) {
      return [];
    }

    const parsedData = JSON.parse(savedText);

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData;
  } catch (error) {
    console.error("Unable to load favourites:", error);
    return [];
  }
}

export function saveFavourites(favourites) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favourites)
  );
}
