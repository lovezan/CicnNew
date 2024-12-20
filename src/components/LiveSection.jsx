const LiveSection = ({ handleClick }) => {
  // Smooth scroll to the section based on the item clicked
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Close menu and scroll to the target section
  const handleItemClick = (item) => {
    if (handleClick) {
      handleClick(item);
    }
    scrollToSection(item); // Scroll to the target section
  };

  // Redirect to YouTube live stream
  const redirectToYouTube = () => {
    window.open("https://youtube.com/@orientaluniversityindore", "_blank");
  };

  return (
    <section className="bg-gradient-to-r from-[#e0f7fa] to-[#81d4fa] p-8 rounded-xl shadow-2xl mt-6 max-w-5xl mx-auto">
      <div className="text-center space-y-6">
        {/* Conference Standards Info */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-red-600 leading-relaxed max-w-3xl mx-auto">
          Conference proceedings that meet IEEE quality standards may be
          eligible for inclusion in the IEEE Xplore Digital Library. IEEE
          reserves the right not to publish proceedings that do not meet these
          standards.
        </p>

        {/* Live Streaming Info */}
        <p className="text-base  md:text-lg font-normal text-red-600">
          Live Streaming of Opening Ceremony and Keynote CICN 2024, Oriental
          University, Indore (MP)
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          {/* Watch Live Button */}
          {/* Watch Live Button */}
          <button
            onClick={redirectToYouTube}
            className="bg-gradient-to-r from-red-300 to-red-400 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Watch Live on YouTube
          </button>

          {/* Important Dates/Scheduling Button */}
          <button
            onClick={() => handleItemClick("ImportantDates Scheduling")}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
