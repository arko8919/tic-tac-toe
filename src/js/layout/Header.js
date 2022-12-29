import Card from "react-bootstrap/Card";

import "./header.scss";

export default function Header() {
  return (
    <Card as="header" className="header">
      <Card.Header as="h1" className="text-center">
        Tic Tac Toe Game
      </Card.Header>
      <Card.Body as="section" className="text-center">
        <Card.Text>
          The classic game of Tic-Tac-Toe has been around for several centuries,
          although its history is relatively unknown. One reason why it has
          endured for so long may be because it is so versatile. This game can
          be played virtually anywhere that a person can make marks on a
          surface, including on a chalkboard or paper or even sketched into dirt
          or sand.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
