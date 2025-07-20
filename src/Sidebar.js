import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserGraduate, FaProjectDiagram, FaLightbulb, FaEnvelope } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Gildong Hong</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaUserGraduate className="nav-icon" /> Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaProjectDiagram className="nav-icon" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaLightbulb className="nav-icon" /> Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaEnvelope className="nav-icon" /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;