import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComponent() {
  return (
    <>

      <Navbar expand="lg" className="bg-dark" style={{height : '60px'}}>
        <Container>
          <NavLink to={'/'} className="text-warning" style={{textDecoration : 'none'}}> ➜ DailyPlanner 📝</NavLink>
          <span className="text-light">@Baxture Task 1</span>
          <span className="text-light">{new Date().toDateString()}</span>
        </Container>
      </Navbar>
    </>
  );
}
