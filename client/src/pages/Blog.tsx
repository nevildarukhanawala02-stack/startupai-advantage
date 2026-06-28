import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { User, ArrowRight, BookOpen, Layers, ChevronRight } from "lucide-react";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";

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

function getSeriesColor(series: string) {
  if (series === "Manufacturing Week") return "border-cyan-500/30 bg-cyan-500/5";
  if (series === "Auto Components Week") return "border-blue-500/30 bg-blue-500/5";
  if (series === "CEO Intel Infographic Series") return "border-pink-500/30 bg-pink-500/5";
  return "border-slate-700/50 bg-slate-800/30";
}

/**
 * Lazy-loaded image component that only loads when visible in viewport
 */
function LazyImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}

export default function Blog() {
  const { data: posts, isLoading } = trpc.blog.list.useQuery();
  const [expandedSeries, setExpandedSeries] = useState<string[]>(["Manufacturing Week"]);
  // Track which sub-series are expanded (lazy load children on expand)
  const [expandedSubSeries, setExpandedSubSeries] = useState<string[]>([]);

  // Organize posts into hierarchy
  const hierarchy = useMemo(() => {
    if (!posts) return null;

    // Top-level series (no parentSeries)
    const topLevel = posts.filter(p => !p.parentSeries);
    // Sub-series (have parentSeries)
    const subSeries = posts.filter(p => p.parentSeries);

    // Group top-level by series
    const seriesMap = new Map<string, typeof posts>();
    topLevel.forEach(post => {
      const key = post.series || "General";
      if (!seriesMap.has(key)) seriesMap.set(key, []);
      seriesMap.get(key)!.push(post);
    });

    // Group sub-series by their series name
    const subSeriesMap = new Map<string, typeof posts>();
    subSeries.forEach(post => {
      const key = post.series || "General";
      if (!subSeriesMap.has(key)) subSeriesMap.set(key, []);
      subSeriesMap.get(key)!.push(post);
    });

    // Map sub-series to their parent
    const parentChildMap = new Map<string, string[]>();
    subSeries.forEach(post => {
      if (post.parentSeries) {
        if (!parentChildMap.has(post.parentSeries)) parentChildMap.set(post.parentSeries, []);
        const childSeries = post.series || "General";
        if (!parentChildMap.get(post.parentSeries)!.includes(childSeries)) {
          parentChildMap.get(post.parentSeries)!.push(childSeries);
        }
      }
    });

    return { seriesMap, subSeriesMap, parentChildMap };
  }, [posts]);

  const toggleSeries = useCallback((series: string) => {
    setExpandedSeries(prev =>
      prev.includes(series) ? prev.filter(s => s !== series) : [...prev, series]
    );
  }, []);

  const toggleSubSeries = useCallback((series: string) => {
    setExpandedSubSeries(prev =>
      prev.includes(series) ? prev.filter(s => s !== series) : [...prev, series]
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1419 50%, #0a1628 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-cyan-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-blue-600 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10 py-12 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 md:mb-6">
              <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-medium text-cyan-300">CEO Intel Blog</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Insights for the Business Owner Who Wants to Know — Before It's Too Late
            </h1>
            <p className="text-base md:text-xl text-white/80 leading-relaxed px-2">
              Weekly intelligence briefings on how Indian mid-market CEOs can turn scattered data into decisive action.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts - Hierarchical View */}
      <section className="relative py-10 md:py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden animate-pulse">
                  <div className="h-40 md:h-48 bg-slate-700/50" />
                  <div className="p-4 md:p-6 space-y-3">
                    <div className="h-4 bg-slate-700/50 rounded w-20" />
                    <div className="h-6 bg-slate-700/50 rounded w-full" />
                    <div className="h-4 bg-slate-700/50 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : hierarchy ? (
            <div className="space-y-8 md:space-y-12">
              {/* Render each top-level series */}
              {Array.from(hierarchy.seriesMap.entries()).map(([seriesName, seriesPosts]) => {
                const isExpanded = expandedSeries.includes(seriesName);
                const childSeriesNames = hierarchy.parentChildMap.get(seriesName) || [];
                const pillarPost = seriesPosts.find(p => p.type === "pillar");
                const otherPosts = seriesPosts.filter(p => p.type !== "pillar");

                return (
                  <div key={seriesName} className={`rounded-xl md:rounded-2xl border p-4 md:p-8 ${getSeriesColor(seriesName)}`}>
                    {/* Series Header */}
                    <div
                      className="flex items-center justify-between cursor-pointer mb-4 md:mb-6"
                      onClick={() => toggleSeries(seriesName)}
                    >
                      <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                        <Layers className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" />
                        <h2 className="text-lg md:text-2xl font-bold text-white">{seriesName}</h2>
                        <span className="text-xs md:text-sm text-slate-400">
                          {seriesPosts.length} articles
                          {childSeriesNames.length > 0 && ` + ${childSeriesNames.length} sub-series`}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </div>

                    {isExpanded && (
                      <div className="space-y-6 md:space-y-8">
                        {/* Pillar Post (Featured) */}
                        {pillarPost && (
                          <Link href={`/blog/${pillarPost.slug}`}>
                            <article className="group relative rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                {pillarPost.headerImageUrl && (
                                  <div className="relative aspect-[16/9] md:aspect-auto md:h-full overflow-hidden">
                                    <LazyImage
                                      src={pillarPost.headerImageUrl}
                                      alt={pillarPost.title}
                                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-slate-900/80" />
                                  </div>
                                )}
                                <div className="p-5 md:p-8 flex flex-col justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                                  <div className="flex items-center gap-3 mb-3">
                                    <span className={`inline-flex items-center px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold border ${getTypeColor(pillarPost.type)}`}>
                                      {getTypeLabel(pillarPost.type)}
                                    </span>
                                  </div>
                                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-300 transition-colors leading-tight">
                                    {pillarPost.title}
                                  </h3>
                                  <p className="text-white/70 mb-3 md:mb-4 line-clamp-3 leading-relaxed text-sm">
                                    {pillarPost.excerpt}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5 text-xs md:text-sm text-slate-400">
                                      <User className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                      {pillarPost.author}
                                    </span>
                                    <span className="flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                                      Read <ArrowRight className="w-4 h-4" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </Link>
                        )}

                        {/* Other posts in this series */}
                        {otherPosts.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {otherPosts.map((post) => (
                              <Link key={post.id} href={`/blog/${post.slug}`}>
                                <article className="group rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer h-full flex flex-col">
                                  {post.headerImageUrl && (
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                      <LazyImage
                                        src={post.headerImageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                      />
                                    </div>
                                  )}
                                  <div className="p-4 md:p-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className={`inline-flex items-center px-2 md:px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getTypeColor(post.type)}`}>
                                        {getTypeLabel(post.type)}
                                      </span>
                                    </div>
                                    <h4 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                                      {post.title}
                                    </h4>
                                    <p className="text-white/60 text-xs md:text-sm mb-3 line-clamp-2 flex-1">
                                      {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-end mt-auto pt-3 border-t border-slate-700/50">
                                      <span className="flex items-center gap-1 text-cyan-400 text-xs font-medium group-hover:gap-2 transition-all">
                                        Read <ArrowRight className="w-3.5 h-3.5" />
                                      </span>
                                    </div>
                                  </div>
                                </article>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Sub-series sections - collapsed by default for lazy loading */}
                        {childSeriesNames.map(childName => {
                          const childPosts = hierarchy.subSeriesMap.get(childName) || [];
                          const isChildExpanded = expandedSubSeries.includes(childName);

                          return (
                            <div key={childName} className="ml-2 md:ml-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 md:p-6">
                              <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleSubSeries(childName)}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-1 h-5 md:h-6 bg-blue-500/50 rounded-full flex-shrink-0" />
                                  <h3 className="text-base md:text-lg font-bold text-white">{childName}</h3>
                                  <span className="text-xs text-slate-400 ml-1 md:ml-2">{childPosts.length} articles</span>
                                </div>
                                <ChevronRight
                                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${isChildExpanded ? "rotate-90" : ""}`}
                                />
                              </div>

                              {isChildExpanded && (
                                <SubSeriesContent posts={childPosts} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No posts yet</h3>
              <p className="text-slate-400">Check back soon for new insights.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

/**
 * Sub-series content rendered only when expanded (lazy loaded)
 */
function SubSeriesContent({ posts }: { posts: Array<{ id: number; title: string; slug: string; excerpt: string | null; type: string; author: string; headerImageUrl: string | null; series: string | null; parentSeries: string | null; brandPillar: string | null; publishOrder: number | null; publishedAt: number }> }) {
  const childPillar = posts.find(p => p.type === "sub-pillar");
  const childOthers = posts.filter(p => p.type !== "sub-pillar");

  return (
    <div className="mt-4 md:mt-5 space-y-4 md:space-y-5">
      {/* Sub-pillar featured */}
      {childPillar && (
        <Link href={`/blog/${childPillar.slug}`}>
          <article className="group rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">
              {childPillar.headerImageUrl && (
                <div className="relative aspect-[16/9] md:aspect-auto md:h-full overflow-hidden">
                  <LazyImage
                    src={childPillar.headerImageUrl}
                    alt={childPillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-4 md:p-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center px-2 md:px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getTypeColor(childPillar.type)}`}>
                    {getTypeLabel(childPillar.type)}
                  </span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight">
                  {childPillar.title}
                </h4>
                <p className="text-white/60 text-xs md:text-sm line-clamp-2">
                  {childPillar.excerpt}
                </p>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* Sub-series other posts */}
      {childOthers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {childOthers.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group rounded-lg overflow-hidden border border-slate-700/50 hover:border-blue-500/30 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer h-full flex flex-col">
                {post.headerImageUrl && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <LazyImage
                      src={post.headerImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border mb-2 w-fit ${getTypeColor(post.type)}`}>
                    {getTypeLabel(post.type)}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors line-clamp-2 normal-case leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-white/50 text-xs line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-end mt-auto pt-2">
                    <span className="flex items-center gap-1 text-blue-400 text-xs font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
