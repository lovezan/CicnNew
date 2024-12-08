import { useState } from "react";
import {
  FaCreditCard,
  FaCashRegister,
  FaMapMarkerAlt,
  FaCopy,
} from "react-icons/fa";
import pmu2 from "../../assets/pmu2.jpeg";
import images from "../../assets/oa1.jpg";
import download from "../../assets/ou2.jpeg";

const Registration = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(false), 2000); // Reset "copied" status after 2 seconds
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-justify">
        <center>
          <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Registration
          </h1>
        </center>
        <p className="text-base md:text-lg text-gray-700 mb-4 ">
          The fee structure is as per the table below.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4 ">
          <strong>
            Note that only one paper and one presenter are covered by an author
            registration. Authors with multiple papers need to register extra
            papers as per the chart below. However, if a single author is
            presenting multiple papers, some relaxation in registration fees
            will be given. This is not applicable for students. If more than one
            author is coming for the presentation, additional amounts for
            attendees must be credited.{" "}
          </strong>
        </p>

        <strong className="text-base md:text-lg text-gray-700 mb-4 ">
          Normal paper length must be limited to 5 pages and each extra page
          costs will be Rs 800 per page (for indian) and $20 per page (others)
        </strong>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-center">Indian Author</th>
                <th className="py-3 px-4 text-center">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">IEEE Member</td>
                <td className="py-3 px-4 border-b text-center">Rs 5000</td>
                <td className="py-3 px-4 border-b text-center">$200</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Non-IEEE Member</td>
                <td className="py-3 px-4 border-b text-center">Rs 6000</td>
                <td className="py-3 px-4 border-b text-center">$250</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Ph.D. Students</td>
                <td className="py-3 px-4 border-b text-center">Rs 4000</td>
                <td className="py-3 px-4 border-b text-center">$150</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Students UG/PG</td>
                <td className="py-3 px-4 border-b text-center">Rs 3500</td>
                <td className="py-3 px-4 border-b text-center">$100</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Institute Registration</td>
                <td className="py-3 px-4 border-b text-center">Rs 12000</td>
                <td className="py-3 px-4 border-b text-center">
                  $300 (Two persons)
                </td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">
                  Attendance/Co-authors/Companion
                </td>
                <td className="py-3 px-4 border-b text-center">Rs 1000</td>
                <td className="py-3 px-4 border-b text-center">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-800 mb-4">
            <strong>
              <u>Payment Modes:</u>
            </strong>
          </p>

         

          {/* Bank Transfer Details Section */}
          <div className="mb-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
              <i className="fas fa-university mr-2 text-indigo-600"></i> Bank
              Transfer Details
            </h3>
            <div className="space-y-2">
              {/* Account Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-user-circle text-indigo-500 mr-2"></i>
                  <span className="text-gray-700">
                    <strong>Account Name:</strong> Machine Intelligence Research
                    Labs
                  </span>
                </div>
                <button
                  onClick={() =>
                    handleCopy("Machine Intelligence Research Labs")
                  }
                  className={`ml-2 transition duration-200 ${
                    copied === "Machine Intelligence Research Labs"
                      ? "text-yellow-500 bg-black"
                      : "text-indigo-600"
                  } hover:text-indigo-800`}
                  title="Copy Account Name"
                >
                  {copied === "Machine Intelligence Research Labs" ? (
                    "Copied!"
                  ) : (
                    <FaCopy />
                  )}
                </button>
              </div>

              {/* Account Number */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-hashtag text-indigo-500 mr-2"></i>
                  <span className="text-gray-700">
                    <strong>Account Number:</strong> 019701005475
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("019701005475")}
                  className={`ml-2 transition duration-200 ${
                    copied === "019701005475"
                      ? "text-yellow-500 bg-black"
                      : "text-indigo-600"
                  } hover:text-indigo-800`}
                  title="Copy Account Number"
                >
                  {copied === "019701005475" ? "Copied!" : <FaCopy />}
                </button>
              </div>

              {/* IFSC Code */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-code text-indigo-500 mr-2"></i>
                  <span className="text-gray-700">
                    <strong>IFSC Code:</strong> ICIC0000197
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("ICIC0000197")}
                  className={`ml-2 transition duration-200 ${
                    copied === "ICIC0000197"
                      ? "text-yellow-500 bg-black"
                      : "text-indigo-600"
                  } hover:text-indigo-800`}
                  title="Copy IFSC Code"
                >
                  {copied === "ICIC0000197" ? "Copied!" : <FaCopy />}
                </button>
              </div>

              {/*SWIFT Code */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-code text-indigo-500 mr-2"></i>
                  <span className="text-gray-700">
                    <strong>SWIFT Code:</strong> ICICINBBNRI
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("ICICINBBNRI")}
                  className={`ml-2 transition duration-200 ${
                    copied === "ICICINBBNRI"
                      ? "text-yellow-500 bg-black"
                      : "text-indigo-600"
                  } hover:text-indigo-800`}
                  title="Copy ICICINBBNRI"
                >
                  {copied === "ICICINBBNRI" ? "Copied!" : <FaCopy />}
                </button>
              </div> */}
              {/* Branch */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-code text-indigo-500 mr-2"></i>
                  <span className="text-gray-700">
                    <strong>Branch:</strong> City Center, Gwalior
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("City Center, Gwalior")}
                  className={`ml-2 transition duration-200 ${
                    copied === "City Center, Gwalior"
                      ? "text-yellow-500 bg-black"
                      : "text-indigo-600"
                  } hover:text-indigo-800`}
                  title="Copy City Center, Gwalior"
                >
                  {copied === "City Center, Gwalior" ? "Copied!" : <FaCopy />}
                </button>
              </div>

              {/* Bank Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-building text-indigo-500 mr-2"></i>
                  <span className="text-gray-700">
                    <strong>Bank Name:</strong> ICICI Bank
                  </span>
                </div>
                <button
                  onClick={() => handleCopy("ICICI Bank")}
                  className={`ml-2 transition duration-200 ${
                    copied === "ICICI Bank"
                      ? "text-yellow-500 bg-black"
                      : "text-indigo-600"
                  } hover:text-indigo-800`}
                  title="Copy Bank Name"
                >
                  {copied === "ICICI Bank" ? "Copied!" : <FaCopy />}
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-2">
              <strong>
                <u>Payment through PayPal can be made at: </u>
              </strong>
              <br />

              <a
                href="mailto:abhineeet@gmail.com"
                className="text-blue-500 hover:underline"
              >
                abhineeet@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <img
                src={pmu2}
                alt="Image 1"
                className="w-44 h-32 object-cover rounded-lg shadow-md"
              /> */}
              <img
                src={images}
                alt="Image 2"
                className="w-44 h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src={download}
                alt="Image 3"
                className="w-44 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
