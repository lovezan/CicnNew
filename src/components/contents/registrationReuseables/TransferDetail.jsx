const TransferDetail = ({ label, value, handleCopy, copied }) => {
  const isCopied = copied === value;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <i
          className={`fas fa-${
            label === "Account Name"
              ? "user-circle"
              : label === "Account Number"
              ? "hashtag"
              : label === "IFSC Code"
              ? "code"
              : label === "SWIFT Code"
              ? "globe"
              : label === "Bank Name"
              ? "bank"
              : "map-marker-alt"
          } text-blue-500 mr-3`}
        ></i>
        <span className="text-gray-800 font-medium">
          <strong>{label}:</strong> {value}
        </span>
      </div>
      <button
        onClick={() => handleCopy(value)}
        className={`ml-3 py-1 px-3 rounded transition duration-200 ${
          isCopied
            ? "bg-green-500 text-white"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        title={`Copy ${label}`}
      >
        {isCopied ? "Copied!" : <FaCopy />}
      </button>
    </div>
  );
};
