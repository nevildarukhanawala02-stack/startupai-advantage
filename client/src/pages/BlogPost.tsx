import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { User, ArrowLeft, BookOpen, Share2 } from "lucide-react";

function getTypeLabel(type: string) {
  switch (type) {
    case "pillar": return "Pillar Article";
    case "deep-dive": return "Deep Dive";
    case "microblog": return "Quick Read";
    case "case-study": return "Case Study";
    case "roundup": return "Roundup";
    case "sub-pillar": return "Industry Deep Dive";
    case "infographic": return "Infographic";
    default: return "Article";
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "pillar": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
    case "deep-dive": return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
    case "microblog": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    case "case-study": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    case "roundup": return "bg-amber-500/20 text-amber-300 border-amber-500/30";
    case "sub-pillar": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case "infographic": return "bg-pink-500/20 text-pink-300 border-pink-500/30";
    default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
  }
}

/**
 * Renders the blog post body with proper paragraph formatting.
 * The body is stored as plain text with \n paragraph breaks.
 * Internal links are resolved to /blog/{slug} URLs.
 */
function renderBody(body: string) {
  // Split into paragraphs by single or double newline
  const paragraphs = body.split(/\n+/).filter(p => p.trim());

  return paragraphs.map((para, idx) => {
    const trimmed = para.trim();

    // Check if this looks like a section heading (short, no period at end, often bold-looking)
    const isHeading = trimmed.length < 120 && !trimmed.endsWith('.') && !trimmed.endsWith(',') && !trimmed.endsWith(':') && !trimmed.includes('. ') && trimmed.split(' ').length < 20 && idx > 0;
    
    // Check if it's a "Related in this series" or "Part of Manufacturing Week" line
    const isRelatedLine = trimmed.startsWith('Related in this series') || trimmed.startsWith('Part of Manufacturing Week');

    if (isRelatedLine) {
      return (
        <div key={idx} className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-700/50">
          <p className="text-cyan-300 font-medium text-sm leading-relaxed">
            {renderInlineLinks(trimmed)}
          </p>
        </div>
      );
    }

    if (isHeading) {
      return (
        <h2 key={idx} className="text-xl md:text-2xl lg:text-3xl font-bold text-white mt-8 md:mt-12 mb-4 md:mb-6 leading-tight">
          {trimmed}
        </h2>
      );
    }

    return (
      <p key={idx} className="text-white/90 text-base md:text-lg leading-[1.75] md:leading-[1.8] mb-5 md:mb-6">
        {renderInlineLinks(trimmed)}
      </p>
    );
  });
}

/**
 * Renders inline text, converting markdown-style links [text](url) and **bold** to JSX,
 * plus references to other posts into clickable links.
 */
