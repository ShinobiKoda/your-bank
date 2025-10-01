export type CurrencyList = string[];

export interface UseCaseItem {
  image: string;
  title: string;
}

export interface ProductItem {
  image: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureTabDef {
  key: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface HomepageData {
  supportedCurrencies: CurrencyList;
  useCases: {
    individuals: UseCaseItem[];
    business: UseCaseItem[];
  };
  products: {
    individuals: ProductItem[];
    business: ProductItem[];
  };
  stats: {
    individuals: StatItem[];
    business: StatItem[];
  };
  featureTabs: FeatureTabDef[];
  features: Record<string, FeatureItem[]>;
}

// Simple in-memory cache to avoid repeated network fetches
let cache: HomepageData | null = null;

export async function fetchHomepageData(): Promise<HomepageData> {
  if (cache) return cache;
  try {
    const res = await fetch("/data.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`);
    const data = (await res.json()) as HomepageData;
    cache = data;
    return data;
  } catch (err) {
    console.error("Error fetching homepage data:", err);
    throw err;
  }
}

export function clearHomepageDataCache() {
  cache = null;
}
