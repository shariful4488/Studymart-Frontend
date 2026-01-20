import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUserGraduate, FaEnvelope, FaBook } from "react-icons/fa";

const MyConnections = () => {
    const { user } = useContext(AuthContext);
    const [connections, setConnections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchConnections();
        }
    }, [user?.email]);

    const fetchConnections = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/my-connections/${user?.email}`);
            setConnections(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching connections:", error);
            setLoading(false);
        }
    };

    // Delete Operation
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4F46E5",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`http://localhost:5000/connection/${id}`);
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your connection has been deleted.", "success");
                        // UI theke remove kora
                        const remaining = connections.filter(conn => conn._id !== id);
                        setConnections(remaining);
                    }
                } catch (error) {
                    Swal.fire("Error", "Failed to delete", "error");
                }
            }
        });
    };

    if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-black text-slate-800 mb-8">My <span className="text-indigo-600">Connections</span></h2>

            <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-100">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="py-5 pl-8">Partner Details</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {connections.length > 0 ? (
                            connections.map((conn) => (
                                <tr key={conn._id} className="hover:bg-slate-50 transition-colors">
                                    <td className="pl-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                                                <FaUserGraduate />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">{conn.partnerName}</p>
                                                <p className="text-xs text-slate-400 flex items-center gap-1">
                                                    <FaEnvelope /> {conn.partnerEmail}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                                            <FaBook className="text-indigo-400" />
                                            {conn.subject}
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost font-bold text-indigo-600 bg-indigo-50 border-none px-4 py-3">
                                            {conn.status}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button 
                                            onClick={() => handleDelete(conn._id)}
                                            className="btn btn-ghost text-red-500 hover:bg-red-50 rounded-xl"
                                        >
                                            <FaTrashAlt size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-10 text-slate-400 italic font-medium">
                                    No connections found. Start requesting study partners!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyConnections;