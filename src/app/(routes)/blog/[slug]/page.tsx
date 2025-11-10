import NewsletterCard from "@/components/common/newsletter-card";
import SecondaryButton from "@/components/common/secondary-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getPost, getPosts } from "@/hooks/get-blogs";
import { Post } from "@/interface";
import { urlFor } from "@/sanity/lib/image";
import { Star } from "lucide-react";
import { PortableText, SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await props.params;
    const response: Post = await getPost(slug);
    const imageUrl = urlFor(response?.mainImage?.asset?._ref).url();
    const baseUrl = "https://reframelabs.co/";
    const fullUrl = `${baseUrl}/blog/${slug}`;

    if (!response) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };
    }

    return {
      title: `${response?.title} | Reframe Labs`,
      description: `${response?.excerpt}`,
      openGraph: {
        title: response?.title,
        description: response?.excerpt,
        images: [imageUrl],
        siteName: "Reframe Labs",
        url: `${fullUrl}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${response?.title} | Reframe Labs`,
        description: response?.excerpt,
        images: [imageUrl],
        creator: "@bhyte_software",
      },
      icons: "/favicon.ico",
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  try {
    const response: Post[] = await getPosts();

    if (response.length === 0) return [];

    // Map each post to a params object with the slug
    return response.map((post) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const revalidate = 60;

interface Params {
  params: Promise<{
    slug: string;
  }>;
}
const BlogDetailPage = async (props: Params) => {
  const { slug } = await props.params;
  const post: Post = await getPost(slug);
  // Get all posts to find similar ones
  const allPosts: Post[] = await getPosts();

  // Find posts with similar tags to the current post
  const otherPosts = allPosts.filter(p => p.slug.current !== slug); // Exclude current post

  const similarPosts = otherPosts.length > 0
    ? otherPosts
      .sort((a, b) => {
        // Count matching tags between current post and each other post
        const currentPostTagIds = post.tags?.map(tag => tag._id) || [];
        const aMatchingTags = a.tags?.filter(tag => currentPostTagIds.includes(tag._id))?.length || 0;
        const bMatchingTags = b.tags?.filter(tag => currentPostTagIds.includes(tag._id))?.length || 0;

        // Sort by number of matching tags (descending)
        return bMatchingTags - aMatchingTags;
      })
      .slice(0, 6)
    : [];

  const imageUrl = urlFor(post?.mainImage?.asset?._ref).url();
  const altText = post?.mainImage?.alt || "Blog image";
  const authorImageUrl = post?.author?.image ? urlFor(post.author.image).width(80).height(80).url() : null;

  return (
    <section className="container mx-auto px-4 md:px-0 pt-40 md:pt-48 relative">
      <div className=" hidden absolute inset-0 px-10 h-full mx-auto container w-full md:flex items-center justify-between z-1">
        <Separator orientation="vertical" />
        <Separator orientation="vertical" />
      </div>

      <div className=" w-full flex flex-col items-center max-w-6xl mx-auto px-4 md:px-0 relative z-20">
        <div className=" cursor-pointer rounded-full flex items-center px-2.5 py-1 bg-white border hover:border-primary hover:bg-white hover:shadow-xs">
          <Image width={16} height={16} src="/assets/glitter.png" alt="Glitter" />
          <div className=" h-4 ml-2">
            <Separator orientation="vertical" />
          </div>
          <span className=" ml-2 text-sm md:text-base">Blog Details</span>
        </div>
        <h2 className=" max-w-2xl text-4xl md:text-6xl tracking-tighter text-center text-balance  font-montserrat mt-2 md:mt-4 font-semibold">{post?.title}</h2>
        <div className="inline-flex items-center gap-2 text-primary mb-2 mt-4">
          <span className="text-sm md:text-[15px]">{post?.categories?.[0]?.title || post?.tags?.[0]?.name || 'Article'}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
          <span className="text-sm md:text-[15px]">~8 min read</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
          <span className="text-sm md:text-[15px]">{new Date(post?.publishedAt).toDateString()}</span>
        </div>

        <div className=" inline-flex items-center gap-2 mt-4">
          <Image width={28} height={28} src={authorImageUrl ?? "/assets/default-avatar.png"} className=" rounded-full overflow-clip" alt="Arete" />
          <span className="text-sm md:text-[15px] text-foreground">Abiola Braimah</span>
        </div>
      </div>


      <div className=" mt-12 border w-full max-w-6xl mx-auto h-[18rem] md:h-auto md:aspect-video z-20 relative overflow-clip rounded-xl mb-14">
        <Image
          fill
          quality={100}
          src={imageUrl}
          className=" object-cover rounded-xl"
          alt={altText}
        />
      </div>

      <div className="max-w-6xl mx-auto mb-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[70%]">
            <div className="prose prose-lg text-justify prose-mb-2 prose-a:text-primary prose-blockquote:text-foreground/80 prose-lead:text-foreground prose-li:marker:text-foreground prose-ol:text-foreground prose-ul:text-foreground prose-code:bg-secondary prose-code:text-foreground prose-p:text-sm prose-p:md:text-[15px] prose-p:text-foreground/80 prose-p:font-normal prose-li:text-sm prose-li:md:text-[15px] prose-li:text-foreground prose-strong:text-foreground prose-strong:font-inter prose-strong:font-medium prose-strong:text-lg prose-strong:tracking-tight prose-headings:text-foreground">
              <PortableText
                value={post?.body}
                components={portableTextComponents}
              />
            </div>
          </div>

          <div className="w-full lg:w-[30%]">
            <div className="sticky top-32 flex flex-col-reverse md:flex-col gap-3 md:gap-4">
              <NewsletterCard />

              <div className=" bg-primary rounded-lg p-4 md:p-6">
                <div className=" rounded-full w-fit py-1 px-2.5 border flex items-center gap-1 border-white/50 text-white">
                  <div className=" relative h-3 w-12">
                    <Image fill src="/assets/clutch.png" alt="Clutch" className=" object-contain" />
                  </div>
                  <div className=" inline-flex items-center">
                    <Star fill="white" className=" size-3" />
                    <Star fill="white" className=" size-3" />
                    <Star fill="white" className=" size-3" />
                    <Star fill="white" className=" size-3" />
                    <Star fill="white" className=" size-3" />
                  </div>
                  <p className=" text-sm">5.0</p>
                </div>

                <h4 className="mt-2.5 font-semibold tracking-tight leading-tight font-montserrat text-xl md:text-2xl text-balance text-white">
                  Discover the right digital agency for your business success
                </h4>
                <p className="text-sm md:text-[15px] text-white mt-2 mb-6 opacity-80">
                  Get a team of skilled professionals dedicated to your project’s success. Explore our services and see how we can help you achieve your goals.
                </p>
                <Link href="/contact" className="w-full">
                  <SecondaryButton fullWidth text="Book A Call" />
                </Link>
              </div>

              <div className="flex flex-col w-full items-center md:items-start mt-4 mb-12 md:mb-0">
                <span>Share this blog</span>
                <div className=" inline-flex items-center gap-2.5 mt-3">
                  <Button size="icon-lg" variant="secondary">
                    <FaFacebook className=" size-4 md:size-5" />
                  </Button>
                  <Button size="icon-lg" variant="secondary">
                    <FaXTwitter className=" size-4 md:size-5" />
                  </Button>
                  <Button size="icon-lg" variant="secondary">
                    <FaLinkedin className=" size-4 md:size-5" />
                  </Button>
                  <Button size="icon-lg" variant="secondary">
                    <FaInstagram className=" size-4 md:size-5" />
                  </Button>
                  <Button size="icon-lg" variant="secondary">
                    <FaThreads className=" size-4 md:size-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {similarPosts.length > 0 && (
        <div className="mt-20 md:mt-40 pb-24 md:pb-40 max-w-6xl mx-auto relative z-20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-montserrat font-semibold text-3xl md:text-4xl tracking-tighter text-center md:text-start capitalize">Related Blogs</h4>
            <Link className=" mb-3 px-2 hidden md:block" href="/blog">
              <SecondaryButton text="Browse All Blogs" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {similarPosts.map((similarPost) => (
              <Link
                key={similarPost.slug.current}
                className="group hover:shadow bg-white rounded-lg md:rounded-xl border border-input/50"
                href={`/blog/${similarPost.slug.current}`}>
                <div className="group relative">
                  <div className="w-full h-[16rem] relative overflow-clip rounded-xl border border-foreground/10">
                    <Image
                      src={urlFor(similarPost?.mainImage?.asset?._ref).url()}
                      alt={similarPost?.mainImage?.alt || "Blog image"}
                      fill
                      quality={100}
                      className="object-cover rounded-lg group-hover:scale-110 transition-all ease-in-out duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className=" px-4 md:pt-4 pb-4 md:pb-6">
                    <div className="inline-flex items-center gap-2 text-foreground/70 mb-2 mt-4">
                      <span className="text-sm md:text-[15px]">{post?.categories?.[0]?.title || post?.tags?.[0]?.name || 'Article'}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                      <span className="text-sm md:text-[15px]">~8 min read</span>
                    </div>
                    <h3 className="text-foreground font-medium tracking-tight mb-2 text-xl text-balance">{post?.title}</h3>
                    <div className="inline-flex items-center w-full justify-between text-foreground/70">
                      <div className="inline-flex items-center gap-2 text-foreground/70">
                        {authorImageUrl && (
                          <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image src={authorImageUrl} alt={post?.author?.name || 'Author'} fill className="object-cover" />
                          </div>
                        )}
                        <span className="text-sm md:text-[15px]">{post?.author?.name || 'Reframe Labs'}</span>
                      </div>
                      <span className="text-sm md:text-[15px]">{post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

interface PortableTextImageProps {
  value: SanityImageAssetDocument;
}

const portableTextComponents = {
  types: {
    image: ({ value }: PortableTextImageProps) => (
      <div className=" w-full h-[18rem] md:h-[32rem] relative mb-20">
        <Image
          fill
          className=" object-cover border border-foreground/10 rounded-xl"
          src={urlFor(value).url()}
          quality={100}
          alt="Post"
        />
      </div>
    ),
  },
};

export default BlogDetailPage;
