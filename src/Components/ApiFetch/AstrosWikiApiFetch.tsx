export interface AstroImage {
  imageUrl: Promise<AstroImage>;
}

export async function getAstrosImage(
  nameInput: string | null
): Promise<AstroImage> {
  const apiUrl: string = `http://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${nameInput}`;
  const apiResponse = await fetch(apiUrl);
  const jsonResponse = await apiResponse.json();
  return jsonResponse;
}
