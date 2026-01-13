"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const blogsPerPage = 9;
  const router = useRouter();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get<BlogPost[]>(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`
      );
      setBlogs(res.data);
      setFilteredBlogs(res.data);
      setCurrentPage(1);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      setBlogs([]);
      setFilteredBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(blogs);
    } else {
      const fuse = new Fuse(blogs, {
        keys: ["title", "author"],
        threshold: 0.4,
      });

      const results = fuse.search(searchTerm).map((r) => r.item);
      setFilteredBlogs(results);
      setCurrentPage(1);
    }
  }, [searchTerm, blogs]);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* PAGE BACKGROUND GRID */}
      <div className="relative pt-28 md:pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative w-11/12 md:w-5/6 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
              Our Blogs
            </span>

            <h1 className="text-4xl md:text-5xl font-light">
              Latest{" "}
              <span className="text-[var(--secondary-color)] italic font-serif">
                Insights
              </span>{" "}
              & Updates
            </h1>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Stay updated with marketing trends, SEO strategies, and growth
              hacks to scale your business faster.
            </p>
          </div>

          {/* SEARCH BAR (GLASS + STICKY) */}
          <div className="sticky top-[74px] md:top-[110px] z-30 mb-10">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="🔍 Search blogs by title or author"
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          {/* BLOGS */}
          {loading ? (
            <div className="flex flex-col justify-center items-center min-h-[50vh]">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-3" />
              <p className="text-gray-400 text-lg">Loading blogs...</p>
            </div>
          ) : currentBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No blogs found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blogs/${blog.slug}`}
                  className="
                    group
                    bg-white/5 backdrop-blur-md border border-white/10
                    rounded-3xl overflow-hidden
                    shadow-xl hover:shadow-2xl
                    transition-all duration-500
                  "
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col justify-between min-h-[190px]">
                    <div>
                      <p className="text-xs text-gray-400">
                        {new Date(blog.datePublished).toLocaleDateString()} • By{" "}
                        <span className="text-gray-200 font-medium">
                          {blog.author}
                        </span>
                      </p>

                      <h2 className="mt-3 text-xl font-semibold line-clamp-2 group-hover:text-[var(--secondary-color)] transition-colors duration-300">
                        {blog.title}
                      </h2>
                    </div>

                    {/* READ MORE BUTTON */}
                    <button
                      className="
                        mt-6 flex items-center gap-3
                        text-sm font-semibold
                        text-white
                        group-hover:text-[var(--secondary-color)]
                        transition
                      "
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/blogs/${blog.slug}`);
                      }}
                    >
                      <span className="relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-[var(--secondary-color)] transition">
                        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-[var(--secondary-color)]/20 transition" />
                        <span className="relative">↗</span>
                      </span>

                      <span className="tracking-wide">Read More</span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-14 flex-wrap gap-3">
              {[...Array(totalPages)].map((_, idx) => {
                const isActive = currentPage === idx + 1;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-medium
                      border transition-all duration-300
                      ${
                        isActive
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                      }
                    `}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
