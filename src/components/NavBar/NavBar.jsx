import style from "./navBar.module.css"

const NavBar = () => {
  return (
    <nav className={style.wrapper}>
        <h1>VM</h1>
        <ul className={style.nav_ul}>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Solution</li>
        </ul>
    </nav>
  )
}

export default NavBar