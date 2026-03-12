import React from 'react';
import heroCharacter from '../assets/hero_3d_character.png';
import heroBgBlob from '../assets/image11.png';
import heroBgPattern from '../assets/image1.png';
import heroTopLeftImg from '../assets/13312648dc84eecd72927d8753825e992c546284.png';
import heroComputerImg from '../assets/63f3bcacacccd20c6690f6b2743754b93bb9a538.png';

export default function HeroSection() {
  return (
    <div className="bg-[#0034d1] relative overflow-hidden">
      <img src={heroBgPattern} alt="" className="absolute left-0 top-0 w-[40%] h-auto object-contain object-left-top pointer-events-none opacity-90" />
      <img
        src={heroTopLeftImg}
        alt=""
        className="hidden md:block absolute -left-10 top-0 w-[250px] lg:w-[250px] opacity-70 h-auto object-contain pointer-events-none drop-shadow-xl z-0"
      />
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[380px] flex items-center justify-between relative z-10">
        <div className="max-w-2xl text-white relative z-20">
          <h1 className="text-5xl lg:text-[64px] font-bold leading-tight mb-4 drop-shadow-md">
            Find Your Dream<br />Job with Ease
          </h1>
          <p className="text-xl text-blue-100 font-light drop-shadow-sm mb-1">
            Search, Apply, and Track Job Applications
          </p>
          <p className="text-xl text-blue-100 font-light drop-shadow-sm">
            All in One Place
          </p>
        </div>
        <img
          src={heroComputerImg}
          alt=""
          className="hidden lg:block absolute right-[340px] top-12 w-[390px] xl:w-[380px] opacity-70 object-contain pointer-events-none drop-shadow-xl z-0"
        />
        <div className="hidden lg:block absolute right-20 -bottom-10 w-[600px] h-auto pointer-events-none z-10">
          <img
            src={heroBgBlob}
            alt=""
            className="absolute right-[100px] bottom-5 w-[200px] scale-x-110 h-auto select-none"
          />
          <img
            src={heroCharacter}
            alt="Professional Character"
            className="relative right-12 bottom-0 w-[400px] ml-auto object-contain drop-shadow-2xl translate-y-8 hover:translate-y-6 transition-transform duration-500 z-10"
          />
        </div>
      </div>
    </div>
  );
}
