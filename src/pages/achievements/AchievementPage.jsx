import Timeline from "../../components/Timeline";
import achievementImg from "../../assets/achievementimg.jpg";

const AchievementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden h-screen w-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${achievementImg})`,
          }}
        ></div>

        {/* Decorative Elements */}
        {/* <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full translate-x-1/2 translate-y-1/2"></div> */}

        {/* Content */}
        <div className="relative z-10 text-center h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Achievements
            </h1>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Transition Element */}
        {/* <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-50 to-transparent"></div> */}

        <Timeline />
      </div>
    </div>
  );
};

export default AchievementPage;
