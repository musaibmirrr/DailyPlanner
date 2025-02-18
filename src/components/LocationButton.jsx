import { useLocation,Link } from "react-router-dom";
export default function LocationButton() {
    const location = useLocation(); // Now this is inside Router

    return (
      location.pathname !== '/dashboard' && (
        <Link
          to="/dashboard"
          className="btn btn-primary position-fixed"
          style={{ bottom: "20px", right: "20px" }}
        >
          Go to Dashboard
        </Link>
      )
    );
  }