function renderInlineLinks(text: string) {
  // First handle markdown links: [text](url)
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let hasMarkdownLinks = mdLinkRegex.test(text);
  if (hasMarkdownLinks) {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex2 = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = regex2.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
      }
      if (match[1]) {
        // Bold text
        parts.push(<strong key={`b-${match.index}`} className="font-bold text-white">{match[1]}</strong>);
      } else if (match[2] && match[3]) {
        // Markdown link
        parts.push(
          <Link key={`l-${match.index}`} href={match[3]} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors">
            {match[2]}
          </Link>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex)}</span>);
    }
    return <>{parts}</>;
  }

  // Handle **bold** without markdown links
  const boldRegex = /\*\*([^*]+)\*\*/g;
  if (boldRegex.test(text)) {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex3 = /\*\*([^*]+)\*\*/g;
    let match;
    while ((match = regex3.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>);
      }
      parts.push(<strong key={`b-${match.index}`} className="font-bold text-white">{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(<span key={`t-${lastIndex}`}>{text.slice(lastIndex)}</span>);
    }
    return <>{parts}</>;
  }

  const linkMap: Record<string, string> = {
    "The Factory Runs in Real Time. Why Doesn't Your Information?": "/blog/factory-runs-real-time-information",
    "The Factory Runs in Real Time": "/blog/factory-runs-real-time-information",
    "Your Month-End Close Is a Post-Mortem": "/blog/month-end-close-post-mortem",
    "Seven Systems, Zero Answers: The Manufacturing Data Trap": "/blog/seven-systems-zero-answers",
    "Seven Systems, Zero Answers": "/blog/seven-systems-zero-answers",
    "The Order You Didn't Win (And Never Knew Was There)": "/blog/order-you-didnt-win",
    "The Order You Didn't Win": "/blog/order-you-didnt-win",
    "What Is a CEO Intelligence System?": "/blog/what-is-ceo-intelligence-system",
    "What's the Difference Between an ERP and a Business Intelligence Layer?": "/blog/erp-vs-business-intelligence-layer",
    "How Can Manufacturers Consolidate Data from Tally, ERP, and Excel?": "/blog/consolidate-tally-erp-excel",
    "What Are Leading vs. Lagging Indicators in Manufacturing?": "/blog/leading-vs-lagging-indicators-manufacturing",
    "What Is a Cross-Functional Business Alert?": "/blog/cross-functional-business-alert",
    "Can AI Alert a CEO Before a Customer Churns?": "/blog/ai-alert-before-customer-churns",
    "How a Mumbai Manufacturer Caught ₹75 Lakhs Before It Slipped Away": "/blog/mumbai-manufacturer-75-lakhs-receivables",
    "The Reorder That Almost Didn't Happen": "/blog/reorder-that-almost-didnt-happen",
    "Manufacturing Week: What Every Plant-Floor CEO Should Take Away": "/blog/manufacturing-week-roundup",
  };

  // Fall through to title-based link map
  const titles = Object.keys(linkMap).sort((a, b) => b.length - a.length);
  const escapedTitles = titles.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTitles.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (linkMap[part]) {
      return (
        <Link key={i} href={linkMap[part]} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors">
          {part}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = trpc.blog.getBySlug.useQuery(
    { slug: params.slug || "" },
    { enabled: !!params.slug }
  );

  const { data: relatedPosts } = trpc.blog.related.useQuery(
    { slug: params.slug || "", series: post?.series ?? null },
    { enabled: !!post?.series && !!params.slug }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="flex-1 py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto animate-pulse space-y-6">
              <div className="h-8 bg-slate-700/50 rounded w-3/4" />
              <div className="h-4 bg-slate-700/50 rounded w-1/4" />
              <div className="aspect-[16/9] bg-slate-700/50 rounded-xl" />
              <div className="space-y-3">
                <div className="h-4 bg-slate-700/50 rounded" />
                <div className="h-4 bg-slate-700/50 rounded" />
                <div className="h-4 bg-slate-700/50 rounded w-5/6" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="flex-1 py-20 bg-gradient-to-b from-gray-950 to-gray-900 flex items-center justify-center">
          <div className="text-center px-4">
            <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-slate-600 mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Post not found</h2>
            <p className="text-slate-400 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero / Header Image */}
      {post.headerImageUrl && post.type !== "infographic" && (
        <section className="relative pt-16">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[400px] overflow-hidden">
            <img
              src={post.headerImageUrl}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className={`relative py-8 md:py-16 bg-gradient-to-b from-gray-950 to-gray-900 ${!post.headerImageUrl ? 'pt-24 md:pt-28' : ''}`}>
        <div className="container px-4">
          <article className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-6 md:mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Posts
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className={`inline-flex items-center px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold border ${getTypeColor(post.type)}`}>
                {getTypeLabel(post.type)}
              </span>
              {post.series && (
                <span className="text-xs text-slate-400 bg-slate-800/50 px-2.5 md:px-3 py-0.5 md:py-1 rounded-full border border-slate-700/50">
                  {post.series}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              {post.title}
            </h1>

            {/* Author & Share */}
            <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4 pb-6 md:pb-8 mb-8 md:mb-10 border-b border-slate-700/50">
              <div className="flex items-center gap-3 md:gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  {post.author}
                </span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4" /> Share
              </button>
            </div>

            {/* Infographic Image (portrait, displayed inline for infographic posts) */}
            {post.type === "infographic" && post.headerImageUrl && (
              <div className="mb-8 md:mb-10 rounded-xl overflow-hidden border border-slate-700/50 bg-white">
                <img
                  src={post.headerImageUrl}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Body */}
            <div className="blog-body overflow-hidden">
              {renderBody(post.body)}
            </div>

            {/* Related Articles */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-700/50">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6">More from {post.series}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all"
                    >
                      {related.headerImageUrl && (
                        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
                          <img
                            src={related.headerImageUrl}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border mb-2 ${getTypeColor(related.type)}`}>
                        {getTypeLabel(related.type)}
                      </span>
                      <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author card */}
            <div className="mt-12 md:mt-16 p-4 md:p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base md:text-lg">N</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">{post.author}</h4>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                    26 years building businesses. Now writes for the owners of mid-sized Indian companies who are tired of finding out too late.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-8 md:mt-10 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-colors font-medium text-sm md:text-base">
                <ArrowLeft className="w-4 h-4" /> Back to All Posts
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
