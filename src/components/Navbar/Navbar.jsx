// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/events', label: 'Events' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/team', label: 'Team' },
//     { path: '/gallery', label: 'Gallery' },
//     { path: '/contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`funky-navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar-blob"></div>
//       <div className="container navbar-container">
//         <Link to="/" className="funky-logo" onClick={() => setMenuOpen(false)}>
//           <span className="logo-text">E-CESA</span>
//           <span className="logo-subtitle">KJSSE Vidyavihar</span>
//         </Link>

//         <div className={`funky-nav-menu ${menuOpen ? 'open' : ''}`}>
//           {navItems.map(item => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`funky-nav-link ${location.pathname === item.path ? 'active' : ''}`}
//               onClick={() => setMenuOpen(false)}
//             >
//               <span className="link-blob"></span>
//               {item.label}
//             </Link>
//           ))}
//         </div>

//         <button className="funky-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           <span className="toggle-blob"></span>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaBolt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', color: '#ff6b6b' },
    { path: '/about', label: 'About', color: '#4ecdc4' },
    { path: '/events', label: 'Events', color: '#45b7d1' },
    { path: '/projects', label: 'Projects', color: '#96ceb4' },
    { path: '/team', label: 'Team', color: '#feca57' },
    { path: '/gallery', label: 'Gallery', color: '#ff9ff3' },
    { path: '/contact', label: 'Contact', color: '#54a0ff' }
  ];

  return (
    <nav className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-glow"></div>
      
      <div className="container navbar-wrapper">
        {/* Enhanced Logo Section */}
        <Link to="/" className="premium-logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-icon">
            <FaBolt />
          </div>
          <div className="logo-content">
            <span className="logo-main">E-CESA</span>
            <span className="logo-sub">Initiative Of</span>
            <span className="logo-institute">KJSSE Vidyavihar</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className={`premium-nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`premium-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
              style={{ '--link-color': item.color, '--delay': `${index * 0.1}s` }}
            >
              <span className="link-text">{item.label}</span>
              <div className="link-background"></div>
              <div className="link-glow"></div>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`premium-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;