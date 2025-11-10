import BlogCard from "@/components/common/blog-card";
import BlogCategories from "@/components/common/blog-categories";
import { Separator } from "@/components/ui/separator";
import { getPosts } from "@/hooks/get-blogs";
import { Post } from "@/interface";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;

const baseUrl = "https://reframelabs.co/";
const wwwBaseUrl = "https://www.reframelabs.co/";

export const metadata: Metadata = {
  metadataBase: new URL(`${wwwBaseUrl}`) || new URL(`${baseUrl}`),
  title: "Reframe Labs Blog | Web Design & Development Insights",
  description:
    "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Reframe Labs.",
  alternates: {
    canonical: `${wwwBaseUrl}/blog`,
  },
  openGraph: {
    title: "Reframe Labs Blog | Web Design & Development Insights",
    siteName: "Reframe Labs",
    description:
      "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Reframe Labs.",
    images: ["/og/blog.png"],
    url: `${wwwBaseUrl}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Reframe Labs Blog | Web Design & Development Insights",
    description:
      "Discover the latest web design trends, tutorials, and insights on Reframe Labs's blog. From React and Next.js to Tailwind CSS and Framer Motion, we've got you covered.",
    images: ["/og/blog.png"],
    creator: "@bhyte_software",
  },
  icons: "/favicon.ico",
};

const Blogs = async () => {
  const posts: Post[] = await getPosts();

  return (
    <section className="w-full min-h-screen pt-40 md:pt-48 pb-32 md:pb-48 relative">

      <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between z-1">
        <Separator orientation="vertical" />
        <Separator orientation="vertical" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 relative z-20">
        <div className=" flex flex-col items-center text-center">
          <div className=" cursor-pointer rounded-full w-fit flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
            <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
            <div className=" h-4 ml-2">
              <Separator orientation="vertical" />
            </div>
            <span className=" ml-2 text-sm md:text-base">Reframe Labs Blog</span>
          </div>

          <h2 className="mt-2 font-montserrat font-semibold text-4xl md:text-6xl tracking-tighter w-full capitalize">
            Blogs & Insights  for <br /> your digital growth
          </h2>
          <p className="opacity-70 max-w-prose mx-auto text-center text-balance mt-2 text-sm md:text-base">
            Discover our resources for expert tips, tutorials, and insights on launching your MVP, design, and SEO to boost your digital projects and startup.
          </p>

        </div>

        <div className="mb-10 mt-20">
          <BlogCategories />
        </div>

        <div>
          {posts?.length > 0 && (
            <div>
              <BlogCard post={posts[0]} index={0} />
            </div>
          )}

          {posts?.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mt-4 md:mt-10">
              {posts?.slice(1).map((post, idx) => (
                <BlogCard
                  key={post?._id || `post-${idx + 1}`}
                  post={post}
                  index={idx + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
