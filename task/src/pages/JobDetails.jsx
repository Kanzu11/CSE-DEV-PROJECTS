import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { jobs } from '../data/dummyData';
import svgPaths from "../assets/svg-6e5oy8i6hy.js";
import imgImageFx1RemovebgPreviewss1 from "../assets/953358bd8fcfa53cf99bf9ff2ab7efd0b2189fa1.png";
// import imgEllipse1 from "../assets/4521baa0608516480ea07496e900ea688476c077.png";
import imgEllipse2 from "../assets/771d48019accbed3440140ddf3d4191421b5cf3c.png";
import imgEllipse3 from "../assets/771d48019accbed3440140ddf3d4191421b5cf3c.png";
import imgEllipse4 from "../assets/771d48019accbed3440140ddf3d4191421b5cf3c.png";
import imgEllipse5 from "../assets/771d48019accbed3440140ddf3d4191421b5cf3c.png";
import Navigation from '../components/Navigation';

function Logo() {
  return (
    <div className="bg-[#0034d1] content-stretch flex flex-col items-start p-[4.788px] relative rounded-[9.576px] shrink-0" data-name="Logo">
      <div className="h-[51.709px] relative shrink-0 w-[148.424px]" data-name="image_fx___1_-removebg-previewss 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFx1RemovebgPreviewss1} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <RouterLink to="/login" className="content-stretch flex items-start relative shrink-0 hover:opacity-80 transition" data-name="Button/Medium/Fill">
        <div className="bg-[#0034d1] content-stretch flex items-center justify-center px-[57px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button Style 1">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Login
          </p>
        </div>
      </RouterLink>
      <RouterLink to="/signup" className="content-stretch flex items-center justify-center px-[57px] py-[16px] relative rounded-[8px] shrink-0 hover:bg-black/5 transition" data-name="Button/Medium/Outline">
        <div aria-hidden="true" className="absolute border border-[#0034d1] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#2f2f2f] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sign Up
        </p>
      </RouterLink>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[-1px] px-[146px] py-[20px] shadow-[3px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1728px]" data-name="Header">
      <Logo />
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Nav Bar">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[10px] relative shrink-0" data-name="Nav Bar Content">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0034d1] text-[20px] whitespace-nowrap">Job Search</p>
          <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1177", "--transform-inner-height": "21" }}>
            <div className="flex-none rotate-[0.53deg] w-full">
              <div className="h-0 relative w-full">
                <div className="absolute inset-[-1.5px_-1.38%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 3">
                    <path d="M1.5 1.5H110.5" id="Line 1" stroke="var(--stroke-0, #0034D1)" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RouterLink to="/" className="content-stretch cursor-pointer flex items-center justify-center p-[10px] relative shrink-0" data-name="Nav Bar Content">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] text-[20px] text-left whitespace-nowrap">Home</p>
        </RouterLink>
        <RouterLink to="/" className="content-stretch cursor-pointer flex items-center justify-center p-[10px] relative shrink-0" data-name="Nav Bar Content">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] text-[20px] text-left whitespace-nowrap">Companies</p>
        </RouterLink>
        <RouterLink to="/" className="content-stretch cursor-pointer flex items-center justify-center p-[10px] relative shrink-0" data-name="Nav Bar Content">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] text-[20px] text-left whitespace-nowrap">Contact Us</p>
        </RouterLink>
      </div>
      <Container />
    </div>
  );
}

function MdiSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:search">
          <path d={svgPaths.p2c0a1600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Container">
      <MdiSearch />
      <input type="text" placeholder="Job title, Keywords, or Company name" className="font-['Inter:Extra_Light',sans-serif] font-extralight bg-transparent outline-none leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[280px]" />
    </div>
  );
}

function PajamasLocation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="pajamas:location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7414)" id="pajamas:location">
          <path clipRule="evenodd" d={svgPaths.p116d7d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7414">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Container">
      <PajamasLocation />
      <input type="text" placeholder="Location" className="font-['Inter:Extra_Light',sans-serif] font-extralight bg-transparent outline-none leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-full items-center min-h-px min-w-px relative" data-name="Container">
      <Container2 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1177", "--transform-inner-height": "21" }}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Line 1" stroke="var(--stroke-0, #C1C1C1)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function ButtonStyle() {
  return (
    <div className="bg-[#0034d1] content-stretch flex items-center justify-center px-[45.737px] py-[12.838px] relative rounded-[6.419px] shrink-0" data-name="Button Style 1">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[12.838px] relative shrink-0 text-[16.048px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function EmojioneStar() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="emojione:star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_1_7397)" id="emojione:star">
          <path d={svgPaths.p2746f400} fill="var(--fill-0, #FFCE31)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmojioneStar1() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="emojione:star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_1_7397)" id="emojione:star">
          <path d={svgPaths.p2746f400} fill="var(--fill-0, #FFCE31)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmojioneStar2() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="emojione:star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_1_7397)" id="emojione:star">
          <path d={svgPaths.p2746f400} fill="var(--fill-0, #FFCE31)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmojioneStar3() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="emojione:star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_1_7397)" id="emojione:star">
          <path d={svgPaths.p2746f400} fill="var(--fill-0, #FFCE31)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmojioneStar4() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="emojione:star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g clipPath="url(#clip0_1_7417)" id="emojione:star">
          <path d={svgPaths.p2746f400} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_7417">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Ratings() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Ratings">
      <EmojioneStar />
      <EmojioneStar1 />
      <EmojioneStar2 />
      <EmojioneStar3 />
      <EmojioneStar4 />
    </div>
  );
}

