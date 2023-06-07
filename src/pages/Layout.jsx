import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Layout() {

  return (
	<div>
	<header>
		<Navbar />
	</header>
	<main className="container">

		<Outlet />

	</main>
	<footer></footer>
	</div>
  )
}

export default Layout
