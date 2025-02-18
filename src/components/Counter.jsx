import { useEffect, useState, useRef } from "react";

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
          if(t.isCompleted === true){
            t.wasCompleted ++
          }else if(t.isCompleted === false){
            t.wasNotCompleted ++
          }
          return { ...t, isCompleted: false };
        })
      );
    }

    // here setDay logic
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


    // prompt after day logic
    if (!lastSavedDate) {
      setDay(1);
      localStorage.setItem("lastDate", today);
    } else {
      if (lastSavedDate !== today) {
        let userInput = confirm(
          "Day is over, do you wanna reset all task or continue?"
        );

        if (userInput) {
          reset(
            todos.map((t) => {
              if(t.isCompleted === true){
                t.wasCompleted ++
              }else if(t.isCompleted === false){
                t.wasNotCompleted ++
              }
              return { ...t, isCompleted: false };
            })
          );
        }

        // here setDay logic
        setDay((prevDay) => {
          const newDay = prevDay + 1;
          localStorage.setItem("day", newDay);
          return newDay;
        });
        localStorage.setItem("lastDate", today);
      }
    }
  }, []);

  return (
    <>
      <header className="d-flex justify-content-between align-items-center mx-4 my-4 ">
        <span className="btn btn-dark">{time} 🕒</span>
        <span className="btn btn-light">
          <span
            style={{ color: count.current < todos.length ? "red" : "green" }}
          >
            {count.current}{" "}
          </span>
          / <span style={{ color: "green" }}>{todos.length}</span> Completed
        </span>
        <span
          className="btn btn-dark"
          onDoubleClick={() => {
            localStorage.setItem('day',1)
            setDay(1);
          }}
        >
          Day {day} ⌛
        </span>
        <button
          className="btn btn-warning"
          style={{ cursor: "pointer" }}
          onClick={skipDay}
        >
          Next
        </button>
      </header>
    </>
  );
}
