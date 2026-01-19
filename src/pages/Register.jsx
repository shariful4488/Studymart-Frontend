import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLink, FaLock } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) return toast.warning("Password must be 6+ characters!");
    if (!/[A-Z]/.test(password)) return toast.warning("Include at least one Uppercase letter!");
    if (!/[a-z]/.test(password)) return toast.warning("Include at least one Lowercase letter!");

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Registration Successful!");
            navigate("/");
          });
      })
      .catch((err) => toast.error(err.message));
  };

  // Google Sign In Logic
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Registration Successful!");
        navigate("/");
      })
      .catch(() => toast.error("Google sign-in failed!"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50/30 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-indigo-50 overflow-hidden relative">
        <div className="h-2 bg-indigo-600 w-full absolute top-0 left-0"></div>

        <div className="text-center mb-6 mt-2">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Create <span className="text-indigo-600">Account</span></h2>
          <p className="text-slate-500 text-sm mt-1">Join the community of learners.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-3">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full pl-11 rounded-xl focus:outline-indigo-500 h-11" required />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full pl-11 rounded-xl focus:outline-indigo-500 h-11" required />
          </div>

          <div className="relative">
            <FaLink className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered w-full pl-11 rounded-xl focus:outline-indigo-500 h-11" required />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" />
            <input 
              name="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="input input-bordered w-full px-11 rounded-xl focus:outline-indigo-500 h-11" 
              required 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full border-none shadow-lg shadow-indigo-100 h-11 rounded-xl mt-2 font-bold transition-all">
            REGISTER
          </button>
        </form>

        <div className="divider my-5 text-[10px] text-slate-400 uppercase font-bold tracking-widest">Or Continue With</div>

        {/* Google Register Button */}
        <button 
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full border-slate-200 hover:bg-slate-50 hover:text-indigo-600 rounded-xl flex gap-3 h-11 transition-all"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="google" />
          Register with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already a member? <Link to="/auth/login" className="text-indigo-600 font-bold hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;