import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Counter({ todos, reset }) {
  let count = useRef(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [day, setDay] = useState(() => {
    return Number(localStorage.getItem("day") || 1);
  });

  //manual next day logic
  const skipDay = () => {
    let userInput = confirm(
      "Day is over, do you wanna reset all task or continue?"
    );

    if (userInput) {
      reset(
        todos.map((t) => {
          if (t.isCompleted) {
            t.wasCompleted++;
          } else {
            t.wasNotCompleted++;
          }
          return { ...t, isCompleted: false };
        })
      );
    }

    // Update day
    setDay((prevDay) => {
      const newDay = prevDay + 1;
      localStorage.setItem("day", newDay);
      return newDay;
    });
  };

  useEffect(() => {
    count.current = todos.filter((t) => t.isCompleted).length;
  }, [todos]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const lastSavedDate = localStorage.getItem("lastDate");
    const today = new Date().toDateString();

    // Prompt after day change
    if (!lastSavedDate) {
      setDay(1);
      localStorage.setItem("lastDate", today);
    } else if (lastSavedDate !== today) {
      let userInput = confirm(
        "Day is over, do you wanna reset all task or continue?"
      );

      if (userInput) {
        reset(
          todos.map((t) => {
            if (t.isCompleted) {
              t.wasCompleted++;
            } else {
              t.wasNotCompleted++;
            }
            return { ...t, isCompleted: false };
          })
        );
      }

      setDay((prevDay) => {
        const newDay = prevDay + 1;
        localStorage.setItem("day", newDay);
        return newDay;
      });

      localStorage.setItem("lastDate", today);
    }
  }, []);

  return (
    <Container>
      <Row className="text-center my-4">
        <Col xs={6} sm={6} md={3} className="mb-2">
          <span className="btn btn-dark w-100">{time} 🕒</span>
        </Col>
        <Col xs={6} sm={6} md={3} className="mb-2">
          <span className="btn btn-light w-100">
            <span
              style={{ color: count.current < todos.length ? "red" : "green" }}
            >
              {count.current}{" "}
            </span>
            / <span style={{ color: "green" }}>{todos.length}</span> Completed
          </span>
        </Col>
        <Col xs={6} sm={6} md={3} className="mb-2">
          <span
            className="btn btn-dark w-100"
            onDoubleClick={() => {
              localStorage.setItem("day", 1);
              setDay(1);
            }}
          >
            Day {day} ⌛
          </span>
        </Col>
        <Col xs={6} sm={6} md={3} className="mb-2">
          <button className="btn btn-primary w-100" onClick={skipDay}>
            Next
          </button>
        </Col>
      </Row>
    </Container>
  );
}
