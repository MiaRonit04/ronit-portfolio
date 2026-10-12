import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download, Sparkles, Code2, BrainCircuit, MapPinned, Terminal, GraduationCap, BriefcaseBusiness, Layers3, ExternalLink } from 'lucide-react';
import './styles.css';

const GITHUB = 'https://github.com/MiaRonit04';
const LINKEDIN = 'https://www.linkedin.com/in/ronit-mia-392a5b25b/';
const EMAIL = 'ronitmia45@gmail.com';

const projects = [
  {
    number: '01', title: 'Contextual Memory Framework', type: 'Personal project',
    description: 'A multi-tenant knowledge-retrieval platform designed to make AI systems retrieve useful context with hybrid search, reranking, and tenant-aware access controls.',
    stack: ['Spring Boot', 'Qdrant', 'PostgreSQL', 'Redis', 'Kubernetes'],
    href: 'https://github.com/MiaRonit04/Zenith', label: 'View project on GitHub', icon: BrainCircuit,
    note: 'Add a demo link or architecture diagram when you are ready to share one.'
  },
  {
    number: '02', title: 'Geospatial AI & Spatial RAG', type: 'AGT Intelligence · Internship',
    description: 'Built computer-vision pipelines for geospatial infrastructure analysis across 20+ cities, working with aerial imagery, SAM, DINOv2, and a spatial retrieval system for location-specific questions.',
    stack: ['Python', 'Computer Vision', 'SAM', 'DINOv2', 'Qdrant'],
    href: 'https://github.com/MiaRonit04', label: 'Explore GitHub profile', icon: MapPinned,
    note: 'This was internship work. Share only details, screenshots, or code that AGT Intelligence has approved for public use.'
  },
  {
    number: '03', title: 'Real-Time Sports Analytics Platform', type: 'Software engineering project',
    description: 'A live sports platform for 30 teams with standings, box scores, play-by-play updates, deterministic game simulation, and secure user accounts.',
    stack: ['Backend APIs', 'PostgreSQL', 'Authentication', 'Real-time updates'],
    href: 'https://github.com/MiaRonit04', label: 'Explore GitHub profile', icon: Code2,
    note: 'Replace this profile link with the exact repository URL when you want to feature the source directly.'
  },
  {
    number: '04', title: 'Data Engineering Medallion Platform', type: 'Data engineering project',
    description: 'A PySpark Bronze–Silver–Gold pipeline processing 1.8M+ rows into seven curated datasets, with validation, deduplication, quarantine handling, lineage, and automated tests.',
    stack: ['PySpark', 'AWS EKS', 'Terraform', 'Data quality'],
    href: 'https://github.com/MiaRonit04', label: 'Explore GitHub profile', icon: Layers3,
    note: 'Replace this profile link with the exact repository URL when you want to feature the source directly.'
  }
];

