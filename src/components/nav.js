import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navContainer
} from './nav.module.css'

const Nav = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={navContainer}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Blogs
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/github-projects/docs" className={navLinkText}>
              My GitHub Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/profile" className={navLinkText}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Nav