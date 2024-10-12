import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contest/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className=" app bg-[#171717] container items-center md:flex justify-between main_app">
        <div className="md:h-[900px] h-[600px] md:w-3/4">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#171717"]} />
          <fog attach="fog" args={["#171717", 10, 20]} />
          <Experience />
        </Canvas>
        </div>
        <div className="items-end ">
        <Configurator />
        </div>
      </div>
    </CustomizationProvider>
  );
}

export default App;
