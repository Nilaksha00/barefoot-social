/**
 * Sample photography from Unsplash (free licence) so the draft reads like the
 * real thing. TODO(client): replace every entry with the client's own shoot,
 * e.g. `"/images/hero-bay.jpg"` in /public/images.
 */
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  bayPalms: unsplash("1558383737-0f1e3f701bde"),
  stiltPoles: unsplash("1643793416018-3eb27ecc1628"),
  surfers: unsplash("1742874220119-a42921338e65"),

  barDim: unsplash("1578911489158-334e5cd2a051"),
  citrusCocktail: unsplash("1618799805265-4f27cb61ede9"),

  riceAndCurry: unsplash("1742281095650-dd3c50c08772"),
  breakfast: unsplash("1742281095661-29de44440bb6"),

  roomWhite: unsplash("1582719478250-c89cae4dc85b"),
  roomGreenery: unsplash("1774280954999-9758f11f3d41"),
  roomFan: unsplash("1662841540530-2f04bb3291e8"),
} as const;
