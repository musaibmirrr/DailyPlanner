import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { Row, Col } from "react-bootstrap"; // Import Row and Col from react-bootstrap

export default function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Handle scroll position and toggle button visibility
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="text-center mt-3" style={{ fontFamily: "monospace" }}>
        Your Progress 🥇
      </h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {tasks.map((task, index) => (
          <Col key={index}>
            <CardComponent taskItem={task} />
          </Col>
        ))}
      </Row>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
          }}
        >
          Back to Top
        </button>
      )}
    </div>
  );
}
