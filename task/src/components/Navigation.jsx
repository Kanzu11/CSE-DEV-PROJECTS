import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/953358bd8fcfa53cf99bf9ff2ab7efd0b2189fa1.png';

export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="glass-nav border-b border-gray-100 sticky top-0 z-[500] bg-white/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 bg-[#0034d1] p-1.5 rounded-xl">
          <img src={logoImg} alt="JobSphere" className="h-[42px] object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {['Job Search', 'My Applications', 'Companies', 'Contact Us'].map((item) => (
            <div key={item} className="relative group cursor-pointer">
              <span className={`text-lg font-medium transition-colors ${activeTab === item ? 'text-[#0034d1]' : 'text-gray-700 hover:text-[#0034d1]'}`}
                onClick={() => setActiveTab(item)}>
                {item}
              </span>
              {activeTab === item && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#0034d1] rounded-t-lg" />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="px-8 py-2.5 bg-[#0034d1] text-white font-semibold rounded-lg hover:bg-blue-700 transition hover:shadow-lg hover:shadow-blue-500/30">
            Login
          </Link>
          <Link to="/signup" className="px-8 py-2.5 border border-[#0034d1] text-[#0034d1] font-semibold rounded-lg hover:bg-blue-50 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
