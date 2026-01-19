"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string;
  coverImage?: string | File | null; // ✅ string for existing URL, File for upload
  coverImageAlt?: string;
  schemaMarkup?: string[];
}

const categoryOptions = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Designing & Development",
  "Email Marketing",
  "Social Media Optimization",
  "Graphic Designing",
  "AI and CGI Marketing",
  "Landing Page Optimization",
  "Affiliate Marketing",
  "Video Shoot",
  "Public Relations",
  "Influencer Marketing",
  "Online Reputation Management",
  "Digital Marketing",
];

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImage: null as File | null, // for new upload
    coverImageUrl: "" as string, // for preview of existing image
    coverImageAlt: "",
    schemaMarkup: [""],
  });

  const [submitting, setSubmitting] = useState(false);
  const editor = useRef(null);

  // Populate form if editing
  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title,
        slug: existingBlog.slug,
        excerpt: existingBlog.excerpt,
        content: existingBlog.content,
        author: existingBlog.author,
        tags: existingBlog.tags || "",
        coverImage: null, // file upload starts empty
        coverImageUrl:
          typeof existingBlog.coverImage === "string"
            ? existingBlog.coverImage
            : "",
        coverImageAlt: existingBlog.coverImageAlt || existingBlog.title,
        schemaMarkup: existingBlog.schemaMarkup?.length
          ? existingBlog.schemaMarkup
          : [""],
      });
    }
  }, [existingBlog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title" && !existingBlog) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      setFormData((prev) => ({ ...prev, title: value, slug: autoSlug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        coverImage: e.target.files![0],
        coverImageUrl: "", // clear existing preview if new file selected
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔒 Frontend validation
    if (!formData.content || formData.content.trim() === "") {
      alert("Blog content cannot be empty");
      return;
    }

    if (!existingBlog && !formData.coverImage) {
      alert("Cover image is required");
      return;
    }

    setSubmitting(true);

    try {
      const blogData = new FormData();
      blogData.append("title", formData.title);
      blogData.append("slug", formData.slug);
      blogData.append("excerpt", formData.excerpt);
      blogData.append("content", formData.content);
      blogData.append("author", formData.author);
      blogData.append("tags", formData.tags || "");
      blogData.append("coverImageAlt", formData.coverImageAlt);

      if (formData.coverImage) {
        blogData.append("coverImage", formData.coverImage);
      }

      // ✅ Only send non-empty schema markup
      formData.schemaMarkup
        .filter((s) => s.trim() !== "")
        .forEach((schema) => blogData.append("schemaMarkup", schema));

      const res = await fetch(
        existingBlog
          ? `${process.env.NEXT_PUBLIC_API_BASE}/blog/${existingBlog.slug}`
          : `${process.env.NEXT_PUBLIC_API_BASE}/blog/add`,
        {
          method: existingBlog ? "PUT" : "POST",
          body: blogData, // ❌ DO NOT SET HEADERS
        }
      );

      // ✅ SAFE response handling
      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Server returned non-JSON:", text);
        alert("Server error. Check backend logs.");
        return;
      }

      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      alert(
        existingBlog ? "Blog updated successfully!" : "Blog added successfully!"
      );
      onSuccess();
      onClose();
    } catch (err) {
      console.error("NETWORK ERROR:", err);
      alert("Network or server error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 w-full max-w-2xl rounded-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">
          {existingBlog ? "Edit Blog" : "Add New Blog"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-2 border"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="slug"
            placeholder="Slug"
            className="w-full p-2 border"
            value={formData.slug}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="excerpt"
            placeholder="Meta description"
            className="w-full p-2 border"
            value={formData.excerpt}
            onChange={handleChange}
            required
          />

          {/* <select
            name="category"
            className="w-full p-2 border"
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            required
          >
            <option value="">Select Category</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select> */}

          <div>
            <label className="block font-medium mb-2">Blog Content</label>
            <JoditEditor
              ref={editor}
              value={formData.content}
              onChange={(newContent) =>
                setFormData((prev) => ({ ...prev, content: newContent }))
              }
              config={{
                readonly: false,
                height: 500,
                toolbarSticky: true,
                spellcheck: true,
                askBeforePasteHTML: false,
                askBeforePasteFromWord: false,
                iframe: true,
                // ✅ THIS IS THE CORRECT PROPERTY
                iframeStyle: `
      body {
        font-family: Inter, system-ui, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.8;
        color: #1f2937;
        padding: 16px;
      }

      h1 { font-size: 32px; font-weight: 700; margin: 24px 0 16px; }
      h2 { font-size: 26px; font-weight: 600; margin: 22px 0 14px; }
      h3 { font-size: 22px; font-weight: 600; margin: 20px 0 12px; }
      h4 { font-size: 18px; font-weight: 600; margin: 18px 0 10px; }

      p { margin: 12px 0; }

      ul, ol {
        margin: 12px 0;
        padding-left: 28px;
      }

      li {
        margin-bottom: 6px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }

      th, td {
        border: 1px solid #d1d5db;
        padding: 10px;
        text-align: left;
      }

      th {
        background-color: #f9fafb;
        font-weight: 600;
      }

      img {
        max-width: 100%;
        margin: 16px 0;
        border-radius: 6px;
      }
    `,

                buttons: [
                  "source",
                  "|",
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "|",
                  "ul",
                  "ol",
                  "|",
                  "outdent",
                  "indent",
                  "|",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "paragraph",
                  "|",
                  "image",
                  "video",
                  "table",
                  "link",
                  "|",
                  "align",
                  "undo",
                  "redo",
                  "|",
                  "hr",
                  "eraser",
                  "fullsize",
                ],

                image: {
                  editAlt: true,
                  editTitle: true,
                  editSrc: true,
                  openOnDblClick: true,
                  selectImageAfterClose: true,
                  useImageEditor: false,
                },
              }}
            />
          </div>

          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full p-2 border"
            value={formData.author}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            className="w-full p-2 border"
            value={formData.tags}
            onChange={handleChange}
          />

          {/* Show existing cover image */}
          {formData.coverImageUrl && !formData.coverImage && (
            <img
              src={formData.coverImageUrl}
              alt="Existing cover"
              className="mb-2 w-32 h-20 object-cover rounded"
            />
          )}

          <input
            type="file"
            name="coverImage"
            accept="image/*"
            className="w-full"
            onChange={handleImageChange}
            required={!existingBlog}
          />

          <input
            type="text"
            name="coverImageAlt"
            placeholder="Cover Image Alt Text (SEO)"
            className="w-full p-2 border"
            value={formData.coverImageAlt}
            onChange={handleChange}
            required
          />

          {/* Schema Markup */}
          {formData.schemaMarkup.map((markup, index) => (
            <textarea
              key={index}
              value={markup}
              onChange={(e) => {
                const updated = [...formData.schemaMarkup];
                updated[index] = e.target.value;
                setFormData((prev) => ({ ...prev, schemaMarkup: updated }));
              }}
              placeholder={`Schema Markup ${index + 1}`}
              rows={3}
              className="w-full p-2 border mb-2"
            />
          ))}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-white rounded ${
                submitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={submitting}
            >
              {submitting
                ? existingBlog
                  ? "Updating..."
                  : "Adding..."
                : existingBlog
                  ? "Update"
                  : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
