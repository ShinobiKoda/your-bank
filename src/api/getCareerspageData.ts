export interface  Benefit{
  image: string;
  title: string;
  description: string
}

export interface Job_opening{
  title: string
  location: string
  department: string
  description: string
  requirements: string[];
}

export interface CareerpageData {
  benefits: Benefit[]
  job_openings: Job_opening[]
}

let cache: CareerpageData | null = null;

export async function fetchCareerpageData(): Promise<CareerpageData> {
  if (cache) return cache;
  try {
    const res = await fetch("/data/careerspage.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`);
    const data = (await res.json()) as CareerpageData;
    cache = data;
    return data;
  } catch (err) {
    console.error("Error fetching homepage data:", err);
    throw err;
  }
}

export function clearCareerpageDataCache() {
  cache = null;
}