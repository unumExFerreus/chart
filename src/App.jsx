import "./App.css";
import BrushChart from "./componenets/Brush";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

function App() {
  return (
    <main className="flex justify-center items-center w-[100dvw] h-[100dvh] bg-[#282B2D]">
      <div className="w-[960px] h-[576px] select-none">
        <ParentSize>
          {({ width, height }) => <BrushChart width={width} height={height} />}
        </ParentSize>
      </div>
    </main>
  );
}

export default App;
