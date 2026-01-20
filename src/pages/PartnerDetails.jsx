import { useLoaderData } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaUser, FaBook, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const PartnerDetails = () => {
  const partner = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSendRequest = async () => {
    const connectionData = {
      partnerId: partner._id,
      partnerName: partner.name,
      partnerEmail: partner.email,
      senderEmail: user?.email,
      senderName: user?.displayName,
      subject: partner.subject,
      status: "Pending"
    };

    try {
     
      const res = await axios.post('http://localhost:5000/connections', connectionData);
      
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Request Sent!',
          text: `You have successfully sent a request to ${partner.name}`,
          confirmButtonColor: '#4F46E5'
        });
      }
    } catch (error) {
        console.error(error);
        Swal.fire('Error', 'Failed to send request', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-indigo-50">
        
        
        <div className="bg-indigo-600 p-10 text-white flex flex-col md:flex-row items-center gap-8">
          <img 
            src={partner.profileimage} 
            alt={partner.name} 
            className="w-40 h-40 rounded-3xl object-cover border-4 border-white/20 shadow-2xl" 
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black mb-2">{partner.name}</h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {partner.studyMode}
              </span>
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {partner.experienceLevel} Level
              </span>
            </div>
          </div>
        </div>

       
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-4">Contact Information</h3>
            <div className="flex items-center gap-4 text-slate-600">
              <FaEnvelope className="text-indigo-500 text-xl" />
              <span className="font-medium">{partner.email}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <FaMapMarkerAlt className="text-indigo-500 text-xl" />
              <span className="font-medium">{partner.location}</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 border-b pb-4">Study Details</h3>
            <div className="flex items-center gap-4 text-slate-600">
              <FaBook className="text-indigo-500 text-xl" />
              <span className="font-medium">Subject: {partner.subject}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <FaClock className="text-indigo-500 text-xl" />
              <span className="font-medium">Available: {partner.availabilityTime}</span>
            </div>
          </div>

         
          <div className="md:col-span-2 bg-indigo-50 p-6 rounded-3xl flex justify-between items-center">
            <div>
              <p className="text-indigo-600 font-bold text-lg">Current Study Partners</p>
              <p className="text-slate-500">Already working with {partner.partnerCount || 0} students</p>
            </div>
            <div className="text-4xl font-black text-indigo-600">
              {partner.partnerCount || 0}
            </div>
          </div>

         
          <div className="md:col-span-2">
            <button 
              onClick={handleSendRequest}
              className="w-full py-5 bg-slate-900 text-white text-xl font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 hover:shadow-indigo-100"
            >
              Send Partner Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;