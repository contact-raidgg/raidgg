export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      // Keep acronyms uppercase
      const acronyms = ["bgmi", "cod", "fps", "pc", "uc", "cp", "vct", "hsr"];
      if (acronyms.includes(word.toLowerCase())) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getPostUrl(post: {
  category: string;
  subcategory?: string;
  slug: string;
}): string {
  if (post.subcategory) {
    return `/${post.category}/${post.subcategory}/${post.slug}/`;
  }
  return `/${post.category}/${post.slug}/`;
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + "…";
}
