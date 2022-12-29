import Container from "react-bootstrap/Container";
import GameIntro from "../components/GameIntro";
import Game from "../components/Game";

export default function Main() {
  return (
    <Container as="main">
      <GameIntro />
      <Game />
    </Container>
  );
}
