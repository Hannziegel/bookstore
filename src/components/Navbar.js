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
      text: 'BOOKS',
    },
    {
      id: 3,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? `active-link name${link.id}` : `none name${link.id}`)}>
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
