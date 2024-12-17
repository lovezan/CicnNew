import ImportantSessionChairScheduling from "./ImportantSessionChairScheduling.jsx";

const ConferenceSchedule = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
          Schedule: CICN 2024 – 22-23 Dec 2024, Oriental University, Indore,
          India
        </h1>
        <p className="text-lg text-yellow-500 font-extrabold bg-black p-4">
          <nav className="text-red-500 font-extrabold inline">NOTE :</nav>{" "}
          Presented & IEEE copyright submitted research papers would only be
          sent to IEEE Xplore
        </p>
        {/* Papers Copyright Notice Section */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
            Pending IEEE Copyright Submissions
          </h2>
          <p className="text-gray-800 mb-4 text-center">
            The following papers have not submitted their IEEE copyright. If not
            submitted before the conference, these papers will not be sent to
            IEEE Xplore:
          </p>
          <div className="flex justify-center">
            <ul className="flex flex-wrap gap-4 justify-center text-gray-700 text-sm sm:text-base">
              {[
                1571081098, 1571060797, 1571075498, 1571089328, 1571093150,
                1571084443, 1571032487, 1571096311, 1571093146, 1571087410,
                1571095284, 1571096118, 1571089891, 1571097060,
              ].map((paperId) => (
                <li
                  key={paperId}
                  className="w-28 sm:w-32 px-3 py-2 bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  {paperId}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Day 1 */}
      <div className="bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2x font-semibold text-gray-800 px-6 py-4 border-b">
          Day - 1: Sunday, 22nd December 2024
        </h2>

        {/* Schedule Timings in One Line */}
        <div className="overflow-x-auto max-w-full font-bold">
          <table className="w-full text-sm text-left border-collapse">
            {/* Table Header */}
            <thead className="sticky top-0 bg-blue-600 text-white shadow-sm">
              <tr>
                <th className="p-3 w-1/4 text-center border-r">Time</th>
                <th className="p-3 w-3/4 text-center">Event</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  08:30-09:30
                </td>
                <td className=" bg-green-200 text-gray-700 text-center font-bold">
                  Registration
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  09:30-10:30
                </td>
                <td className=" bg-red-200 text-gray-700 text-center font-bold">
                  Opening Ceremony at Conference Hall, Oriental University,
                  Indore
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  10:30-10:50
                </td>
                <td className=" text-gray-700 text-center font-bold">
                  Tea Break
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  10:50-11:45
                </td>
                <td className=" bg-red-200 text-gray-700 text-center font-bold">
                  Keynote 1: Prof. Musti K.S. Sastry, Namibia University of
                  Science and Technology
                  <div className="text-sm font-normal">
                    (ICT based Solutions for Energy Systems)
                  </div>
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  11:45-13:15
                </td>
                <td className=" text-gray-700">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-1
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-2
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-3
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-4
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-5
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          A-1, A-2, A-3, A-4, A-5, A-11
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-7, B-8, B-9, B-10, B-11, B-26
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          C-19, C-20, C-21, C-22, C-23, C-24
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-7, E-8, E-9, E-10, E-19, E-38
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          G-13, G-14, G-15, C-25, C-26, D-7
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  13:15-14:15
                </td>
                <td className=" text-gray-700 text-center font-bold">Lunch</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  14:15-16:00
                </td>
                <td className=" text-gray-700 text-center">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-6
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-7
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-8
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-9
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-10
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-1, B-2, B-3, B-4, B-5, B-6
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          C-1, C-2, C-3, C-4, C-5, C-6
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          F-1, F-2, F-3, F-4, F-5, F-6
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-1, E-2, E-3, E-4, E-5, E-6
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          H-1, H-2, H-3, H-4, H-5, H-6, H-27, H-28
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="bg-white hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  16:00-16:15
                </td>
                <td className=" text-gray-700 text-center font-bold">
                  Tea Break
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  16:15-17:45
                </td>
                <td className=" bg-yellow-200-accent-accent">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-11
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-12
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-13
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-14
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-15
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-12, B-13, B-14, B-15, B-16, B-17
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          F-7, F-8, F-9, F-10, F-11, F-12
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          D-1, D-2, D-3, D-4, D-5, D-6, D-8
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          H-7, H-8, H-9, H-10, H-11, H-12, H-29
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-36, E-37, E-39, E-40, H-13, H-20, H-21
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Day 2 */}
      <div className="bg-white shadow-md rounded-lg">
        <h2 className="text-2x font-semibold text-gray-800 px-6 py-4 border-b">
          Day - 2: Monday, 23rd December 2024
        </h2>

        {/* Schedule Timings in One Line */}
        <div className="overflow-x-auto max-w-full">
          <table className="w-full text-sm text-left border-collapse">
            {/* Table Header */}
            <thead className="sticky top-0 bg-blue-600 text-white shadow-sm">
              <tr>
                <th className="p-3 w-1/4 text-center border-r">Time</th>
                <th className="p-3 w-3/4 text-center">Event</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  09:30-10:30
                </td>
                <td className="  bg-red-200 text-gray-700 text-center font-bold">
                  Keynote 2: Prof. Priya Ranjan, Buddh World University, Bihar
                  <div className="text-sm font-normal">
                    (ECG Tagging at Your Finger-Tips)
                  </div>
                  {/* Director General, Software Technology Parks of  India, New Delhi */}
                  <div className="text-sm font-normal">
                    {/* (Cybersecurity Attacks and Prevention: Tricks and Tips) */}
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  10:30-12:00
                </td>
                <td className=" text-gray-700  text-center  ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-16
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-17
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-18
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-19
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-20
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-18, B-19, B-20, B-21, B-22, B-23
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          C-7, C-8, C-9, C-10, C-11, C-12
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-11, E-12, E-13, E-14, E-15, E-16
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          F-13, F-14, F-15, F-16, F-17, F-18
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          A-6, A-7, A-8, A-9, A-10, A-12
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  12:00-13:30
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-21
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-22
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-23
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-24
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-25
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-24, B-25, B-27, B-28, B-29, B-30
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          C-13, C-14, C-15, C-16, C-17, C-18
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-17, E-18, E-20, E-21, E-22, E-23
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          F-19, F-20, F-21, F-22, F-23, F-24
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          A-13, A-14, A-15, A-16, A-17, A-18
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  13:30-14:30
                </td>
                <td className="p-3 text-gray-700 text-center font-bold">
                  Lunch Break
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  14:30-16:00
                </td>
                <td className=" bg-pink-200 text-gray-700 text-center font-bold">
                  Expert Talk: Dr. Muthukumar Ka, UPES Dehradun
                  <div className="text-sm font-normal">
                    (AI in Medical Imaging: Developing a Hybrid Model for
                    Efficient Brain MRI Analysis and Interpretation)
                  </div>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  14:30-16:00
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-26
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-27
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-28
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-29
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-30
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-31, B-32, B-33, B-34, B-35, B-36
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          G-1, G-2, G-3, G-4, G-5, G-6
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-24, E-25, E-26, E-27, E-28, E-29
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          A-19, A-20, A-21, A-22, H-22, H-23
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-43, B-44, B-45, B-46, B-47, B-48
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className="p-3 bg-red-200 border-r text-gray-700 text-center whitespace-nowrap">
                  16:00-17:45
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className=" border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-31
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-32
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-33
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-34
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          TS-35
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-37, B-38, B-39, B-40, B-41, B-42, H-24
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          G-7, G-8, G-9, G-10, G-11, G-12, H-25
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          E-30, E-31, E-32, E-33, E-34, E-35, H-26
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          H-14, H-15, H-16, H-17, H-18, H-19
                        </td>
                        <td className="border border-gray-300 text-sm text-center py-2 px-4">
                          B-49, B-50, B-51, B-52, B-53, H-30
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ImportantSessionChairScheduling />
    </div>
  );
};

export default ConferenceSchedule;
