'use client';

export default function JobDetail({job}) {
  return (
    <div className="w-1/2 bg-white rounded-lg shadow p-4 relative">
      <button
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">{job.title}</h2>
      <div className="space-y-4">
        <div>
          <div className="flex items-center text-gray-500 mb-2">
            <span>📍</span>
            <span className="ml-1">{job.location}</span>
          </div>
          <div className="font-semibold mb-2">{job.salary}</div>
          <div className="text-gray-600">{job.employmentType}</div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[...job.tags, ...(job.additionalTags || [])].map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
          応募画面へ進む
        </button>

        <button className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          ♡
        </button>
      </div>
    </div>
  );
}
