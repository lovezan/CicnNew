import React from 'react';
import { FaClock } from 'react-icons/fa'; // Import an icon from react-icons
import ImportantDates1 from './ImportantDates1';

const ImportantDatesAndScheduling = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800 text-center">
      <div className="mb-4">
        <FaClock className="text-4xl text-blue-500 mx-auto mb-2" />
      </div>
      <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
        Important Dates and Scheduling
      </h1>
      <ImportantDates1 />
      <p className="text-xl">
         scheduling will be released soon. Stay tuned!
      </p>
    </div>
  );
};

export default ImportantDatesAndScheduling;
