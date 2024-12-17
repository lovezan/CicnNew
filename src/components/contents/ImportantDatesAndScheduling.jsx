import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import data from "./ImportantDatesTableData.json";
import "./ImportantDates1.css"; // Import the additional CSS file
import ScheduleTable from "./ImportantDatesAndSchedulingBase";

const ImportantDatesAndScheduling = () => {
  const [tracks, setTracks] = useState([]);
  const [copySuccess, setCopySuccess] = useState(""); // State to hold copy success message

  // Load data on component mount
  useEffect(() => {
    if (data?.tracks) {
      setTracks(data.tracks);
    }
  }, []);

  // Handle email copy to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("cicnmir@gmail.com");
      setCopySuccess("Email copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000); // Reset the message after 2 seconds
    } catch (err) {
      setCopySuccess("Failed to copy email.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6">
        <FaClock className="text-4xl text-blue-500 mx-auto mb-2" />
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
          Important Dates and Scheduling
        </h1>
      </div>
      <ScheduleTable />
    

      {/* Notice Section */}
      <div className="text-center mb-6 text-lg text-gray-700">
        <p>
          Authors are requested to inform if any correction in the author name
          or title of paper to{" "}
          <a
            href="javascript:void(0)"
            onClick={copyEmailToClipboard}
            className="text-blue-600 cursor-pointer"
          >
            cicnmir@gmail.com
          </a>
        </p>
        {copySuccess && (
          <p className="text-green-600 text-sm mt-2">{copySuccess}</p>
        )}
      </div>

      {/* Tracks Section */}
      {tracks.length > 0 ? (
        <div className="space-y-10 max-h-screen overflow-y-auto custom-scrollbar">
          {tracks.map((track, trackIndex) => (
            <div key={trackIndex} className="bg-white shadow-md rounded-lg">
              {/* Track Title */}
              <h2 className="text-2xl font-semibold text-gray-800 px-6 py-4 border-b">
                {track.name}
              </h2>

              {/* Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  {/* Table Header */}
                  <thead className="sticky top-0 bg-blue-600 text-white shadow-sm">
                    <tr>
                      <th className="p-3 w-24 text-center border-r">
                        Track ID
                      </th>
                      <th className="p-3 w-24 text-center border-r">
                        Paper ID
                      </th>
                      <th className="p-3 w-2/3 border-r">Paper Title</th>
                      <th className="p-3 w-1/3">Authors</th>
                      <th className="p-3 w-1/3 border-r">Contact Email</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    {track.papers.map((paper, paperIndex) => (
                      <tr
                        key={paperIndex}
                        className={`${
                          paperIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100`}
                      >
                        <td className="p-3 border-r text-gray-700 text-center">
                          {paper.ID}
                        </td>
                        <td className="p-3 border-r text-gray-700 text-center">
                          {paper.PaperID}
                        </td>
                        <td className="p-3 border-r text-gray-700 paper-title-cell">
                          <p className="break-words">{paper.Title}</p>
                        </td>
                        <td className="p-3 w-1/4 text-gray-700 author-cell">
                          <p className="break-words">
                            {Array.isArray(paper.Authors)
                              ? paper.Authors.map((author, index) => (
                                  <span key={index}>
                                    {author}
                                    {index < paper.Authors.length - 1 && (
                                      <span className="font-bold">, </span>
                                    )}
                                  </span>
                                ))
                              : paper.Authors}
                          </p>
                        </td>

                        <td className="p-3 border-r w-1/4 text-gray-700 email-cell">
                          <p className="break-words">{paper.Email}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          Loading important dates and scheduling...
        </div>
      )}
    </div>
  );
};

export default ImportantDatesAndScheduling;
