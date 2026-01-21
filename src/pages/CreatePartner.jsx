import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CreatePartner = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const profileData = {
            name: form.name.value,
            profileimage: form.photo.value,
            subject: form.subject.value,
            studyMode: form.studyMode.value,
            availabilityTime: form.availability.value,
            location: form.location.value,
            experienceLevel: form.experience.value,
            rating: 5,
            partnerCount: 0,
            email: user?.email 
        };

        try {
            const res = await axios.post('https://studymate-backend-two.vercel.app/partners', profileData);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Created!',
                    text: 'Now you can see it in Find Partners page',
                });
                form.reset();
            }
        } catch (error) {
            Swal.fire('Error', 'Server is not running!', 'error');
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-10 bg-white shadow-2xl rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-black text-center mb-8 text-indigo-600">Create Study Profile</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label font-bold">Full Name</label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered rounded-xl" required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">Photo URL</label>
                    <input type="text" name="photo" placeholder="Image link" className="input input-bordered rounded-xl" required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">Subject</label>
                    <input type="text" name="subject" placeholder="Math, Biology etc." className="input input-bordered rounded-xl" required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">Study Mode</label>
                    <select name="studyMode" className="select select-bordered rounded-xl">
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label font-bold">Availability</label>
                    <input type="text" name="availability" placeholder="e.g. 7pm - 10pm" className="input input-bordered rounded-xl" required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">Experience</label>
                    <select name="experience" className="select select-bordered rounded-xl">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label font-bold">Location</label>
                    <input type="text" name="location" placeholder="City Name" className="input input-bordered rounded-xl" required />
                </div>
                <div className="form-control">
                    <label className="label font-bold">Email</label>
                    <input type="email" value={user?.email} readOnly className="input input-bordered bg-gray-50 rounded-xl" />
                </div>
                <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white md:col-span-2 rounded-xl mt-4">Create Profile</button>
            </form>
        </div>
    );
};

export default CreatePartner;