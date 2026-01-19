import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router"; 
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Welcome back! Login successful.");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Invalid email or password"));
  };

  const handleGoogle = () => {
    signInWithGoogle().then(() => {
      toast.success("Google Login Success!");
      navigate(from, { replace: true });
    }).catch(() => toast.error("Google Login Failed"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50/30 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-indigo-50 overflow-hidden">
        <div className="h-2 bg-indigo-600 w-full -mt-8 -mx-8 mb-8"></div>
        <h2 className="text-3xl font-black text-center text-slate-800 mb-2">Welcome Back!</h2>
        <p className="text-center text-slate-500 mb-8">Log in to continue your journey.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full focus:outline-indigo-500 rounded-xl" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full focus:outline-indigo-500 rounded-xl" required />
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full border-none shadow-lg shadow-indigo-200 h-12 rounded-xl">Login</button>
        </form>

        <div className="divider my-8 text-xs text-slate-400">OR SECURE LOGIN WITH</div>
        
        <button onClick={handleGoogle} className="btn btn-outline w-full border-slate-200 hover:bg-slate-50 hover:text-indigo-600 rounded-xl flex gap-3 h-12">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="google" />
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-slate-600">
          New to StudyMate? <Link to="/auth/register" className="text-indigo-600 font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;