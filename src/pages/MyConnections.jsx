import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt, FaEdit, FaCheckCircle, FaTimes } from "react-icons/fa";

const MyConnections = () => {
    const { user } = useContext(AuthContext);
    const [connections, setConnections] = useState([]);
    const [selectedConn, setSelectedConn] = useState(null); 

    useEffect(() => {
        if (user?.email) fetchConnections();
    }, [user?.email]);

    const fetchConnections = async () => {
        const { data } = await axios.get(`http://localhost:5000/my-connections/${user?.email}`);
        setConnections(data);
    };

   
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            partnerName: e.target.name.value,
            subject: e.target.subject.value
        };

        try {
            const res = await axios.put(`http://localhost:5000/connection-update/${selectedConn._id}`, updatedData);
            if (res.data.modifiedCount > 0) {
                setConnections(connections.map(c => c._id === selectedConn._id ? { ...c, ...updatedData } : c));
                Swal.fire("Updated!", "Info updated successfully", "success");
                setSelectedConn(null); // Modal close
            }
        } catch (error) {
            Swal.fire("Error", "Update failed", "error");
        }
    };

    // Delete Logic
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/connection/${id}`);
                if (res.data.deletedCount > 0) {
                    setConnections(connections.filter(c => c._id !== id));
                    Swal.fire("Deleted!", "", "success");
                }
            }
        });
    };

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-black mb-8">My <span className="text-indigo-600">Connections</span></h2>
            
            <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-slate-50">
                            <th>Partner Name</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {connections.map(conn => (
                            <tr key={conn._id}>
                                <td className="font-bold">{conn.partnerName}</td>
                                <td>{conn.subject}</td>
                                <td><span className="badge badge-ghost">{conn.status}</span></td>
                                <td className="flex gap-2">
                                    <button onClick={() => setSelectedConn(conn)} className="btn btn-sm bg-indigo-100 text-indigo-600 border-none">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(conn._id)} className="btn btn-sm bg-red-100 text-red-600 border-none">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           
            {selectedConn && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in zoom-in duration-200">
                        <button onClick={() => setSelectedConn(null)} className="absolute top-6 right-6 text-slate-400 hover:text-red-500">
                            <FaTimes size={20} />
                        </button>
                        <h3 className="text-2xl font-black mb-6">Update <span className="text-indigo-600">Connection</span></h3>
                        
                        <form onSubmit={handleUpdateSubmit} className="space-y-4">
                            <div className="form-control">
                                <label className="label font-bold text-slate-600">Partner Name</label>
                                <input type="text" name="name" defaultValue={selectedConn.partnerName} className="input input-bordered rounded-xl" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold text-slate-600">Subject</label>
                                <input type="text" name="subject" defaultValue={selectedConn.subject} className="input input-bordered rounded-xl" required />
                            </div>
                            <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full rounded-xl border-none mt-4">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyConnections;