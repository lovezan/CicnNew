import React from "react";

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* Background Gradient */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 sm:p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Keynote Speakers
          </h1>
        </center>
        <div className="space-y-6 sm:space-y-8 ">
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/kamran1.jpg"
                alt="Dr. Noorbakhsh Amiri Golilarz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Kamran Arshad
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Doctor of Philosophy (Ph.D.), Middlesex University, London UK,
                  2007 M.Sc. in Electrical Engineering, King Fahd University of
                  Petroleum and Minerals, Dhahran, Saudi Arabia, 2003 BEng in
                  Electrical Engineering (Distinction), NED University of
                  Engineering & Technology, Pakistan, 2000
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Prof. Kamran Arshad has 18+ years of research and teaching
              experience in higher education and he is currently Dean of
              Research and Graduate Studies, and a Professor in Electrical
              Engineering at Ajman University, UAE. Prior to join Ajman
              University in January 2016, he has been associated with the
              University of Greenwich, UK as a Senior Lecturer (Associate
              Professor) and a Program Director of MSc Wireless Mobile
              Communications Systems Engineering. Prof. Arshad is a Senior
              Member of IEEE (SM-IEEE), a Senior Fellow of the UK Higher
              Education Academy (SF-HEA) and an Associate Editor of EURASIP
              Journal on Wireless Communications and Networking. Prof. Arshad
              research interests are in the areas of cognitive radio,
              LTE/LTE-Advanced, 5G, and cognitive Machine-to-Machine (M2M)
              communications. He was a project manager at the University of
              Surrey, UK for the European project QoSMOS and lead University of
              Surrey team involved in the project. He has a global collaborative
              research network spanning both academia and key industrial players
              in the field of wireless communications. Prof. Arshad has
              contributed to several European and international large-scale
              research projects. Prof. Arshad worked closely with leading
              European companies in communications, such as British Telecom
              (UK), Toshiba (UK), Thales (France), NEC (Japan/France), Agilent
              (Belgium), Alcatel Lucent (Germany), Nokia (Finland), Ericsson
              (Sweden) etc. and produced several joint publications. He has
              supervised 5+ successful PhD graduates and supervised 40+ MSc
              thesis. Prof. Arshad has 140+ technical peer-reviewed papers in
              top quality journals and international conferences. He received 3
              best paper awards, 1 best R&D track award and chaired technical
              sessions in several leading international conferences. Prof.
              Arshad also authored/co-authored 25+ technical reports submitted
              to the European Commission (EC). He served 100+ international
              conferences as a Technical Program Committee (TPC) member and an
              editor of several international journals. Prof. Arshad returned
              research outputs in UK Research Excellence Framework (REF) 2014 .
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/crio.jpeg"
                alt="Prof. Hardik Gohel"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Ciro Rodriguez
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Universidad Nacional Mayor de San Marcos; Universidad Nacional
                  Federico Villarreal Verified email at unmsm.edu.pe
                  Inteligencia ArtificialInteligencia de negocios, dinamica de
                  sistemas, bigdata, sostenibilidad ambiental
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Prof. Dr. Ciro Rodriguez is a full Professor of the Software
              Engineering Department of the Universidad Nacional Mayor de San
              Marcos and also with the Electronic Engineering and Computer
              Science Department of the Universidad Nacional Federico
              Villarreal. He has completed his PhD in System Engineering and has
              advanced studies at the Institute of Theoretical Physics ICTP in
              Italy, the United States Particle Accelerator School USPAS, and
              Korea Telecom KT Information Technology Development Policy Studies
              in South Korea. His research interests include artificial
              intelligence, health-welfare, the environment, and cybersecurity.
              He has published over 130 research papers in reputed journals
              indexed in Scopus, Wos, and IEEE, and has filed two patents in
              engineering fields. VTU of India thesis reviewer, post and
              undergraduate thesis adviser, is the author of national and
              international books. International speaker, recognized mentor.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8"></div>
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 sm:p-6 rounded-lg shadow-lg">
        <center>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Invited Talk
          </h1>
        </center>
        <div className="space-y-6 sm:space-y-8 ">
          {/* Speaker 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/AmiriGolilarz.jpg"
                alt="Dr. Noorbakhsh Amiri Golilarz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Noorbakhsh Amiri Golilarz
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Affiliation: Department of Computer Science and Engineering,
                  Mississippi State University, MS, USA
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Amiri Golilarz is an Assistant Research Professor in the
              Department of Computer Science and Engineering at Mississippi
              State University. He holds a Ph.D. in Electrical and Computer
              Engineering from Southern Illinois University Carbondale, IL, and
              a Doctor of Engineering degree in Computer Science and Technology
              from UESTC, China. He has also worked as a postdoctoral research
              fellow at Boston College, Massachusetts. He has extensive
              experience in Image Processing and Computer Vision, Machine
              Learning, Deep Convolutional Neural Networks, and Disease
              Diagnosis using Deep Learning. Dr. Amiri has published various
              papers in high IF journals and IEEE conferences. He has also
              served as Editor-in-chief for two journals, and as a lead guest
              editor in several SCI-indexed journals. He is also the co-founder
              and Editor-in-chief of AI Letters, a double-blind peer-reviewed
              journal.
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 text-justify">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <img
                src="src/assets/gohel.jpeg"
                alt="Prof. Hardik Gohel"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
              />
              <div className="flex-1 mt-4 sm:mt-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                  Dr. Hardik Gohel
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  University of Houston at Victoria
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-2">Biography:</p>
            <p className="text-sm sm:text-base text-gray-700">
              Dr. Gohel has extensive research experience in artificial
              intelligence and his research projects have involved cyber test
              automation and monitoring, smart bandages for wound monitoring,
              big data for security intelligence, trustworthy cyberspace for
              security and privacy of social media, predictive maintenance for
              nuclear infrastructure, and database and mobile forensics
              infrastructure. Dr. Gohel is also working on how to prepare a
              quality diversified workforce with artificial intelligence in
              science, technology, engineering, and mathematics (STEM)
              education. His independent research program is inspired by his
              graduate and postdoc studies. He is interested in designing and
              developing robust artificial intelligence and cybersecurity
              solutions to make human life better. Dr. Gohel is actively working
              with United States Federal funding agencies and national labs for
              research collaborations. He is also interested in linkages and
              MOUs with government, academia, and industry to foster individual
              and institutional partnerships in a natural and sustainable
              manner. Dr. Gohel welcomes motivated undergraduate and graduate
              students to join his research team and contact him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
