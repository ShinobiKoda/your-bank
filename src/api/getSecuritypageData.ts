export interface Protection{
  image: string
  title: string
  description: string
}

export interface SecuritypageData {
  protection: Protection[];
}

let cache: SecuritypageData | null = null;

export async function fetchSecuritypageData(): Promise<SecuritypageData> {
  if (cache) return cache;
  try {
    const res = await fetch("/data/securitypage.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`);
    const data = (await res.json()) as SecuritypageData;
    cache = data;
    return data;
  } catch (err) {
    console.error("Error fetching homepage data:", err);
    throw err;
  }
}

export function clearSecuritypageDataCache() {
  cache = null;
}
