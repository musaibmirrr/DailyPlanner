import Card from "react-bootstrap/Card";

function CardComponent({ taskItem }) {
  return (
    <Card style={{ margin: "10px", marginLeft: "5px" }}>
      <Card.Body>
        <Card.Title>
          <span className="text-primary"> Task : {taskItem.body}</span>
        </Card.Title>
        <Card.Text>
          <span className="text-success">
            Completed : <span>{taskItem.wasCompleted}</span>
          </span>{" "}
          /{" "}
          <span className="text-danger">
            Uncompleted : <span>{taskItem.wasNotCompleted}</span>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
