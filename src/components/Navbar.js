import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Bookstore CMS',
    },
    {
      id: 2,
      path: '/books',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active-link' : 'none')}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="profile-picture" />
    </nav>
  );
};
export default Navbar;
