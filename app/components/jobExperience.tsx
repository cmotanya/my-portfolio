import { motion } from "framer-motion";
import { educationItems } from "../lib/educationItems";

const JobExperience = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">
          Educational Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-200"></div>

          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-blue-500">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                    {item.degree}
                  </h3>
                  <p className="mb-2 font-medium text-blue-600">
                    {item.institution}
                  </p>
                  <p className="mb-2 text-gray-600">{item.location}</p>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="mt-2 text-gray-500">{item.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
