import React from 'react';
import AmiriGolilarz from '../../assets/AmiriGolilarz.jpg';  // Importing the first image
import Gohel from '../../assets/gohel.jpeg';               // Importing the second image

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Keynote Speakers Section with a different background color */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 sm:p-6 rounded-lg shadow-lg"> {/* Changed background gradient */}
        <center>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Keynote Speakers
          </h1>
        </center>
        <div className="space-y-6 sm:space-y-8">
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src={AmiriGolilarz}  // Using imported image
                alt="Dr. Noorbakhsh Amiri Golilarz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Noorbakhsh Amiri Golilarz
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Affiliation: Department of Computer Science and Engineering, Mississippi State University, MS, USA
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Amiri Golilarz is an Assistant Research Professor in the Department of Computer Science and Engineering at Mississippi State University. He holds a Ph.D. in Electrical and Computer Engineering from Southern Illinois University Carbondale, IL, and a Doctor of Engineering degree in Computer Science and Technology from UESTC, China. He has also worked as a postdoctoral research fellow at Boston College, Massachusetts. He has extensive experience in Image Processing and Computer Vision, Machine Learning, Deep Convolutional Neural Networks, and Disease Diagnosis using Deep Learning. Dr. Amiri has published various papers in high IF journals and IEEE conferences. He has also served as Editor-in-chief for two journals, and as a lead guest editor in several SCI-indexed journals. He is also the co-founder and Editor-in-chief of AI Letters, a double-blind peer-reviewed journal.
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src={Gohel}  // Using imported image
                alt="Prof. Hardik Gohel"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Hardik Gohel
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  University of Houston at Victoria
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Gohel has extensive research experience in artificial intelligence and his research projects have involved cyber test automation and monitoring, smart bandages for wound monitoring, big data for security intelligence, trustworthy cyberspace for security and privacy of social media, predictive maintenance for nuclear infrastructure, and database and mobile forensics infrastructure. Dr. Gohel is also working on how to prepare a quality diversified workforce with artificial intelligence in science, technology, engineering, and mathematics (STEM) education.

              His independent research program is inspired by his graduate and postdoc studies. He is interested in designing and developing robust artificial intelligence and cybersecurity solutions to make human life better. Dr. Gohel is actively working with United States Federal funding agencies and national labs for research collaborations. He is also interested in linkages and MOUs with government, academia, and industry to foster individual and institutional partnerships in a natural and sustainable manner.

              Dr. Gohel welcomes motivated undergraduate and graduate students to join his research team and contact him.
            </p>
          </div>
        </div>
      </div>
      
      {/* Adding gap between Keynote and Invited Talk Sections */}
      <div className="mt-8"></div> {/* Gap added here */}
      {/* Invited Talk Section (kept the same color as original) */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 sm:p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Invited Talk
          </h1>
        </center>
        <div className="space-y-6 sm:space-y-8">
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src={AmiriGolilarz}  // Using imported image
                alt="Dr. Noorbakhsh Amiri Golilarz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Noorbakhsh Amiri Golilarz
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Affiliation: Department of Computer Science and Engineering, Mississippi State University, MS, USA
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Amiri Golilarz is an Assistant Research Professor in the Department of Computer Science and Engineering at Mississippi State University. He holds a Ph.D. in Electrical and Computer Engineering from Southern Illinois University Carbondale, IL, and a Doctor of Engineering degree in Computer Science and Technology from UESTC, China. He has also worked as a postdoctoral research fellow at Boston College, Massachusetts. He has extensive experience in Image Processing and Computer Vision, Machine Learning, Deep Convolutional Neural Networks, and Disease Diagnosis using Deep Learning. Dr. Amiri has published various papers in high IF journals and IEEE conferences. He has also served as Editor-in-chief for two journals, and as a lead guest editor in several SCI-indexed journals. He is also the co-founder and Editor-in-chief of AI Letters, a double-blind peer-reviewed journal.
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src={Gohel}  // Using imported image
                alt="Prof. Hardik Gohel"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Hardik Gohel
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  University of Houston at Victoria
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Gohel has extensive research experience in artificial intelligence and his research projects have involved cyber test automation and monitoring, smart bandages for wound monitoring, big data for security intelligence, trustworthy cyberspace for security and privacy of social media, predictive maintenance for nuclear infrastructure, and database and mobile forensics infrastructure. Dr. Gohel is also working on how to prepare a quality diversified workforce with artificial intelligence in science, technology, engineering, and mathematics (STEM) education.

              His independent research program is inspired by his graduate and postdoc studies. He is interested in designing and developing robust artificial intelligence and cybersecurity solutions to make human life better. Dr. Gohel is actively working with United States Federal funding agencies and national labs for research collaborations. He is also interested in linkages and MOUs with government, academia, and industry to foster individual and institutional partnerships in a natural and sustainable manner.

              Dr. Gohel welcomes motivated undergraduate and graduate students to join his research team and contact him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
