import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <Link to="/" class="navbar-brand">Navbar</Link>
          <form class="d-flex">
            <Link to="/booking" class="btn btn-outline-success">Book Service</Link>
          </form>
        </div>
      </nav>
    </div>
  )
}
export default Navbar