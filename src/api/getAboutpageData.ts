export interface PressRealease {
  image: string
  title: string
  location: string
  date: string
  description: string
}

export interface AboutpageData {
  press_releases: PressRealease[]
  
}

let cache: AboutpageData | null = null;

export async function fetchAboutpageData(): Promise<AboutpageData> {
  if (cache) return cache;
  try {
    const res = await fetch("/data/aboutpage.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`);
    const data = (await res.json()) as AboutpageData;
    cache = data;
    return data;
  } catch (err) {
    console.error("Error fetching homepage data:", err);
    throw err;
  }
}

export function clearAboutpageDataCache() {
  cache = null;
}