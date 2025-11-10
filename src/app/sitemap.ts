import { getPosts } from "@/hooks/get-blogs";
import { Post } from "@/interface";
import { services } from "@/constants";

export default async function sitemap() {
  const baseUrl = "https://reframelabs.co/";

  // Get all posts from CMS
  const posts: Post[] = await getPosts();
  const blogPosts =
    posts?.map((post) => ({
      url: `${baseUrl}/blog/${post.slug?.current}`,
      lastModified: new Date(post.publishedAt).toISOString(),
    })) ?? [];

  // Define static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/pricing",
    "/work",
    "/blog",
    // Case Studies
    "/work/astrae",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Get service routes from constants
  const servicePages = services.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}
