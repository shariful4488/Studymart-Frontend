import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rakibul Islam",
      role: "MERN Stack Learner",
      review: "Finding a study partner here was a game changer for my Redux learning journey!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=10"
    },
    {
      id: 2,
      name: "Jannatun Nayem",
      role: "Data Science Student",
      review: "The community is very helpful. Found an amazing partner for my ML projects.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=11"
    },
    {
      id: 3,
      name: "Sohanur Rahman",
      role: "UI Designer",
      review: "Best platform to practice Figma case studies with other passionate designers.",
      rating: 4,
      img: "https://i.pravatar.cc/150?u=13"
    }
  ];

  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">What Our Users Say</h2>
          <p className="text-indigo-100">Thousands of students are already learning together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 relative">
              <FaQuoteLeft className="text-indigo-300 text-4xl mb-6 opacity-50" />
              <p className="text-white mb-8 italic">"{rev.review}"</p>
              
              <div className="flex items-center gap-4">
                <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-indigo-400" />
                <div>
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <p className="text-indigo-200 text-xs">{rev.role}</p>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 flex gap-1 text-orange-400 text-xs">
                {[...Array(rev.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;