import { useEffect, useState, useContext } from "react"; 
import { FaStar, FaMapMarkerAlt, FaBookOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router"; 
import { AuthContext } from "../provider/AuthProvider"; 
import axios from "axios";

const TopPartners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopPartners = async () => {
      try {
        const res = await axios.get("https://studymate-backend-two.vercel.app/partners");
        setPartners(res.data.slice(0, 6)); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchTopPartners();
  }, []);

  const handleViewProfile = (id) => {
    if (user) {
      navigate(`/partner/${id}`);
    } else {
      navigate("/auth/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-indigo-600"></span>
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-800">
              Top Study <span className="text-indigo-600">Partners</span>
            </h2>
            <p className="text-slate-500 mt-2 font-medium">Connect with {partners.length} expert learners this week.</p>
          </div>
          <Link to="/find-partners" className="btn btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-600 rounded-full px-8">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner._id} 
              className="bg-white p-8 rounded-[2rem] border border-transparent shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="relative">
                  <img 
                    src={partner.profileimage} 
                    className="w-20 h-20 rounded-2xl object-cover ring-4 ring-indigo-50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
                </div>
                <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                  <FaStar /> {partner.rating || "5.0"}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {partner.name}
                </h3>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs bg-indigo-50 w-fit px-3 py-1 rounded-lg">
                  <FaBookOpen /> {partner.subject}
                </div>
                <p className="text-slate-500 text-sm">
                  {partner.experienceLevel} Level | {partner.studyMode}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase">
                  <FaMapMarkerAlt className="text-indigo-400" /> {partner.location}
                </span>
                <button 
                  onClick={() => handleViewProfile(partner._id)}
                  className="text-indigo-600 font-bold text-sm hover:underline"
                >
                  View Profile 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPartners;