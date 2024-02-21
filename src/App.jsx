import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Control from "./components/Control";
import { useSelector } from "react-redux";
import PrivacyToggle from "./components/PrivacyToggle";

function App() {
  const privacy = useSelector((store)=>store.privacy)
  return (
    <>
    <Container>
      <center className="px-4 py-5  text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ?<PrivacyToggle/>:<DisplayCounter></DisplayCounter>
}
          <Control></Control>
       
        </div>
      </center>
      </Container>
    </>
  );
}

export default App;
