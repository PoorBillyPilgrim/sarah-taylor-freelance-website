export const getSrc = (path: string): string => {
  const base =
    process.env.NEXT_PUBLIC_SITE_ENV === "staging"
      ? "/sarah-taylor-freelance-website"
      : "";
  return base + path;
};
