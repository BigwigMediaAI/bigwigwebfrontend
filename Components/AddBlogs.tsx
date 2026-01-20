"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  coverImage?: string | File | null;
  coverImageAlt?: string;
  schemaMarkup?: string[];
}

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const editor = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImage: null as File | null,
    coverImageUrl: "",
    coverImageAlt: "",
    schemaMarkup: [""],
  });

  const [submitting, setSubmitting] = useState(false);

  // Populate form for edit
  useEffect(() => {
    if (!existingBlog) return;

    setFormData({
      title: existingBlog.title,
      slug: existingBlog.slug,
      excerpt: existingBlog.excerpt,
      content: existingBlog.content,
      author: existingBlog.author,
      tags: existingBlog.tags || "",
      coverImage: null,
      coverImageUrl:
        typeof existingBlog.coverImage === "string"
          ? existingBlog.coverImage
          : "",
      coverImageAlt: existingBlog.coverImageAlt || existingBlog.title,
      schemaMarkup: existingBlog.schemaMarkup?.length
        ? existingBlog.schemaMarkup
        : [""],
    });
  }, [existingBlog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title" && !existingBlog) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      setFormData((p) => ({ ...p, title: value, slug: autoSlug }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    setFormData((p) => ({
      ...p,
      coverImage: e.target.files![0],
      coverImageUrl: "",
    }));
  };

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: 500,
      toolbarSticky: true,
      spellcheck: true,
      iframe: true,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
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

        ul, ol { margin: 12px 0; padding-left: 28px; }
        li { margin-bottom: 6px; }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        th, td {
          border: 1px solid #d1d5db;
          padding: 10px;
        }

        th {
          background: #f9fafb;
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
    }),
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.content.trim()) {
      alert("Blog content cannot be empty");
      return;
    }

    if (!existingBlog && !formData.coverImage) {
      alert("Cover image is required");
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();

      Object.entries({
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        tags: formData.tags || "",
        coverImageAlt: formData.coverImageAlt,
      }).forEach(([k, v]) => fd.append(k, v));

      if (formData.coverImage) {
        fd.append("coverImage", formData.coverImage);
      }

      formData.schemaMarkup
        .filter((s) => s.trim())
        .forEach((s) => fd.append("schemaMarkup", s));

      const res = await fetch(
        existingBlog
          ? `${process.env.NEXT_PUBLIC_API_BASE}/blog/${existingBlog.slug}`
          : `${process.env.NEXT_PUBLIC_API_BASE}/blog/add`,
        {
          method: existingBlog ? "PUT" : "POST",
          body: fd,
        },
      );

      const text = await res.text();
      const data = JSON.parse(text);

      if (!res.ok) throw new Error(data.error);

      alert(existingBlog ? "Blog updated successfully!" : "Blog added!");
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div
        className="bg-white text-black p-6 w-full max-w-2xl rounded-xl max-h-[90vh] overflow-y-auto"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">
          {existingBlog ? "Edit Blog" : "Add New Blog"}
        </h2>

        {/* ✅ EDITOR OUTSIDE FORM */}
        <label className="block font-medium mb-2">Blog Content</label>
        <JoditEditor
          ref={editor}
          value={formData.content}
          onBlur={(content) => setFormData((p) => ({ ...p, content }))}
          config={editorConfig}
        />

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 border"
            required
          />

          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="w-full p-2 border"
            required
          />

          <input
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Meta description"
            className="w-full p-2 border"
            required
          />

          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full p-2 border"
            required
          />

          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags"
            className="w-full p-2 border"
          />

          {formData.coverImageUrl && !formData.coverImage && (
            <img
              src={formData.coverImageUrl}
              alt="cover"
              className="w-32 h-20 object-cover rounded"
            />
          )}

          <input type="file" accept="image/*" onChange={handleImageChange} />

          <input
            name="coverImageAlt"
            value={formData.coverImageAlt}
            onChange={handleChange}
            placeholder="Cover image alt text"
            className="w-full p-2 border"
            required
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              disabled={submitting}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {submitting ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
