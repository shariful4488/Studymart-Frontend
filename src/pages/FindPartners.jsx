import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";
import { useNavigate } from "react-router";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState(""); 
  const [sort, setSort] = useState("");     
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      try {
        
        const { data } = await axios.get(`http://localhost:5000/partners?search=${search}&sort=${sort}`);
        setPartners(data);
        setLoading(false);
      } catch (error) {
        console.error("Data load hote somossa hochhe:", error);
        setLoading(false);
      }
    };
    fetchPartners();
  }, [search, sort]); 

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border border-indigo-50">
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-4 text-slate-400" />
            <input 
              onChange={(e) => setSearch(e.target.value)}
              type="text" 
              placeholder="Search by Subject (e.g. Programming)" 
              className="input w-full pl-12 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <FaSortAmountDown className="text-indigo-600" />
            <select 
              onChange={(e) => setSort(e.target.value)} 
              className="select select-bordered w-full md:w-56 rounded-xl border-slate-200"
            >
              <option value="">Sort by Experience</option>
              <option value="Beginner">Beginner to Expert</option>
              <option value="Expert">Expert to Beginner</option>
            </select>
          </div>
        </div>

       
        {loading ? (
          <div className="flex justify-center py-20"><span className="loading loading-bars loading-lg text-indigo-600"></span></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map(partner => (
              <div key={partner._id} className="card bg-white shadow-sm border border-slate-100 rounded-[2rem] p-6 hover:shadow-2xl transition-all group">
                <img src={partner.profileimage} alt={partner.name} className="w-24 h-24 rounded-2xl object-cover mb-4 ring-4 ring-indigo-50" />
                <h3 className="text-2xl font-bold text-slate-800">{partner.name}</h3>
                <p className="text-indigo-600 font-bold mb-2">{partner.subject}</p>
                <div className="space-y-1 text-sm text-slate-500 mb-6 font-medium">
                  <p>Mode: {partner.studyMode}</p>
                  <p>Level: {partner.experienceLevel}</p>
                </div>
                <button 
                  onClick={() => navigate(`/partner/${partner._id}`)}
                  className="btn bg-slate-900 text-white border-none rounded-xl hover:bg-indigo-600 transition-colors"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindPartners;