import "./App.css";
import BrushChart from "./componenets/Brush";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

function App() {
  return (
    <main className="flex justify-center items-center w-[100dvw] h-[100dvh] bg-[#282B2D]">
      <div className="w-[90dvw] h-[35dvh] md:w-[960px] md:h-[576px]">
        <ParentSize>
          {({ width, height }) => <BrushChart width={width} height={height} />}
        </ParentSize>
      </div>
    </main>
  );
}

export default App;
