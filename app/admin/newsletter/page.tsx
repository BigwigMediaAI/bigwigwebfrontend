"use client";

import ButtonFill from "@/Components/ButtonFill";
import { useEffect, useState } from "react";

interface Newsletter {
  _id: string;
  title: string;
  subject: string;
  sendType: "ALL" | "MANUAL";
  sentCount: number;
  createdAt: string;
}

const AdminNewsletter = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // form state
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [sendType, setSendType] = useState<"ALL" | "MANUAL">("ALL");
  const [manualEmails, setManualEmails] = useState("");

  const fetchNewsletters = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/newsletter`);
      const data = await res.json();
      setNewsletters(data.data || []);
    } catch (err) {
      console.error("Failed to fetch newsletters", err);
    }
  };

  useEffect(() => {
    fetchNewsletters();
  }, []);

  // SEND NEWSLETTER
  const handleSubmit = async () => {
    if (!title || !subject || !content) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/newsletter/send`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            subject,
            content,
            sendType,
            manualEmails:
              sendType === "MANUAL"
                ? manualEmails.split(",").map((e) => e.trim())
                : undefined,
          }),
        },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      alert("✅ Newsletter sent");

      setTitle("");
      setSubject("");
      setContent("");
      setManualEmails("");
      setShowForm(false);
      fetchNewsletters();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // DELETE NEWSLETTER
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this newsletter?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/newsletter/${id}`,
        { method: "DELETE" },
      );

      if (!res.ok) throw new Error("Failed to delete");

      fetchNewsletters();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-6 space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Newsletter Management</h1>
        <ButtonFill onClick={() => setShowForm(true)} text="Send Newsletter" />
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-[#111] w-full max-w-2xl rounded-xl p-6 space-y-5 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold">Send Newsletter</h2>

            <div className="grid grid-cols-1 gap-6">
              {/* FORM */}
              <div className="space-y-3">
                <input
                  className="w-full bg-black border border-white/10 px-4 py-2 rounded"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  className="w-full bg-black border border-white/10 px-4 py-2 rounded"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                  className="w-full bg-black border border-white/10 px-4 py-2 rounded min-h-[140px]"
                  placeholder="HTML Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <select
                  className="w-full bg-black border border-white/10 px-4 py-2 rounded"
                  value={sendType}
                  onChange={(e) =>
                    setSendType(e.target.value as "ALL" | "MANUAL")
                  }
                >
                  <option value="ALL">All Subscribers</option>
                  <option value="MANUAL">Manual Emails</option>
                </select>

                {sendType === "MANUAL" && (
                  <input
                    className="w-full bg-black border border-white/10 px-4 py-2 rounded"
                    placeholder="Emails (comma separated)"
                    value={manualEmails}
                    onChange={(e) => setManualEmails(e.target.value)}
                  />
                )}

                <ButtonFill
                  onClick={handleSubmit}
                  text={loading ? "Sending..." : "Send"}
                />
              </div>

              {/* PREVIEW */}
              {/* <div className="border border-white/10 rounded-lg bg-black p-4">
                <p className="text-sm text-gray-400 mb-2">Live Preview</p>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{
                    __html:
                      content ||
                      "<p style='color:#888'>Newsletter preview will appear here</p>",
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* LIST */}
      <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#1a1a1a] text-gray-400 text-xs uppercase text-start">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Sent</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {newsletters.map((n, i) => (
              <tr
                key={n._id}
                className={`${
                  i % 2 ? "bg-[#141414]" : "bg-[#0f0f0f]"
                } hover:bg-[#1f1f1f]`}
              >
                <td className="px-4 py-3">{n.title}</td>
                <td className="px-4 py-3">{n.subject}</td>
                <td className="px-4 py-3">{n.sendType}</td>
                <td className="px-4 py-3">{n.sentCount}</td>
                <td className="px-4 py-3">
                  {new Date(n.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(n._id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {newsletters.length === 0 && (
          <p className="p-6 text-gray-500">No newsletters found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminNewsletter;
