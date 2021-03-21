import React from "react"
import NavBarContent from './NavBarContent'

const Navbar = ({ sticky }) => (
  <div className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <NavBarContent />
  </div>
)
export default Navbar

