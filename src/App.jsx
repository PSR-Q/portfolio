import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Database, 
  Layout, 
  Smartphone, 
  Server, 
  Cpu, 
  Code, 
  ExternalLink,
  ChevronDown,
  Bot,       
  FileText,
  Eye,       
  Waves,     
  Cpu as Chip, 
  Zap,
  X,
  Box,
  ScanLine,
  Camera,   
  Monitor,
  Microchip,
  AppWindowMac
} from 'lucide-react';

// Import assets
import { assets } from './assets';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSchematics, setShowSchematics] = useState(false); 

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills Data
  const skills = {
    languages: [
      { name: "Python", url: assets.logos.python },
      { name: "PHP", url: assets.logos.php },
      { name: "Java", url: assets.logos.java },
      { name: "C++", url: assets.logos.cpp },
      { name: "JavaScript", url: assets.logos.javascript },
      { name: "Dart", url: assets.logos.dart },
      { name: "Assembly", icon: <Cpu size={18} /> }
    ],
    frontend: [
      { name: "React", url: assets.logos.react },
      { name: "HTML5", url: assets.logos.html5 },
      { name: "CSS3", url: assets.logos.css3 },
      { name: "Tailwind CSS", url: assets.logos.tailwind }
    ],
    mobile: [
      { name: "Flutter", url: assets.logos.flutter }
    ],
    database: [
      { name: "PostgreSQL", url: assets.logos.postgresql },
      { name: "MySQL", url: assets.logos.mysql },
      { name: "MSSQL", url: assets.logos.mssql },
      { name: "SQLite", url: assets.logos.sqlite }
    ],
    tools: [
      { name: "Docker", url: assets.logos.docker },
      { name: "Node-RED", url: assets.logos.nodered },
      { name: "Postman", url: assets.logos.postman }
    ],
    hardware: [
      { name: "Computer Vision", icon: <Camera size={18} /> }, 
      { name: "Robotics", icon: <Bot size={18} /> },           
      { name: "Embedded Systems", icon: <Monitor size={18} /> }, 
      { name: "IoT Hardware", icon: <Server size={18} /> },
      { name: "3D Modeling", icon: <Box size={18} /> }, 
      { name: "SketchUp", url: assets.logos.sketchup } 
    ],
    cms: [
      { name: "WordPress", url: assets.logos.wordpress }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  const NavLink = ({ id, text, number }) => (
    <button 
      onClick={() => scrollToSection(id)}
      className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-mono text-xs md:text-sm"
    >
      <span className="text-cyan-400">{number}.</span>
      <span className="group-hover:translate-x-1 transition-transform">{text}</span>
    </button>
  );

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-400 overflow-x-hidden relative">
      
      <div className="aurora-bg"></div>
      <div className="aurora-accent"></div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f]/80 shadow-lg backdrop-blur-md py-4' : 'bg-transparent py-6'} px-6 md:px-12 flex justify-between items-center`}>
        <div 
          onClick={() => scrollToSection('home')}
          className="text-cyan-400 font-mono font-bold text-xl tracking-tighter border-2 border-cyan-400 p-1 rounded hover:bg-cyan-400/10 cursor-pointer transition-colors hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          &gt;_ PT
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink id="home" text="HOME" number="01" />
          <NavLink id="skills" text="SKILLS" number="02" />
          <NavLink id="projects" text="PROJECTS" number="03" />
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-mono text-sm rounded transition-all active:scale-95 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            CONTACT_ME
          </button>
        </div>
        
        <div className="md:hidden text-cyan-400 cursor-pointer">
          <Terminal size={24} />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-6xl mx-auto pt-20 relative z-10">
        <p className="font-mono text-cyan-400 mb-5 animate-fade-in-down">Hi, my name is</p>
        
        <SpotlightText className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight leading-tight cursor-default">
          Pongsarun Tisuwan.
        </SpotlightText>
        
        <SpotlightText 
          radius={350} 
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight leading-tight cursor-default"
        >
          Bridging the Physical and Digital Worlds.
        </SpotlightText>
        
        <p className="max-w-xl text-slate-400 text-lg mb-12 leading-relaxed">
          I am a hybrid engineer who creates seamless interactions between physical devices and digital interfaces. 
          My work spans the full hardware-to-software stack—from designing custom PCBs and embedded systems to crafting 
          the web and mobile apps that control them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded font-mono transition-all w-fit hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] backdrop-blur-sm"
          >
            Check out my projects!
          </button>
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-24 max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl md:text-3xl font-bold text-slate-100 font-mono flex items-baseline gap-2">
            <span className="text-cyan-400 text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">02.</span> Technical Skills
          </span>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard icon={<Code size={28} />} title="Languages" items={skills.languages} />
          <SkillCard icon={<Layout size={28} />} title="Web Frontend" items={skills.frontend} />
          <SkillCard icon={<Database size={28} />} title="Database" items={skills.database} />
          <SkillCard icon={<Smartphone size={28} />} title="Mobile App" items={skills.mobile} />
          <SkillCard icon={<Server size={28} />} title="Tools & DevOps" items={skills.tools} />
          <SkillCard icon={<Chip size={28} />} title="Hardware & PCB" items={skills.hardware} />
          <SkillCard icon={<Cpu size={28} />} title="CMS" items={skills.cms} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-24 max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-2xl md:text-3xl font-bold text-slate-100 font-mono flex items-baseline gap-2">
            <span className="text-cyan-400 text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">03.</span> Some Things I've Built
          </span>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        {/* Project 1: Zen Garden */}
        <div className="relative mb-24 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
           <div className="md:col-start-1 md:col-end-7 z-10 flex flex-col md:items-start text-left order-2 md:order-1">
            <div className="flex items-center gap-2 mb-2">
               <span className="text-cyan-400 font-mono text-xs px-2 py-1 border border-cyan-400/30 rounded bg-cyan-900/10 backdrop-blur-sm">
                 IEEE PUBLICATION • 2025
               </span>
               <span className="text-slate-500 font-mono text-xs">IEECON Congress</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 hover:text-cyan-400 transition-colors cursor-pointer leading-tight hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              Computer Vision in <br/> Robotic Zen Garden Systems
            </h3>
            <SpotlightCard className="rounded-2xl shadow-lg mb-6 backdrop-blur-sm bg-[#112240]/80">
              <div className="p-6 text-slate-400 text-sm leading-relaxed">
                <p className="mb-4">
                  An autonomous embedded system that blends <span className="text-cyan-400">robotics</span> with <span className="text-cyan-400">generative art</span>. 
                  It uses a Raspberry Pi and OpenCV to detect obstacles (rocks) in real-time and mathematically generates fluid, collision-free sand patterns that mimic water ripples.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4 border-t border-slate-700 pt-4">
                   <div className="flex items-center gap-2">
                      <Eye size={16} className="text-cyan-400" />
                      <span className="text-xs font-mono">Real-time Contour Detection</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Waves size={16} className="text-cyan-400" />
                      <span className="text-xs font-mono">Cubic Spline Path Gen</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Chip size={16} className="text-cyan-400" />
                      <span className="text-xs font-mono">Embedded RPi System</span>
                   </div>
                </div>
              </div>
            </SpotlightCard>
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500 mb-6">
              <li className="bg-[#112240]/80 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400/80">Python</li>
              <li className="bg-[#112240]/80 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400/80">OpenCV</li>
              <li className="bg-[#112240]/80 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400/80">Raspberry Pi</li>
              <li className="bg-[#112240]/80 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400/80">Image Processing</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-slate-400">
               <a href="https://ieeexplore.ieee.org/abstract/document/10987755" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition-colors border-b border-transparent hover:border-cyan-400 pb-1">
                 <ExternalLink size={18} />
                 <span className="font-mono text-sm">Read Publication</span>
               </a>
               <a href={assets.docs.zenGardenPdf} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition-colors border-b border-transparent hover:border-cyan-400 pb-1">
                 <FileText size={18} />
                 <span className="font-mono text-sm">Learn More (PDF)</span>
               </a>
            </div>
          </div>
           <div className="md:col-start-6 md:col-end-13 relative h-[400px] w-full bg-[#112240]/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden transition-all duration-500 order-1 md:order-2 mb-6 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#112240] z-0 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                 <div className="absolute w-96 h-96 border border-cyan-400 rounded-full animate-pulse opacity-20"></div>
                 <div className="absolute w-72 h-72 border border-cyan-400 rounded-full animation-delay-200 opacity-30"></div>
                 <div className="absolute w-48 h-48 border border-cyan-400 rounded-full animation-delay-500 opacity-40"></div>
                 <div className="absolute w-24 h-24 bg-cyan-900/50 rounded-full backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center">
                    <Bot size={32} className="text-cyan-400" />
                 </div>
              </div>
              {/*
              <div className="absolute bottom-4 right-4 z-20 text-right">
                <div className="text-cyan-400 font-mono text-xs">SYSTEM_STATUS: ONLINE</div>
                <div className="text-slate-500 font-mono text-[10px]">Processing Frame...</div>
              </div>
              */}
              <div className="md:col-start-6 md:col-end-13 relative h-[400px] w-full bg-[#112240]/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden transition-all duration-500 order-1 md:order-2 mb-6 md:mb-0">
                {/* USING ZenGarden CAROUSEL HERE */}
                <ImageCarousel images={assets.projects.ZenGarden} />
              </div>
           </div>
        </div>

        {/* Project 2: IoT Dashboard */}
        <div className="relative mb-24 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
           <div className="hidden md:block md:col-start-1 md:col-end-8 relative h-80 w-full bg-[#112240]/50 backdrop-blur-sm rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300 border border-slate-700 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden">
               <img 
                 src={assets.projects.gasMonitor} 
                 alt="Online Gas Quality Monitor Dashboard" 
                 className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
               />
           </div>
           <div className="md:col-start-7 md:col-end-13 z-10 flex flex-col md:items-end text-right">
            <p className="font-mono text-cyan-400 text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-slate-100 mb-4 hover:text-cyan-400 transition-colors cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Online Gas Quality Monitor</h3>
            <SpotlightCard className="rounded-2xl shadow-lg mb-4 backdrop-blur-sm bg-[#112240]/80">
              <div className="p-6 text-slate-400 text-sm leading-relaxed text-right">
                <p>
                  A real-time N2 monitoring dashboard connecting to PTT data sources (REST API). Built with <span className="text-cyan-400">React</span> and <span className="text-cyan-400">Node-RED</span>, it features live data visualization, historical data tables, and automated alerts for gas quality control.
                </p>
              </div>
            </SpotlightCard>
            <ul className="flex flex-wrap justify-end gap-4 text-xs font-mono text-slate-500 mb-8">
              <li>React</li>
              <li>Node-RED</li>
              <li>Data Visualization</li>
              <li>Real-time Monitoring</li>
            </ul>
            {/*
            <div className="flex gap-6 text-slate-400 justify-end">
              <Github className="hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
              <ExternalLink className="hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
            </div>
            */}
          </div>
        </div>

        {/* Project 3: Digital Production (WITH CAROUSEL) */}
        <div className="relative mb-24 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
           <div className="md:col-start-1 md:col-end-7 z-10 flex flex-col md:items-start text-left order-2 md:order-1">
            <p className="font-mono text-cyan-400 text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-slate-100 mb-4 hover:text-cyan-400 transition-colors cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Digital Production System</h3>
            <SpotlightCard className="rounded-2xl shadow-lg mb-4 backdrop-blur-sm bg-[#112240]/80">
              <div className="p-6 text-slate-400 text-sm leading-relaxed">
                <p>
                  A paperless Manufacturing Execution System (MES) <span className="text-cyan-400">mobile webapp</span>. Employees use tablets to <span className="text-cyan-400">scan QR codes</span> on production orders, instantly updating status (Start/Complete) and reporting issues. This streamlines the process flow and provides real-time tracking for management.
                </p>
              </div>
            </SpotlightCard>
            <ul className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 mb-8">
              
              <li>QR/Barcode Scanning</li>
              <li>MySQL</li>
              <li>Process Optimization</li>
            </ul>
          </div>
           <div className="md:col-start-6 md:col-end-13 relative h-[400px] w-full bg-[#112240]/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden transition-all duration-500 order-1 md:order-2 mb-6 md:mb-0">
              {/* USING productionSystem CAROUSEL HERE */}
              <ImageCarousel images={assets.projects.productionSystem} />
           </div>
        </div>

        {/* Project 4: Hardware & PCB */}
        <div className="relative mb-24 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
           <div className="hidden md:block md:col-start-1 md:col-end-8 relative h-80 w-full bg-[#112240]/50 backdrop-blur-sm rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300 border border-slate-700 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden">
               <img 
                 src={assets.projects.pcbDesign} 
                 alt="Custom PCB Design" 
                 className="w-full h-full object-contain bg-[#0a192f] p-4 opacity-80 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
               />
           </div>
           <div className="md:col-start-7 md:col-end-13 z-10 flex flex-col md:items-end text-right">
            <p className="font-mono text-cyan-400 text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-slate-100 mb-4 hover:text-cyan-400 transition-colors cursor-pointer hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Hardware & 3D Design</h3>
            <SpotlightCard className="rounded-2xl shadow-lg mb-4 backdrop-blur-sm bg-[#112240]/80">
              <div className="p-6 text-slate-400 text-sm leading-relaxed text-right">
                <p>
                  A comprehensive hardware project involving custom 2-layer PCBs for industrial automation and 3D-printed enclosures designed in <span className="text-cyan-400">SketchUp</span>. Features include a 6-Channel Limit Switch interface and an Optocoupler Isolation Module to ensure system reliability.
                </p>
              </div>
            </SpotlightCard>
            <ul className="flex flex-wrap justify-end gap-4 text-xs font-mono text-slate-500 mb-8">
              <li>EasyEDA</li>
              <li>SketchUp</li>
              <li>3D Printing</li>
              <li>Circuit Design</li>
            </ul>
            <div className="flex gap-6 text-slate-400 justify-end">
               <button 
                 onClick={() => setShowSchematics(true)}
                 className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition-colors bg-transparent border-none p-0 focus:outline-none"
               >
                 <Zap size={20} />
                 <span className="text-xs font-mono">View Schematics</span>
               </button>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        {/*

        <h3 className="text-2xl font-bold text-slate-100 mb-10 text-center">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProjectCard 
            title="E-Commerce API"
            desc="A RESTful API built with Java Spring Boot and MySQL."
            tech={["Java", "Spring", "MySQL"]}
          />
           <ProjectCard 
            title="Legacy Migration"
            desc="Migrating Assembly logic to optimized C++ modules."
            tech={["Assembly", "C++", "Optimization"]}
          />
           <ProjectCard 
            title="Portfolio v1"
            desc="First iteration of my portfolio using WordPress."
            tech={["WordPress", "PHP", "CSS"]}
          />
        </div>
        
        */}
      </section>



      {/* Contact Section */}

      <section id="contact" className="py-20 px-6 md:px-24 max-w-4xl mx-auto text-center mb-20 relative z-10">
        <p className="text-cyan-400 font-mono mb-4 text-sm">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 mx-auto max-w-lg">
          I'm currently looking for new opportunities as a Web Developer. 
          Whether you have a question about my stack or just want to say hi, I'll try my best to get back to you!
        </p>

        {/*
        <a 
          href="mailto:pongsarunque@gmail.com" 
          className="inline-block border border-cyan-400 text-cyan-400 px-8 py-4 rounded font-mono hover:bg-cyan-400/10 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] backdrop-blur-sm"
        >
          My Resume
        </a>
        */}
        
        <a href={assets.docs.MyResumePdf} className="inline-block border border-cyan-400 text-cyan-400 px-8 py-4 rounded font-mono hover:bg-cyan-400/10 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] backdrop-blur-sm">
          My Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center pb-8 pt-4 text-slate-500 font-mono text-xs flex flex-col items-center relative z-10">
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          <Github className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
        </div>
        <p className="hover:text-cyan-400 transition-colors cursor-pointer mb-2">
          Designed & Built by Pongsarun Tisuwan
        </p>
      </footer>

      {/* Schematic Modal */}
      {showSchematics && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-[#112240] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto border border-cyan-400/30 shadow-2xl">
            <button 
              onClick={() => setShowSchematics(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 transition-colors bg-[#0a192f]/50 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <div className="p-2">
               <img 
                 src={assets.schematics.optoIsolator} 
                 alt="PCB Schematic" 
                 className="w-full h-auto rounded"
               />
               <div className="p-4 text-center">
                 <p className="text-cyan-400 font-mono text-sm">Schematic: Optoisolator Module (TLP521)</p>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Sidebars */}
      <div className="hidden md:flex flex-col fixed left-6 md:left-12 bottom-0 gap-6 text-slate-400 items-center z-50">
        <Camera className="w-5 h-5 hover:text-cyan-400 hover:-translate-y-1 transition-all" />
        <Microchip className="w-5 h-5 hover:text-cyan-400 hover:-translate-y-1 transition-all" />
        <AppWindowMac className="w-5 h-5 hover:text-cyan-400 hover:-translate-y-1 transition-all" />
        <div className="w-[1px] h-24 bg-slate-400 mt-2"></div>
      </div>
      
      <div className="hidden md:flex flex-col fixed right-6 md:right-12 bottom-0 gap-6 text-slate-400 items-center z-50">
        <a href="mailto:pongsarunque@gmail.com" className="font-mono text-xs hover:text-cyan-400 hover:-translate-y-1 transition-all vertical-text tracking-widest cursor-default" style={{ writingMode: 'vertical-rl' }}>
          pongsarunque@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-slate-400 mt-2"></div>
      </div>
    </div>
  );
};

// New Image Carousel Component
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Rotate every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-[#112240]">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Project Screenshot ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Optional: Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-cyan-400 w-4' : 'bg-slate-500/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Existing components...
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    div.style.setProperty('--mouse-x', `${x}px`);
    div.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl bg-slate-800/50 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.4), transparent 40%)`
        }}
      />
      <div className="relative z-10 h-[calc(100%-2px)] w-[calc(100%-2px)] m-[1px] bg-[#112240]/80 rounded-2xl overflow-hidden backdrop-blur-sm">
         <div 
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.1), transparent 40%)`
            }}
         />
         <div className="relative z-20 h-full">
            {children}
         </div>
      </div>
    </div>
  );
};