function Container5({ job }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2f2f2f] text-[36px] w-[min-content]">{job.title}</p>
      <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Container">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] text-[24px] whitespace-nowrap">{job.company}</p>
        <Ratings />
      </div>
    </div>
  );
}

function MaterialSymbolsLightBookmarkOutline() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="material-symbols-light:bookmark-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="material-symbols-light:bookmark-outline">
          <path d={svgPaths.p1cfa2c00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CarbonShare() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="carbon:share">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="carbon:share">
          <path d={svgPaths.p3f858580} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0" data-name="Icon">
      <MaterialSymbolsLightBookmarkOutline />
      <CarbonShare />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-end relative shrink-0" data-name="Container">
      <Icon />
      <div className="bg-[#0034d1] content-stretch flex items-center justify-center px-[30px] py-[20px] relative rounded-[8px] shrink-0" data-name="Button Style 1">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Apply now
        </p>
      </div>
    </div>
  );
}

function Container4({ job }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[138px]">
        <img alt="" className="absolute block max-w-none size-full rounded-2xl border" height="138" src={job.logo} width="138" />
      </div>
      <Container5 job={job} />
      <Container7 />
    </div>
  );
}

function Container8({ job }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 text-black mt-2" data-name="Container">

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Container">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Job type:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px]">{job.type}</p>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Container">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Location:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px]">{job.location}</p>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Container">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Experience:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px]">{job.experienceLevel}</p>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Container">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Salary:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[20px] whitespace-nowrap">${job.salary.toLocaleString()} {job.currency}</p>
      </div>

    </div>
  );
}

function Frame({ job }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-0 top-0 w-[783px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">Job description</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content]">
        <p className="mb-0">{job.description}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-0 top-[313px] w-[783px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">Key Responsibilities</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Design and develop user-centric interfaces for web and mobile applications.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Conduct user research, usability testing, and gather feedback to improve designs.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Create wireframes, prototypes, and high-fidelity designs using design tools like Figma, Adobe XD, or Sketch.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Collaborate with product managers and developers to ensure design consistency and feasibility.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Stay updated with the latest UI/UX trends and best practices to ensure optimal user experience.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Lead and mentor junior designers in the team, providing guidance and feedback.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[30px]">Ensure designs are aligned with brand guidelines and project requirements.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-center left-0 top-[746px] w-[783px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">Requirements</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc min-w-full relative shrink-0 text-[#2f2f2f] text-[20px] w-[min-content] whitespace-pre-wrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Bachelor’s degree in Graphic Design, Interaction Design, or a related field.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Minimum of 5 years of experience in UI/UX design, preferably in a fast-paced environment.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Strong portfolio showcasing previous UI/UX design work and design thinking process.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Proficiency in design tools such as Figma, Adobe XD, Sketch, and familiarity with prototyping tools.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Solid understanding of user-centered design principles and best practices.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Experience in conducting user research, A/B testing, and usability testing.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Strong communication skills with the ability to present and explain design concepts to stakeholders.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[30px]">Experience working with front-end developers and knowledge of HTML/CSS is a plus.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[30px]">Attention to detail and a passion for solving complex problems with creative solutions.</span>
        </li>
      </ul>
    </div>
  );
}

function Container13({ job }) {
  return (
    <div className="flex-[1_0_0] h-[642px] min-h-px min-w-px relative" data-name="Container">
      <Frame job={job} />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Wrapper({ job }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Wrapper">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[36px] items-start not-italic px-[12px] relative w-full">
          <Container8 job={job} />
          <Container13 job={job} />
        </div>
      </div>
    </div>
  );
}

function Card({ job }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] pointer-events-auto rounded-[20px] sticky top-0 w-[1066px]" data-name="Card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute bg-white inset-0 rounded-[20px] shadow-sm" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[5px_5px_10px_0px_rgba(166,171,189,0.25)]" />
      <Container4 job={job} />
      <Wrapper job={job} />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] whitespace-nowrap" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">UI/UX Designer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Barone LLC.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[53px]">
        <img alt="" className="absolute block max-w-none size-full" height="53" src={imgEllipse2} width="53" />
      </div>
      <Text />
    </div>
  );
}

