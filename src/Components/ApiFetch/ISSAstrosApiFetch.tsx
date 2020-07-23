export interface Astronaut {
  name: string;
  craft: string;
}

export interface AstronautsInSpace {
  people: Astronaut[];
  number: string;
}

const apiUrl: string = `http://api.open-notify.org/astros.json`;

export async function getHumansInSpace(): Promise<AstronautsInSpace> {
  const apiResponse = await fetch(apiUrl);
  return await apiResponse.json();
}
