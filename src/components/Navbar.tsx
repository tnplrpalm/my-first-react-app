import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <h3>Navbar</h3>
      <button type="submit">Login</button>
    </div>
  )
}

export default Navbar
