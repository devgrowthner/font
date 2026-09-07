import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../../components/Footer';
import { blogList } from '../../constants/blogData';

const PAGE_SIZE = 9;

const paginationBtnClass =
  'inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-lg text-sm font-semibold transition-colors border';
const paginationActiveClass =
  ' border-[#719334] bg-[#719334] text-white shadow-sm';
const paginationInactiveClass =
  ' border-gray-200 bg-white text-foreground hover:border-[#719334]/50 hover:bg-[#719334]/5';
const paginationDisabledClass =
  ' border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed pointer-events-none';

function BlogsContent({ page }) {
  const rawPage = Array.isArray(page) ? page[0] : page;
  const parsedPage = parseInt(rawPage || '1', 10);
  const pageFromUrl = Number.isFinite(parsedPage) && parsedPage >= 1 ? parsedPage : 1;

  const totalPages = Math.max(1, Math.ceil((blogList?.length || 0) / PAGE_SIZE));
  const currentPage = Math.min(pageFromUrl, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedPosts = blogList?.slice(start, start + PAGE_SIZE) || [];

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/aiautomation/mainblog.webp"
            alt="AI Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#f0fdf4]/40 via-[#fefdfb]/30 to-[#ecfdf5]/40"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_20%,rgba(122,130,80,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_80%,rgba(122,130,80,0.03),transparent_50%)]"></div>
        <div
          className="absolute top-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl hidden sm:block"
          style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)' }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl hidden sm:block"
          style={{ backgroundColor: 'rgba(113, 147, 52, 0.08)', animationDelay: '2s' }}
        ></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 font-medium text-sm text-white sm:text-base group hover:text-brand-green"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          <div
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-6 leading-tight">
              AI Insights &{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #719334, #719334)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover how AI can transform your business with expert analysis, automation strategies, and proven
              implementation approaches
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fefdfb] via-[#fff7ed] to-[#fef3c7]/30">
        <div className="container mx-auto max-w-7xl">
          {!blogList || blogList.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-medium">No blog posts available at the moment.</p>
              <p className="text-sm text-muted-foreground mt-2">Check back soon for new content!</p>
            </div>
          ) : (
            <>
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginatedPosts.map((post) => (
                  <Link
                    key={`${currentPage}-${post.id}`}
                    href={`/blogs/${post.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm"
                          style={{ color: '#719334' }}
                        >
                          Featured Post
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-heading font-bold text-white mb-2 line-clamp-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                          {post.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-white/90">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-base text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                      <div
                        className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                        style={{ color: '#719334' }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 ? (
                <nav
                  className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                  aria-label="Blog list pagination"
                >
                  {currentPage === 1 ? (
                    <span className={`${paginationBtnClass} ${paginationDisabledClass}`} aria-disabled="true">
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </span>
                  ) : (
                    <Link
                      href={currentPage === 2 ? '/blogs' : `/blogs?page=${currentPage - 1}`}
                      scroll
                      className={`${paginationBtnClass} ${paginationInactiveClass}`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Link>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <Link
                        key={p}
                        href={p === 1 ? '/blogs' : `/blogs?page=${p}`}
                        scroll
                        className={`${paginationBtnClass} min-w-11 px-3.5 ${
                          p === currentPage ? paginationActiveClass : paginationInactiveClass
                        }`}
                        aria-current={p === currentPage ? 'page' : undefined}
                      >
                        {p}
                      </Link>
                    ))}
                  </div>

                  {currentPage === totalPages ? (
                    <span className={`${paginationBtnClass} ${paginationDisabledClass}`} aria-disabled="true">
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  ) : (
                    <Link href={`/blogs?page=${currentPage + 1}`} scroll className={`${paginationBtnClass} ${paginationInactiveClass}`}>
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </nav>
              ) : null}

              {totalPages > 1 ? (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Showing {(currentPage - 1) * PAGE_SIZE + 1}–
                  {Math.min(currentPage * PAGE_SIZE, blogList.length)} of {blogList.length} posts
                </p>
              ) : null}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Blogs({ page }) {
  return <BlogsContent page={page} />;
}
