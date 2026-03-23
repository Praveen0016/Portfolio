import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaDownload,
  FaCode, FaLaptopCode, FaBook, FaMedal, FaHackerrank, FaPenNib, FaFlask
} from 'react-icons/fa';

const SectionWrapper = ({ children, id, className = '' }) => (
  <section id={id} className={`section container ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  </section>
);

const Navbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="nav-link gradient-text" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          Portfolio
        </a>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
            </li>
          ))}
          <li>
            <a href="/resume1.pdf" download className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
              <FaDownload /> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <>
      <div className="bg-gradient" />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="section container hero" style={{ minHeight: '100vh', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap-reverse' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ flex: '1 1 400px' }}
            >
              <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem' }}>Hi, my name is</p>
              <h1>Praveen Kumar Sharma</h1>
              <h2 className="gradient-text">I build things for the web.</h2>
              <p>
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products spanning frontend and backend technologies.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="https://github.com/Praveen0016?tab=repositories" className="btn btn-primary">Check out my work</a>
                <a href="https://github.com/Praveen0016" target="_blank" rel="noreferrer" className="btn btn-outline"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/praveensh07/" target="_blank" rel="noreferrer" className="btn btn-outline"><FaLinkedin /> LinkedIn</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: '320px', height: '320px' }}>
                <img
                  src="/photo.jpg"
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid var(--border-light)',
                    boxShadow: '0 20px 40px -10px rgba(56, 189, 248, 0.4)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <SectionWrapper id="about">
          <h2 className="section-title">About Me</h2>
          <div className="grid-2">
            <div>
              <p style={{ marginBottom: '1rem' }}>
                Hello! My name is <strong>Ayush Kumar</strong> and I enjoy creating things that live on the internet.
                My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes —
                turns out hacking together HTML & CSS taught me a lot about CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up,
                and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences.
              </p>
              <a href="/resume1.pdf" download className="btn btn-outline" style={{ marginTop: '2rem' }}>
                <FaDownload /> Download Resume
              </a>
            </div>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
              <div style={{ textAlign: 'center' }}>
                <FaLaptopCode size={80} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                <h3>Creative Developer</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bridging the gap between design and engineering.</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Frontend</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              {['JavaScript (ES6+)', 'React', 'TypeScript', 'Next.js', 'HTML5', 'CSS3'].map(skill => (
                <span key={skill} className="skill-tag"><FaCode /> {skill}</span>
              ))}
            </div>

            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Backend & Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS'].map(skill => (
                <span key={skill} className="skill-tag"><FaHackerrank /> {skill}</span>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper id="experience">
          <h2 className="section-title">Training</h2>
          <div className="timeline">
            {[
              // { role: '', company: 'Gokboru', date: '2022 - Present', desc: 'Working on core backend services and user-facing dashboards. Improved API latency by 30%.' },
              { role: 'Training', company: 'Gokboru', date: 'Summer 2025', desc: 'Developed responsive web applications for various high-profile clients.' }
            ].map((job, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-date">{job.date}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.role} <span className="gradient-text">@ {job.company}</span></h3>
                <p style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid-2">
            {[
              {
                title: 'Blogging Platform',
                desc: 'A full-stack blogging platform that enables users to create, edit, publish, and manage blog posts through a modern and responsive interface. The application supports secure authentication, dynamic content management, and seamless interaction between the frontend and backend.',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: 'Blog.png', // Replace with actual image path like '/blog.png'
                github: 'https://github.com/Ayushkumar-4/Blogspace',
                link: '#'
              },
              {
                title: 'Chat App',
                desc: 'A real-time chat application that allows users to communicate instantly through a modern messaging interface. The platform supports live message updates, secure user sessions, and smooth communication across devices.',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: 'chatApp.png', // Replace with actual image path like '/chat.png'
                github: 'https://github.com/Ayushkumar-4/ChatApp',
                link: '#'
              },
              {
                title: 'Startup Financing Platform',
                desc: 'A scalable MERN-based startup funding platform enabling secure discovery, investment, and real-time portfolio tracking.',
                tech: ['Node JS', 'FastAPI', 'React'],
                image: 'startup.png', // Replace with actual image path like '/seedx.png'
                github: 'https://github.com/Ayushkumar-4/SeedX',
                link: '#'
              }
            ].map((project, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--border-light)', position: 'relative' }}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <FaCode size={64} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
                  )}
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.75rem', zIndex: 10 }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="nav-link" style={{ padding: '0.5rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="nav-link" style={{ padding: '0.5rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-light)' }}>
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', flexGrow: 1 }}>{project.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>
                    {project.tech.map(t => <span key={t} style={{ border: '1px solid var(--border-light)', padding: '0.25rem 0.75rem', borderRadius: '15px' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Certificates Section */}
        <SectionWrapper id="certificates">
          <h2 className="section-title">Certifications</h2>
          <div className="grid-2">
            {[
              {
                title: 'Data Structures and Algorithms',
                issuer: 'Lovely Professional University',
                date: 'Jan 2024',
                image: '/dsa1.jpg', // Replace with actual image path like '/dsa-cert.jpg'
                // link: 'https://drive.google.com/file/d/1hTStG-62fGS4vuWybjgBoezlEkKEsoOm/view?usp=drivesdk'
              },
              {
                title: 'Cloud Computing',
                issuer: 'NPTEL',
                date: 'Feb 2024',
                image: '/cloud1.png', // Replace with actual image path like '/cloud-cert.jpg'
                // link: 'https://drive.google.com/file/d/1fFTBSeVPnOwyQmvFmgtwsW4CzTwN-w48/view?usp=drivesdk'
              }
            ].map((cert, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <FaMedal size={64} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
                  )}
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{cert.issuer}</p>
                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.date}</span>
                    <a href={cert.link} target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                      View Credential <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Competitive / Open Source */}
        <SectionWrapper id="achievements">
          <h2 className="section-title">Achievements & Contributions</h2>
          <div className="grid-3">
            <div className="glass-card">
              <FaHackerrank size={30} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Hackathons & CP</h3>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <li>HackWithVertor 1.0 A Finalist 2024</li>
                {/* <li>1st Place @ University Hackathon</li> */}
              </ul>
            </div>
            <div className="glass-card">
              <FaGithub size={30} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Open Source</h3>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <li>Contributor to React Router</li>
                <li>Author of 'react-use-animations' pack</li>
              </ul>
            </div>
            <div className="glass-card">
              <FaPenNib size={30} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h3>Blog & Technical Writing</h3>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <li>"Understanding React Compilers" on Medium</li>
                <li>"Advanced Framer Motion" on Dev.to</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact" className="contact">
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginBottom: '1rem' }}>What's Next?</p>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)' }}>
              Although I'm not currently looking for any new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:praveensh011@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              <FaEnvelope /> Say Hello
            </a>
          </div>
        </SectionWrapper>
      </main>

      <footer className="footer">
        <p>Built with React & Framer Motion</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>© 2026. All Rights Reserved.</p>
      </footer>
    </>
  );
}
