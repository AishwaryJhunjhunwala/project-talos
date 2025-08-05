import { Calendar } from "lucide-react";

const AchievementCard = ({ title, description, year, isLeft, index }) => {
  return (
    <div
      className={`flex items-center w-full mb-16 ${isLeft ? "justify-start" : "justify-end"}`}
      data-index={index}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={`
          w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl border border-gray-200
          transition-all duration-500 hover:scale-105 group cursor-pointer
          bg-white hover:border-blue-300
        `}
      >
        <div className="p-6">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:texT-[#0B2044] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>

          <div className="mt-4 h-1 w-16 bg-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