const SpotlightText = ({ children, className = "", radius = 150 }) => {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    const text = textRef.current;
    const rect = text.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    text.style.setProperty('--mouse-x', `${x}px`);
    text.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <h1
      ref={textRef}
      onMouseMove={handleMouseMove}
      className={`group relative ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 pointer-events-none text-cyan-400 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-75"
        style={{
          maskImage: `radial-gradient(${radius}px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(${radius}px circle at var(--mouse-x) var(--mouse-y), black, transparent)`,
        }}
      >
        {children}
      </span>
    </h1>
  );
};

const SkillCard = ({ icon, title, items }) => (
  <SpotlightCard className="h-full hover:-translate-y-1 transition-transform duration-300">
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="text-cyan-400">{icon}</div>
      </div>
      <h3 className="text-slate-100 font-bold text-lg mb-4 relative z-10">{title}</h3>
      <ul className="space-y-3 relative z-10 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-slate-400 font-mono text-xs">
            {typeof item === 'string' ? (
              <>
                <span className="text-cyan-400">▹</span> {item}
              </>
            ) : (
              <>
                {item.url ? (
                  <img src={item.url} alt={item.name} className="w-5 h-5 object-contain" />
                ) : (
                  <span className="text-cyan-400">{item.icon}</span>
                )}
                <span className="text-slate-300">{item.name}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </SpotlightCard>
);

const ProjectCard = ({ title, desc, tech }) => (
  <SpotlightCard className="h-full hover:-translate-y-1 transition-transform duration-300">
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 text-cyan-400 relative z-10">
        <Terminal size={40} strokeWidth={1} />
        <div className="flex gap-4">
          <ExternalLink size={18} className="hover:text-cyan-300 cursor-pointer" />
        </div>
      </div>
      <h3 className="text-slate-100 font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors relative z-10">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow relative z-10">
        {desc}
      </p>
      <ul className="flex gap-3 text-xs font-mono text-slate-500 mt-auto relative z-10">
        {tech.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  </SpotlightCard>
);

export default Portfolio;