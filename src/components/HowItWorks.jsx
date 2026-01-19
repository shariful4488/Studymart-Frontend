import { FaUserPlus, FaSearch, FaComments, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "Create Account",
      desc: "Join our community by signing up with your email or Google account."
    },
    {
      id: 2,
      icon: <FaSearch />,
      title: "Find Partners",
      desc: "Search for study partners by subject, skill level, or location."
    },
    {
      id: 3,
      icon: <FaComments />,
      title: "Connect & Chat",
      desc: "Send connection requests and start discussing your learning goals."
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: "Learn Together",
      desc: "Collaborate on projects, share resources, and excel in your studies."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">How It Works</h2>
          <p className="text-slate-500">Mastering new skills is easier when you have a partner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-center p-8 rounded-3xl border border-dashed border-indigo-200 hover:border-solid hover:border-indigo-500 transition-all group">
              {/* Connector Line for Desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-indigo-100 z-0"></div>
              )}
              
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xs">
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;