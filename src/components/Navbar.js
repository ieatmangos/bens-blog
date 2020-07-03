import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className=""
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="">
          <div className="">
            <Link to="/" className="" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="flex w-full justify-evenly py-4">
              <Link className="px-4 md:px-12 xl:px-24 pb-6 border-b border-gray-300 text-xl md:text-2xl" to="/">
                Home
              </Link>
              <Link className="px-4 md:px-12 xl:px-24 pb-6 border-b border-gray-300 text-xl md:text-2xl" to="/about">
                About
              </Link>
              <Link className="px-4 md:px-12 xl:px-24 pb-6 border-b border-gray-300 text-xl md:text-2xl" to="/products">
                Products
              </Link>
              <Link className="px-4 md:px-12 xl:px-24 pb-6 border-b border-gray-300 text-xl md:text-2xl" to="/blog">
                Blog
              </Link>
              <Link className="px-4 md:px-12 xl:px-24 pb-6 border-b border-gray-300 text-xl md:text-2xl" to="/contact">
                Contact
              </Link>
              {/* <Link className="px-24 pb-6 border-b border-gray-300 text-2xl" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className=""
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
            
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
