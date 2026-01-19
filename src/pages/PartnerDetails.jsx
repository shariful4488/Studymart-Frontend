import { useLoaderData } from "react-router";
import { FaStar, FaMapMarkerAlt, FaBookOpen, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const PartnerDetails = () => {
  const partner = useLoaderData();

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-indigo-50 flex flex-col md:flex-row">
          
          {/* Left Side: Profile Image & Basic Info */}
          <div className="md:w-2/5 bg-indigo-600 p-12 text-center text-white flex flex-col items-center justify-center">
            <div className="relative mb-6">
              <img 
                src={partner.image} 
                className="w-48 h-48 rounded-[2.5rem] object-cover border-8 border-white/10 shadow-2xl" 
                alt={partner.name} 
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-indigo-600"></div>
            </div>
            <h2 className="text-3xl font-black mb-2">{partner.name}</h2>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-bold">
              <FaStar className="text-yellow-400" /> {partner.rating} Rating
            </div>
          </div>

          {/* Right Side: Detailed Info */}
          <div className="md:w-3/5 p-12 space-y-8">
            <div>
              <h3 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2">Subject of Interest</h3>
              <div className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                <FaBookOpen className="text-indigo-500" /> {partner.subject}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">About Partner</h3>
              <p className="text-slate-600 leading-relaxed italic bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-500">
                "{partner.bio}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Location</p>
                  <p className="font-bold text-slate-700">{partner.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Response Rate</p>
                  <p className="font-bold text-slate-700">Quick (within 1 hr)</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 btn bg-indigo-600 hover:bg-indigo-700 text-white border-none h-14 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 transition-all active:scale-95">
                Send Request
              </button>
              <button className="btn btn-outline border-slate-200 text-slate-600 h-14 rounded-2xl px-8 hover:bg-slate-50 transition-all">
                <FaWhatsapp className="text-xl text-green-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;