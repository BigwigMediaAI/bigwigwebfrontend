"use client";
import { useEffect, useState } from "react";

interface Subscriber {
  _id: string;
  email: string;
  isActive: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 20;

const AdminSubscriber = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>(
    [],
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/subscriber`)
      .then((res) => res.json())
      .then((data) => {
        const list = data.data || data;
        const sorted = list.sort(
          (a: Subscriber, b: Subscriber) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setSubscribers(sorted);
        setFilteredSubscribers(sorted);
      })
      .catch((err) => console.error("Error fetching subscribers:", err));
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setFilteredSubscribers(subscribers);
      setCurrentPage(1);
      return;
    }

    const filtered = subscribers.filter((s) =>
      new Date(s.createdAt).toISOString().startsWith(selectedDate),
    );

    setFilteredSubscribers(filtered);
    setCurrentPage(1);
  }, [selectedDate, subscribers]);

  const totalPages = Math.ceil(filteredSubscribers.length / ITEMS_PER_PAGE);

  const currentSubscribers = filteredSubscribers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-black p-4 sm:p-6 border-b border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Email Subscribers</h1>

        <div className="flex items-center gap-2">
          <label htmlFor="filter-date" className="text-sm text-gray-400">
            Filter by Date:
          </label>
          <input
            id="filter-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {filteredSubscribers.length === 0 ? (
          <p className="text-gray-400">No Subscribers found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Status</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Subscribed At
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentSubscribers.map((subscriber) => (
                  <tr
                    key={subscriber._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${subscriber.email}`}
                        className="text-cyan-400 hover:underline"
                      >
                        {subscriber.email}
                      </a>
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          subscriber.isActive
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {subscriber.isActive ? "Active" : "Unsubscribed"}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {new Date(subscriber.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-6">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>

              <span className="px-3 py-1 bg-[var(--primary-color)] text-white rounded">
                {currentPage}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSubscriber;
