/** Verified Unsplash photo IDs (return HTTP 200) for reliable next/image loading. */
export const UNSPLASH = {
  skincare: "photo-1556228720-195a672e8a03",
  serum: "photo-1571781926291-c477ebfd024b",
  hair: "photo-1522337360788-8b13dee7a37e",
  hairSalon: "photo-1560066984-138dadb4c035",
  oral: "photo-1556228578-0d85b1a4d571",
  mensGrooming: "photo-1616394584738-fc6e612e71b9",
  kids: "photo-1584515933487-779824d29309",
  baby: "photo-1556909114-f6e7ad7d3136",
  herbal: "photo-1515372039744-b8f02a3ae446",
  blogLab: "photo-1582719478250-c89cae4dc85b",
  blogFactory: "photo-1581091226825-a6a2a5aee158",
  blogBrand: "photo-1596462502278-27bfdc403348",
} as const;

export function unsplashUrl(id: string, w = 800, h = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const instagramFeed = [
  UNSPLASH.skincare,
  UNSPLASH.serum,
  UNSPLASH.hair,
  UNSPLASH.herbal,
  UNSPLASH.blogFactory,
  UNSPLASH.mensGrooming,
] as const;