function IconoirCancel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconoir:cancel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconoir:cancel">
          <path d={svgPaths.p36250880} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <IconoirCancel />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Remote</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">$200- $800</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start pl-[64px] relative w-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] whitespace-nowrap" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">UI/UX Designer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Acme Co.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[53px]">
        <img alt="" className="absolute block max-w-none size-full" height="53" src={imgEllipse3} width="53" />
      </div>
      <Text1 />
    </div>
  );
}

function IconoirCancel1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconoir:cancel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconoir:cancel">
          <path d={svgPaths.p36250880} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <IconoirCancel1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Remote</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">$200- $800</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start pl-[64px] relative w-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] whitespace-nowrap" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">UI/UX Designer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Big Kahuna Burger Ltd.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[53px]">
        <img alt="" className="absolute block max-w-none size-full" height="53" src={imgEllipse4} width="53" />
      </div>
      <Text2 />
    </div>
  );
}

function IconoirCancel2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconoir:cancel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconoir:cancel">
          <path d={svgPaths.p36250880} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <IconoirCancel2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Remote</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">$200- $800</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start pl-[64px] relative w-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] whitespace-nowrap" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">UI/UX Designer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Biffco Enterprises Ltd.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[53px]">
        <img alt="" className="absolute block max-w-none size-full" height="53" src={imgEllipse5} width="53" />
      </div>
      <Text3 />
    </div>
  );
}

function IconoirCancel3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconoir:cancel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconoir:cancel">
          <path d={svgPaths.p36250880} id="Vector" stroke="var(--stroke-0, #2F2F2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <IconoirCancel3 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Remote</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center px-[2px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <p className="font-['Inter:Extra_Light',sans-serif] font-extralight leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">$200- $800</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start pl-[64px] relative w-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function SavedJobs() {
  return (
    <div className="absolute bg-white left-[1250px] rounded-[20px] top-[229px] w-[343px] shadow-[2px_1px_10px_0px_#a6abbd]" data-name="Saved Jobs">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2f2f2f] text-[32px] whitespace-nowrap">Related Jobs</p>
        <div className="bg-white relative rounded-[10px] shrink-0 w-[295px]" data-name="Card/Small">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[8px] py-[16px] relative rounded-[inherit] w-full">
            <Container14 />
            <Container16 />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(135,135,135,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[2px_2px_5px_0px_#a6abbd]" />
        </div>
        <div className="bg-white relative rounded-[10px] shrink-0 w-[295px]" data-name="Card/Small">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[8px] py-[16px] relative rounded-[inherit] w-full">
            <Container19 />
            <Container21 />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(135,135,135,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[2px_2px_5px_0px_#a6abbd]" />
        </div>
        <div className="bg-white relative rounded-[10px] shrink-0 w-[295px]" data-name="Card/Small">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[8px] py-[16px] relative rounded-[inherit] w-full">
            <Container24 />
            <Container26 />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(135,135,135,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[2px_2px_5px_0px_#a6abbd]" />
        </div>
        <div className="bg-white relative rounded-[10px] shrink-0 w-[295px]" data-name="Card/Small">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[8px] py-[16px] relative rounded-[inherit] w-full">
            <Container29 />
            <Container31 />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(135,135,135,0.4)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[2px_2px_5px_0px_#a6abbd]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(180,180,180,0.64)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[3px_2px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function WeuiBackOutlined() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="weui:back-outlined">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:back-outlined">
          <path clipRule="evenodd" d={svgPaths.pc3ee800} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === Number(id)) || jobs[0];

  return (
    <div className="bg-[#fafafa] min-h-screen w-full font-sans">
      <Navigation activeTab="Job Search" setActiveTab={() => { }} />
      <div className="relative w-full overflow-hidden pb-20 block" data-name="Job Details Content">
        <div className="relative w-[1728px] h-[1117px] ml-[calc(50%-864px)] origin-top scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.85] 2xl:scale-95 transform-gpu mt-8 lg:mt-16">

          <div className="-translate-x-1/2 absolute h-[58px] left-1/2 rounded-[20px] top-[118.5px] w-[628px] bg-white z-10" data-name="Search">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute bg-white inset-0 rounded-[20px] shadow-sm" />
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
              <Container1 />
              <div className="content-stretch flex items-start relative shrink-0 cursor-pointer hover:opacity-90" data-name="Search Button">
                <ButtonStyle />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
          </div>

          <RouterLink to="/" className="absolute content-stretch flex gap-[8px] items-center left-[146px] top-[129px] hover:opacity-60 transition cursor-pointer z-10" data-name="Back Button">
            <WeuiBackOutlined />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#2f2f2f] text-[24px] whitespace-nowrap">Back</p>
          </RouterLink>

          <div className="absolute left-[145px] top-[229px]">
            <Card job={job} />
          </div>

          <SavedJobs />
        </div>
      </div>
    </div>
  );
}