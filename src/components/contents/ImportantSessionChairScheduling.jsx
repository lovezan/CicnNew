const ConferenceSchedule = () => {
  return (
    <div className="pt-6 bg-gray-100 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
          Session Chair Schedule: CICN 2024
        </h1>
      </div>

      {/* Day 1 */}
      <div className="bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2x font-semibold text-gray-800 px-6 py-4 border-b">
          Day - 1: Sunday, 22nd December 2024
        </h2>

        {/* Schedule Timings in One Line */}
        <div className="overflow-x-auto font-bold">
          <table className="w-full text-xs text-left border-collapse">
            {/* Table Header */}
            <thead className="sticky top-0 bg-blue-600 text-white shadow-xs">
              <tr>
                <th className="p-3 w-1/4 text-center border-r">Time</th>
                <th className="p-3 w-3/4 text-center">Event</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100 text-center  ">
                <td className="p-5 bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  11:45-13:15
                </td>
                <td className=" text-gray-700  ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4 bg-teal-300">
                          TS-1
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-yellow-400">
                          TS-2
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-pink-300">
                          TS-3
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-indigo-200">
                          TS-4
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-purple-300">
                          TS-5
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-teal-300">
                          Dr. Vivek S. Kushwah, <br />
                          CBIT Hyderabad
                          <br />
                          <a
                            href="mailto:viveksinghk_ece@cbit.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            viveksinghk_ece@cbit.ac.in
                          </a>
                          <br />
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-yellow-400">
                          Dr. Ajeet Singh, <br />
                          Galgoatis University, Noida
                          <br />
                          <a
                            href="mailto:ajeet.singh@galgoatisuniversity.edu.in"
                            className="text-blue-500 text-xs underline"
                          >
                            ajeet.singh@galgoatisuniversity.edu.in
                          </a>
                          <br />
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-pink-300">
                          Dr. Dipak Kumar Sah, <br />
                          GLA University, Mathura
                          <br />
                          <a
                            href="mailto:dipak.sah@gla.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            dipak.sah@gla.ac.in
                          </a>
                          <br />
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-indigo-200">
                          Dr. Arvind Mewada, <br />
                          Bennett University, Noida
                          <br />
                          <a
                            href="mailto:arvind.mewada@bennett.edu.in"
                            className="text-blue-500 text-xs underline"
                          >
                            arvind.mewada@bennett.edu.in
                          </a>
                          <br />
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-purple-300">
                          Kishan Kesari Gupta, <br />
                          Capgemini, Pune
                          <br />
                          <a
                            href="mailto:kishankesri1996@gmail.com"
                            className="text-blue-500 text-xs underline"
                          >
                            kishankesri1996@gmail.com
                          </a>
                          <br />
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-teal-300">
                          Moderator: Dr. Mamta Meena <br />
                          9987144336
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-yellow-400">
                          Moderator: Dr. Megha Singh <br />
                          8817623987
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-pink-300">
                          Moderator: Ms. Sonal Yadav <br />
                          8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-indigo-200">
                          Moderator: Ms. Akanasha Pal <br />
                          8602716434
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-purple-300">
                          Moderator: Mr. Manoj Kumar Biswkarma <br />
                          9755136775
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-teal-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-yellow-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-pink-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-indigo-200">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-purple-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  13:15-14:15
                </td>

                <td className=" text-gray-700 text-center font-bold">Lunch</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  14:15-16:00
                </td>
                <td className=" text-gray-700 text-center">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4 bg-lime-300">
                          TS-6
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-rose-300">
                          TS-7
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-indigo-300">
                          TS-8
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-cyan-300">
                          TS-9
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-teal-300">
                          TS-10
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-lime-300">
                          Dr. Atul Agrawal, <br /> Oriental University, Indore{" "}
                          <br />
                          <a
                            href="mailto:atulagrawal@orientaluniversity.in"
                            className="text-blue-500 underline"
                          >
                            atulagrawal@orientaluniversity.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-rose-300">
                          Dr. Mohd. Aquib Ansari, <br />
                          Bennett University, Noida <br />
                          <a
                            href="mailto:mohd.aquib@bennett.edu.in"
                            className="text-blue-500 text-xs underline"
                          >
                            mohd.aquib@bennett.edu.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-indigo-300">
                          Dr. Munish Khanna, <br />
                          Galgotias University, Noida <br />
                          <a
                            href="mailto:munish.khanna@galgotiasuniversity.edu.in"
                            className="text-blue-500 text-xs underline"
                          >
                            munish.khanna@galgotiasuniversity.edu.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-cyan-300">
                          Dr. Shishir Dixit, <br />
                          MITS Gwalior <br />
                          <a
                            href="mailto:shishir.dixit1@mitsgwalior.in"
                            className="text-blue-500 text-xs underline"
                          >
                            shishir.dixit1@mitsgwalior.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-teal-300">
                          Dr. Brijesh Kumar Chaurasia, <br />
                          PSIT Kanpur <br />
                          <a
                            href="mailto:brijeshchaurasia@ieee.org"
                            className="text-blue-500 text-xs underline"
                          >
                            brijeshchaurasia@ieee.org
                          </a>
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-lime-300">
                          Moderator: Dr. Megha Singh <br />
                          8817623987
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-rose-300">
                          Moderator: Ms. Sonal Yadav <br />
                          8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-indigo-300">
                          Moderator: Ms. Sonal Yadav <br />
                          8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-cyan-300">
                          Moderator: Ms. Akanasha Pal <br />
                          8602716434
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-teal-300">
                          Moderator: Mr. Manoj Kumar Biswkarma <br />
                          9755136775
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-lime-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-rose-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-indigo-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-cyan-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-teal-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="bg-white hover:bg-gray-100">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  16:00-16:15
                </td>
                <td className=" text-gray-700 text-center font-bold">
                  Tea Break
                </td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 text-center">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  16:15-17:45
                </td>
                <td className=" text-gray-700">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4 bg-indigo-300">
                          TS-11
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-teal-300">
                          TS-12
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-lime-300">
                          TS-13
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-rose-300">
                          TS-14
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-cyan-300">
                          TS-15
                        </th>
                      </tr>
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-indigo-300">
                          Prof. MPS Chawla, <br />
                          SGSITS Indore <br />
                          <a
                            href="mailto:mpschawla@gmail.com"
                            className="text-blue-500 text-xs underline"
                          >
                            mpschawla@gmail.com
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-teal-300">
                          Dr. Law Kumar Singh, <br />
                          GLA University, Mathura <br />
                          <a
                            href="mailto:law.singh@gla.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            law.singh@gla.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-lime-300">
                          Dr. Somesh Kumar, <br />
                          ABV-IIITM Gwalior <br />
                          <a
                            href="mailto:somesh@iiitm.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            somesh@iiitm.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-rose-300">
                          Dr. Saurabh Singhal, <br />
                          GNIT, Gr. Noida <br />
                          <a
                            href="mailto:me.ssaurabh@gmail.com"
                            className="text-blue-500 text-xs underline"
                          >
                            me.ssaurabh@gmail.com
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-cyan-300">
                          Dr. Abhay Pratap Singh Bhadauria, <br />
                          GLA University, Mathura <br />
                          <a
                            href="mailto:abhaypratap00@gmail.com"
                            className="text-blue-500 text-xs underline"
                          >
                            abhaypratap00@gmail.com
                          </a>
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-indigo-300">
                          Moderator: Dr. Megha Singh <br />
                          8817623987
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-teal-300">
                          Moderator: Ms. Sonal Yadav <br />
                          8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-lime-300">
                          Moderator: Ms. Sonal Yadav <br />
                          8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-rose-300">
                          Moderator: Ms. Akanasha Pal <br />
                          8602716434
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-cyan-300">
                          Moderator: Mr. Manoj Kumar Biswkarma <br />
                          9755136775
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-indigo-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-teal-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-lime-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-rose-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-cyan-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
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
      <div className="bg-white shadow-md rounded-lg font-bold">
        <h2 className="text-2x font-semibold text-gray-800 px-6 py-4 border-b">
          Day - 2: Monday, 23rd December 2024
        </h2>

        {/* Schedule Timings in One Line */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            {/* Table Header */}
            <thead className="sticky top-0 bg-blue-600 text-white shadow-xs">
              <tr>
                <th className="p-3 w-1/4 text-center border-r">Time</th>
                <th className="p-3 w-3/4 text-center">Event</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className="p-5 bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  10:30-12:00
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* TS-16 to TS-20 with the updated colors */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <th className="border border-gray-300 text-center py-2 px-4 bg-green-400">
                          TS-16
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-cyan-400">
                          TS-17
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-orange-400">
                          TS-18
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-pink-400">
                          TS-19
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4 bg-gray-400">
                          TS-20
                        </th>
                      </tr>
                      {/* Room details */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-green-400">
                          Prof. MPS Chawla, <br />
                          SGSITS Indore <br />
                          <a
                            href="mailto:mpschawla@gmail.com"
                            className="text-blue-500 text-xs underline"
                          >
                            mpschawla@gmail.com
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-cyan-400">
                          Dr. Law Kumar Singh, <br />
                          GLA University, <br />
                          <a
                            href="mailto:law.kumar@gla.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            law.kumar@gla.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-orange-400">
                          Dr. Ramesh Patel, <br />
                          IIT Bombay <br />
                          <a
                            href="mailto:ramesh@iitb.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            ramesh@iitb.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-pink-400">
                          Dr. Poonam Yadav, <br />
                          NIT Kurukshetra <br />
                          <a
                            href="mailto:poonamyadav@nitkkr.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            poonamyadav@nitkkr.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs text-center py-2 px-4 bg-gray-400">
                          Dr. Ankit Kumar, <br />
                          IIT Delhi <br />
                          <a
                            href="mailto:ankit.kumar@iitd.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            ankit.kumar@iitd.ac.in
                          </a>
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-green-400">
                          Moderator: Dr. Megha Singh <br />
                          8817623987
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-cyan-400">
                          Moderator: Ms. Sonal Yadav <br />
                          8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-orange-400">
                          Moderator: Dr. Rahul Jain <br />
                          9123456789
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-pink-400">
                          Moderator: Ms. Suman Kumari <br />
                          9876543210
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-gray-400">
                          Moderator: Mr. Ravi Shankar <br />
                          8897765432
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-green-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-cyan-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-orange-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-pink-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs text-center py-2 px-4 bg-gray-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-blue-500 text-xs underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  12:00-13:30
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent hover:bg-yellow-300">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Session Titles */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-center py-2 px-4 bg-blue-300">
                          TS-21
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-red-300">
                          TS-22
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-green-300">
                          TS-23
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-yellow-300">
                          TS-24
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-purple-300">
                          TS-25
                        </td>
                      </tr>

                      {/* Speaker Details */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-blue-300">
                          Jitender Jain, <br /> Walmart Global Tech, USA <br />
                          <a
                            href="mailto:vagarwal@nitkkr.ac.in"
                            className="text-blue-500 underline"
                          >
                            vagarwal@nitkkr.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-red-300">
                          Dr. Rahul Pradhan, <br /> GLA University, Mathura{" "}
                          <br />
                          <a
                            href="mailto:hkshakya.rs.cse@iitbhu.ac.in"
                            className="text-blue-500 underline"
                          >
                            hkshakya.rs.cse@iitbhu.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-green-300">
                          Dr. Dinesh Sharma, <br /> Manipal University, Jaipur{" "}
                          <br />
                          <a
                            href="mailto:sharma.dineshme@gmail.com"
                            className="text-blue-500 underline"
                          >
                            sharma.dineshme@gmail.com
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-yellow-300">
                          Dr. Chandra Mani Sharma, <br /> UPES Dehradun <br />
                          <a
                            href="mailto:
atulagrawal@orientaluniversity.in"
                            className="text-blue-500 underline"
                          >
                            atulagrawal@orientaluniversity.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-purple-300">
                          Dr. Ashish Bagwari, <br />
                          WIT Dehradun <br />
                          <a
                            href="mailto:ashishbagwari@wit.ac.in"
                            className="text-blue-500 underline"
                          >
                            ashishbagwari@wit.ac.in
                          </a>
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-blue-300">
                          Moderator: Dr. Megha Singh <br /> 8817623987
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-red-300">
                          Moderator: Ms. Sonal Yadav <br /> 8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-green-300">
                          Moderator: Ms. Sonal Yadav <br /> 8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-yellow-300">
                          Moderator: Ms. Akanasha Pal <br /> 8602716434
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-purple-300">
                          Moderator: Mr. Manoj Kumar Biswkarma <br /> 9755136775
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-blue-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-red-400">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-green-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-yellow-200-accent">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-purple-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  13:30-14:30
                </td>
                <td className="p-3 text-gray-700 text-center font-bold">
                  Lunch Break
                </td>
              </tr>

              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  14:30-16:00
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent hover:bg-yellow-300">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Session Titles */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-center py-2 px-4 bg-indigo-300">
                          TS-26
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-teal-300">
                          TS-27
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-blue-300">
                          TS-28
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-green-300">
                          TS-29
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-yellow-300">
                          TS-30
                        </td>
                      </tr>

                      {/* Speaker Details */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-indigo-300">
                          Dr. Vaibhav Agarwal, <br /> NIT Kurukshetra <br />
                          <a
                            href="mailto:vagarwal@nitkkr.ac.in"
                            className="text-blue-500 underline"
                          >
                            vagarwal@nitkkr.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-teal-300">
                          Dr. Harish Kumar Shakya, <br />
                          Manipal University, Jaipur Mathura <br />
                          <a
                            href="mailto:hkshakya.rs.cse@iitbhu.ac.in"
                            className="text-blue-500 underline"
                          >
                            hkshakya.rs.cse@iitbhu.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-blue-300">
                          Dr. Amit Kumar Mishra,
                          <br /> SISTEC Bhopal <br />
                          <a
                            href="mailto:sharma.dineshme@gmail.com"
                            className="text-blue-500 underline"
                          >
                            sharma.dineshme@gmail.com
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-green-300">
                          Dr. Neeraj Rathore , <br />
                          IGNTU, Amarkantak <br />
                          <a
                            href="mailto:neeraj.rathore@igntu.ac.in"
                            className="text-blue-500 text-xs underline"
                          >
                            neeraj.rathore@igntu.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-yellow-300">
                          Dr. Kanta Prasad Sharma, <br /> Amity University,
                          Noida <br />
                          <a
                            href="mailto:kpsharma@gn.amity.edu"
                            className="text-blue-500 underline"
                          >
                            kpsharma@gn.amity.edu
                          </a>
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-indigo-300">
                          Moderator: Dr. Megha Singh <br /> 8817623987
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-teal-300">
                          Moderator: Ms. Sonal Yadav <br /> 8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-blue-300">
                          Moderator: Ms. Sonal Yadav <br /> 8319980188
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-green-300">
                          Moderator: Ms. Akanasha Pal <br /> 8602716434
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-yellow-300">
                          Moderator: Mr. Manoj Kumar Biswkarma <br /> 9755136775
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-indigo-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-teal-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-blue-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-green-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-yellow-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-blue-500 underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 text-center">
                <td className=" bg-red-200 border-r text-gray-700 text-center font-bold whitespace-nowrap">
                  16:00-17:45
                </td>
                <td className=" text-gray-700  text-center ">
                  <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
                    <thead>
                      <tr className="bg-yellow-200-accent hover:bg-yellow-300-accent">
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room A
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room B
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room C
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room D
                        </th>
                        <th className="border border-gray-300 text-center py-2 px-4">
                          Room E
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Session Titles */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-center py-2 px-4 bg-pink-300">
                          TS-31
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-orange-300">
                          TS-32
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-teal-300">
                          TS-33
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-indigo-300">
                          TS-34
                        </td>
                        <td className="border border-gray-300 text-center py-2 px-4 bg-gray-300">
                          TS-35
                        </td>
                      </tr>

                      {/* Speaker Details */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-pink-300">
                          Dr. Shitanshu Jain, <br />
                          Manipal University, Jaipur <br />
                          <a
                            href="mailto:shitanshu.jain@jaipur.manipal.edu"
                            className="text-pink-500 underline"
                          >
                            shitanshu.jain@jaipur.manipal.edu
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-orange-300">
                          Dr. Madhu Sudan Kumar, <br /> GLA University, Mathura{" "}
                          <br />
                          <a
                            href="mailto:madhu.kumar@gla.ac.in"
                            className="text-orange-500 underline"
                          >
                            {" "}
                            madhu.kumar@gla.ac.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-teal-300">
                          Dr. Mamta Meena, <br />
                          Oriental University, Indore <br />
                          <a
                            href="mailto:mamtameena@orientaluniversity.in"
                            className="text-teal-500 underline"
                          >
                            mamtameena@orientaluniversity.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-indigo-300">
                          Dr. Amit Saxena, <br /> Oriental University, Indore{" "}
                          <br />
                          <a
                            href="mailto:amitsaxena@orientaluniversity.in"
                            className="text-indigo-500 underline"
                          >
                            amitsaxena@orientaluniversity.in
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xs py-2 px-4 bg-gray-300">
                          Dr. Chanchal Kumar, <br /> IIIT Sonipat <br />
                          <a
                            href="mailto: ckumar@iiitsonepat.ac.in"
                            className="text-gray-700 underline"
                          >
                            ckumar@iiitsonepat.ac.in
                          </a>
                        </td>
                      </tr>

                      {/* Moderator Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 py-2 px-4 text-xxs bg-pink-300">
                          Moderator: Dr. Megha Singh <br /> 8817623987
                        </td>
                        <td className="border border-gray-300 py-2 px-4 text-xxs bg-orange-300">
                          Moderator: Ms. Sonal Yadav <br /> 8319980188
                        </td>
                        <td className="border border-gray-300 py-2 px-4 text-xxs bg-teal-300">
                          Moderator: Ms. Sonal Yadav <br /> 8319980188
                        </td>
                        <td className="border border-gray-300 py-2 px-4 text-xxs bg-indigo-300">
                          Moderator: Ms. Akanasha Pal <br /> 8602716434
                        </td>
                        <td className="border border-gray-300 py-2 px-4 text-xxs bg-gray-300">
                          Moderator: Mr. Manoj Kumar Biswkarma <br /> 9755136775
                        </td>
                      </tr>

                      {/* Google Meet Information */}
                      <tr className="bg-gray-100 hover:bg-gray-200">
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-pink-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/ebn-ibst-ajo"
                            className="text-pink-500 underline"
                          >
                            https://meet.google.com/ebn-ibst-ajo
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-orange-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/hjx-xjby-mch"
                            className="text-orange-500 underline"
                          >
                            https://meet.google.com/hjx-xjby-mch
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-teal-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/mxm-fzxh-tnx"
                            className="text-teal-500 underline"
                          >
                            https://meet.google.com/mxm-fzxh-tnx
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-indigo-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uof-upey-wmi"
                            className="text-indigo-500 underline"
                          >
                            https://meet.google.com/uof-upey-wmi
                          </a>
                        </td>
                        <td className="border border-gray-300 text-xxs py-2 px-4 bg-gray-300">
                          Google Meet: <br />
                          <a
                            href="https://meet.google.com/uvh-rucp-rag"
                            className="text-gray-700 underline"
                          >
                            https://meet.google.com/uvh-rucp-rag
                          </a>
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
    </div>
  );
};

export default ConferenceSchedule;
