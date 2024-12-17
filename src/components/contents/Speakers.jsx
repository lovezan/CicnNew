import React from "react";

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Background Gradient */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="space-y-6 sm:space-y-8 ">
          <center>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Keynote Speaker 1
            </h1>
          </center>
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/kameshwaraMurti.png"
                alt="Dr. Noorbakhsh Amiri Golilarz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Musti K.S. Sastry
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Namibia University of Science and Technology
                </p>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              <span className="mr-2">Title:</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                ICT-Based Solutions for Energy Systems
              </span>
            </h2>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr KS Sastry, Musti is an accomplished academic with more than 30
              years of professional experience. He obtained his BTech in
              Electrical Engineering from JNTU, Kakinada (A.P.) in 1990, MTech
              and PhD from NIT, Warangal in the years 1996 and 2002
              respectively. He started his career as lecturer with NIT Warangal
              and served as full time faculty for 10 years and moved to the
              Energy Industry. He was with Global Energy Consulting Engineers,
              Hyderabad and worked as Assistant General Manager and actively
              with several turn-key projects in different states of India. Then
              he moved to the Caribbean to work with University of West Indies
              under a joint appointment by two universities in Trinidad and
              Tobago at the level of Program Coordinator. Dr Sastry provided
              leadership in securing international accreditation for BTech
              Programs in 2009 and also for Masters' programs in 2016; both from
              IET, UK. He has been a full tenured faculty with the University of
              West Indies and has served for 15 years. Then he moved to Africa
              in 2018 and joined Namibia University of Science and Technology
              where he currently serves as Associate Professor. Presently he is
              involved with several projects in the areas of energy systems, big
              data and Demand Side Management. Apart from Energy Systems, his
              teaching portfolio includes Software Engineering and Systems,
              Database and Information Systems. Dr Sastry has significant
              interest in core and multidisciplinary research. His research
              interests are in the extended areas of Big data, Data
              visualizations, Energy Economics. He has published several
              research articles and book chapters in various areas of
              Engineering. Dr Sastry has visited various universities across the
              globe to serve in different capacities. He is a visiting professor
              with ESIGELEC, Rouen (data sciences), France; Sophia University,
              Japan (data sciences), University of Turabo, Puerto Rico (Energy
              Systems) and KL University, India. He is on the panel of
              accreditors of IEEE/ ABET, USA and visited a few universities as
              part of ABET accreditation process. Dr Sastry is a senior member
              of IEEE, USA; member of IET-UK and a Life member of IE, India. He
              is a Registered Engineer in Canada, India and also in Trinidad and
              Tobago.
            </p>
          </div>
          {/* <center>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Keynote Speakers 2
            </h1>
          </center> */}
          {/* Speaker 2 */}
          {/* <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/stpi.jpeg"
                alt="Prof. Hardik Gohel"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Director General
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Software Technology Parks of India, New Delhi
                </p>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              <span className="mr-2">Title:</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                Cybersecurity Attacks and Prevention: Tricks and Tips
              </span>
            </h2>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Software Technology Parks of India (STPI) is an S&T autonomous
              society under Ministry of Electronics and Information Technology
              (MeitY) engaged in promoting IT/ ITES Industry, Innovation, R&D,
              Start-ups, Product/ IP creation in the field of emerging
              technologies. STPI was established in 1991 by the Indian Ministry
              of Electronics and Information Technology (MeitY) with the
              objective of encouraging, promoting and boosting the export of
              software from India. STPI Headquarters is located in New Delhi
              with over 60+ Centres spread across the country.
            </p>
          </div> */}
        </div>
      </div>
      <div class="mt-8"></div>
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="space-y-6 sm:space-y-8 ">
          <center>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Expert Talk 1
            </h1>
          </center>
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/Priya-Ranjan.webp"
                alt="Dr. Noorbakhsh Amiri Golilarz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Prof. Priya Ranjan
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Buddh World University, Bihar
                </p>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              <span className="mr-2">Title:</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                ECG Tagging at Your Finger-Tips
              </span>
            </h2>

            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Prof. Priya Ranjan (M’1997) graduated from IIT Kharagpur (EE,
              1997) and earned his M.S. (1999) and Ph.D. (2003) in ECE from the
              University of Maryland, College Park. He was mentored in control
              theory by Prof. K.B. Dutta and nonlinear dynamics by Prof.
              Soumitro Banerjee. He joined CAIR, DRDO, under Prof. M.
              Vidyasagar, before moving to the CACSE lab at the University of
              Maryland under Prof. E.H. Abed. Supported by NSF, DARPA, and U.S.
              DoD grants, his research focused on nonlinear dynamics in network
              protocols, revealing intricate system behaviors influenced by
              delays. His work discovered a global stability limit for systems
              with arbitrary delays. Recently, he is exploring consensus
              instabilities and their TCP/IP implementation with his student,
              Parshal Chitrakar.
            </p>
          </div>
          <center>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Expert Talk 2
            </h1>
          </center>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/Muthukumar.webp"
                alt="Prof. Hardik Gohel"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Muthukumar Ka
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  UPES Dehradun
                </p>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              <span className="mr-2">Title:</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                AI in Medical Imaging: Developing a Hybrid Model for Efficient
                Brain MRI Analysis and Interpretation
              </span>
            </h2>

            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Muthukumar K.A. is a distinguished researcher who has
              dedicated his career to advancing the field of machine learning
              and deep learning. His research efforts are primarily focused on
              leveraging these technologies to identify and predict disease, and
              develop effective health monitoring solutions. One of his
              significant contributions to this field is a groundbreaking method
              for monitoring activity using advanced deep learning and computer
              vision techniques. He has an impressive background in machine
              learning engineering, having previously worked as a computer
              vision engineer at MOTiV Research Co. in Tokyo. He has been
              honored with several prestigious awards and grants, including the
              ICM English Session Encouragement Award in 2021 and the KLL
              Research Grant at Keio University from 2020 to 2022. Moreover, he
              received the highly coveted Monbukagakusho MEXT Scholarship from
              the Embassy of Japan from 2018-2022, which is a testament to his
              academic excellence. His contributions to the field of machine
              learning and deep learning have been widely recognized, with his
              research papers published in several top academic journals and his
              presentations delivered at numerous international conferences. His
              work has had a significant impact on the healthcare industry, and
              his innovative solutions are helping to transform the way we
              approach disease identification and health monitoring. His
              unwavering commitment to advancing the field of machine learning
              and deep learning has made him a valuable asset to the research
              community, and his continued contributions are sure to drive
              further innovation and progress in this exciting field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
