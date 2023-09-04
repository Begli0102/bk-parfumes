import {
  Container,
  Button,
  TypingEffect
} from "../styled-components/landingPage";
import { useHistory } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

const LandingPage = () => {
  // let history = useHistory();
  // const getStarted = () => {
  //   history.push("/login");
  // };

  return (
    <Container>
      <TypingEffect>
        <ReactTypingEffect
          text={[
            "Welcome to BK-parfumes",
            " Here, you can find a variety of parfumes. To learn more click register button!"
          ]}
          speed={100}
          eraseDelay={700}
        />
      </TypingEffect>
      {/* <Button onClick={getStarted}>get started</Button>  */}
    </Container>
  );
};

export default LandingPage;
