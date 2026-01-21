import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle, FaEnvelope, FaIdBadge, FaCalendarAlt } from "react-icons/fa";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-indigo-50">
                
                <div className="bg-indigo-600 h-32 w-full"></div>
                
                <div className="px-8 pb-12">
                    <div className="relative -mt-16 mb-6 flex justify-center md:justify-start">
                        <img 
                            src={user?.photoURL || "https://i.ibb.co/2kR5w5G/user.png"} 
                            alt="Profile" 
                            className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-lg bg-white"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-black text-slate-800">{user?.displayName || "User Name"}</h2>
                            <p className="text-indigo-600 font-bold">StudyMate Member</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                <div className="text-indigo-500 bg-white p-3 rounded-xl shadow-sm">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">Email Address</p>
                                    <p className="text-slate-700 font-medium">{user?.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                <div className="text-indigo-500 bg-white p-3 rounded-xl shadow-sm">
                                    <FaIdBadge size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">User ID</p>
                                    <p className="text-slate-700 font-medium truncate w-40">{user?.uid}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl md:col-span-2">
                                <div className="text-indigo-500 bg-white p-3 rounded-xl shadow-sm">
                                    <FaCalendarAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">Account Created</p>
                                    <p className="text-slate-700 font-medium">
                                        {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="btn bg-slate-900 text-white w-full rounded-2xl hover:bg-indigo-600 border-none h-14 font-bold transition-all">
                                Edit Account Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;