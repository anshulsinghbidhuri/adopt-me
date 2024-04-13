import { createRoot } from "react-dom";
import pet from "./pet";
//creating a container for the diffrent types of pet by taking a array in the code.
//we are make a properties(props) that we can acces any were in the code by call the props every time we need it.

const App = () =>{
   <div>
   <h1>Adopt Me!</h1>
   <pet name="Luna" animal="dog" breed="Havanse"/>
   <pet name="pepper" animal="bird" breed="cockatiel"/>
   <pet name="Doink" animal="cat" breed="Mixed"/>
   </div>
  };
  const container=document.getElementById("root");
  const root=createRoot(container);
  root.render(<App/>)