const skillGroups = [
  { title: 'Languages', items: ['Python', 'Java', 'C++', 'SQL', 'JavaScript', 'TypeScript'] },
  { title: 'AI & Retrieval', items: ['Machine Learning', 'Computer Vision', 'LLMs', 'RAG', 'Vector Search', 'SAM', 'DINOv2'] },
  { title: 'Backend & Data', items: ['Spring Boot', 'REST APIs', 'Flask', 'Django', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis', 'Qdrant', 'PySpark'] },
  { title: 'Cloud & Tools', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'Linux', 'TensorFlow', 'Scikit-learn', 'OpenCV'] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year] = useState(new Date().getFullYear());
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="wordmark" href="#home" onClick={closeMenu}><span className="mark">R<span>.</span></span><span>RONIT MIA</span></a>
      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {[['About','#about'],['Experience','#experience'],['Education','#education'],['Projects','#projects'],['Skills','#skills']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="eyebrow-line"/></div>
          <h1>Building useful<br/>things with <span className="gradient-text">intelligence.</span></h1>
          <p className="hero-description">I’m Ronit — a Computer Engineering graduate building practical AI systems, retrieval platforms, and reliable software from idea to implementation.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
            <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
          </div>
          <div className="social-row">
            <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>
            <a href={`mailto:${EMAIL}`}><Mail size={16}/> Email <ArrowUpRight size={12}/></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract AI-inspired graphic">
          <div className="visual-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <div className="core"><div className="core-inner"><BrainCircuit size={46} strokeWidth={1.2}/><span>IDEAS → SYSTEMS</span></div></div>
          <div className="float-tag tag-top"><span className="tag-icon"><Sparkles size={15}/></span><span><b>AI / ML</b><small>Curiosity to capability</small></span></div>
          <div className="float-tag tag-bottom"><span className="tag-icon purple"><Terminal size={15}/></span><span><b>BUILD · TEST · LEARN</b><small>One iteration at a time</small></span></div>
          <div className="visual-index">FIG. 001 <span>PERSONAL SYSTEMS</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="mono-label">CURRENT FOCUS</span><div className="focus-list"><span><i/> Applied AI</span><span><i/> Generative AI</span><span><i/> Software Engineering</span><span><i/> Computer Vision</span></div></div></section>

      <section className="section-wrap section-block" id="about">
        <div className="section-heading reveal"><div><span className="section-kicker">01 / A LITTLE ABOUT ME</span><h2>Curious by default.<br/><span className="muted-heading">Builder by choice.</span></h2></div><span className="heading-symbol">↘</span></div>
        <div className="about-grid reveal"><div className="about-lead"><p>I’m a Computer Engineering graduate from <strong>COEP Technological University, Pune</strong>. I enjoy working at the intersection of AI and software engineering — turning ideas into working systems and improving them through testing.</p><p>My experience includes geospatial computer vision, retrieval-augmented generation, backend services, data pipelines, and secure multi-tenant retrieval. I’m looking for opportunities to build useful products with thoughtful engineering teams.</p><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">A closer look at my code <ArrowUpRight size={15}/></a></div>
          <div className="about-facts"><div className="fact"><span className="fact-icon"><GraduationCap size={18}/></span><div><small>EDUCATION</small><b>B.Tech · Computer Engineering</b><span>COEP Technological University, Pune</span></div></div><div className="fact"><span className="fact-icon"><BriefcaseBusiness size={18}/></span><div><small>EXPERIENCE</small><b>AI & Machine Learning Intern</b><span>AGT Intelligence</span></div></div><div className="fact"><span className="fact-icon"><Layers3 size={18}/></span><div><small>APPROACH</small><b>Learn by building</b><span>Prototype, evaluate, iterate</span></div></div></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="experience">
        <div className="section-heading reveal"><div><span className="section-kicker">02 / EXPERIENCE</span><h2>Where I’ve <span className="muted-heading">contributed.</span></h2></div><span className="heading-symbol">↘</span></div>
        <article className="experience-card reveal"><div className="experience-top"><div className="company-mark">AGT<span>.</span></div><div className="experience-title"><h3>AI & Machine Learning Intern</h3><p>AGT Intelligence · Geospatial AI</p></div><span className="experience-type">INTERNSHIP</span></div><div className="experience-body"><p>Contributed to real-world AI solutions using geospatial data and computer vision, working with aerial and satellite imagery across 20+ cities.</p><ul><li>Worked with computer-vision pipelines and Vision Foundation Models to extract building footprints, roofprints, and spatial features.</li><li>Contributed to a Spatial RAG architecture using vector databases, spatial embeddings, and semantic retrieval.</li><li>Helped develop a geospatial AI chatbot designed to answer location-specific questions.</li></ul><div className="tag-row"><span>Computer Vision</span><span>Geospatial Data</span><span>Spatial RAG</span><span>Vector Search</span></div></div></article>
        <p className="fine-print reveal">May 2025 – July 2025 · Keep confidential internship data out of the public portfolio.</p>
      </section>

      <section className="section-wrap section-block education-section" id="education">
        <div className="section-heading reveal"><div><span className="section-kicker">03 / EDUCATION</span><h2>Foundations for <span className="muted-heading">what comes next.</span></h2></div><span className="heading-symbol">↘</span></div>
        <article className="experience-card education-card reveal"><div className="experience-top"><div className="company-mark"><GraduationCap size={23}/></div><div className="experience-title"><h3>Bachelor of Technology · Computer Engineering</h3><p>COEP Technological University · Pune, India</p></div><span className="experience-type">2022 — 2026</span></div><div className="experience-body"><p>Relevant coursework: Data Structures & Algorithms, Database Systems, Operating Systems, and Computer Networks.</p></div></article>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap section-block"><div className="section-heading reveal"><div><span className="section-kicker">04 / SELECTED WORK</span><h2>Things I’ve <span className="muted-heading">been building.</span></h2></div><a className="text-link all-projects" href={GITHUB} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={15}/></a></div>
        <div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className="project-card reveal" key={project.number}><div className="project-topline"><span className="project-number">{project.number} / 04</span><span className="project-type">{project.type}</span></div><div className="project-art"><div className="art-grid"/><div className="art-orb"><Icon size={34} strokeWidth={1.25}/></div><span className="art-corner">RM—{project.number}</span></div><div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.href} target="_blank" rel="noreferrer"><span>{project.label}</span><ArrowUpRight size={16}/></a><details className="project-note"><summary>What to add next</summary><p>{project.note}</p></details></div></article> })}</div>
      </div></section>

      <section className="section-wrap section-block" id="skills"><div className="section-heading reveal"><div><span className="section-kicker">05 / TOOLKIT</span><h2>Tools I use to <span className="muted-heading">make things.</span></h2></div><span className="heading-symbol">↘</span></div><div className="skills-grid reveal">{skillGroups.map((group, i) => <div className="skill-group" key={group.title}><div className="skill-group-top"><span>0{i+1}</span><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

      <section className="resume-band"><div className="section-wrap resume-inner reveal"><div><span className="section-kicker">06 / THE ONE-PAGER</span><h2>Want the concise version?</h2><p>Download my resume for a quick overview of my experience, education, and skills.</p></div><a className="button button-primary resume-button" href="/resume.pdf" download><Download size={17}/> Download resume <ArrowUpRight size={15}/></a></div></section>

      <section className="section-wrap contact-section" id="contact"><div className="contact-card reveal"><div className="contact-glow"/><span className="section-kicker">07 / YOUR TURN</span><h2>Have something<br/><span className="gradient-text">interesting in mind?</span></h2><p>I’m open to conversations about AI/ML, software engineering, and opportunities to build useful products.</p><a className="button button-primary" href={`mailto:${EMAIL}?subject=Hello%20Ronit`}>Say hello <ArrowUpRight size={17}/></a><div className="contact-orbit">LET’S BUILD<br/>SOMETHING USEFUL</div></div></section>
    </main>

    <footer className="footer"><div className="section-wrap footer-inner"><a className="wordmark" href="#home"><span className="mark">R<span>.</span></span><span>RONIT MIA</span></a><span className="footer-note"><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a> · <a href={`mailto:${EMAIL}`}>Email</a></span><span className="copyright">© {year} RONIT MIA</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
