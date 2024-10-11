import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contest/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="app">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#171717"]} />
          <fog attach="fog" args={["#171717", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
