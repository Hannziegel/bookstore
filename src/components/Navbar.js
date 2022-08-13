import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
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
      <h1>
        Bookstore CMS
      </h1>
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
