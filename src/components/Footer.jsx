import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaGraduationCap, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 text-2xl font-black text-white">
            <div className="bg-indigo-600 p-2 rounded-lg">
                <FaGraduationCap className="text-white" />
            </div>
            StudyMate
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            StudyMate is the ultimate platform to find study partners, collaborate on projects, and achieve your academic goals together.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"><FaFacebook /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"><FaLinkedin /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"><FaGithub /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-indigo-500"></span>
          </h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Home</Link></li>
            <li><Link to="/find-partners" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Find Partners</Link></li>
            <li><Link to="/auth/login" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Login</Link></li>
            <li><Link to="/auth/register" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Register</Link></li>
          </ul>
        </div>

        {/* Services/Support */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
            Support
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-indigo-500"></span>
          </h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Help Center</a></li>
            <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Terms of Service</a></li>
            <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-indigo-500"></span>
          </h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-indigo-500 mt-1" />
              <span>support@studymate.com</span>
            </li>
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="text-indigo-500 mt-1" />
              <span>01305242248</span>
            </li>
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-indigo-500 mt-1" />
              <span>Sylhet, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} StudyMate. All Rights Reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;