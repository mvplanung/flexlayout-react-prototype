import "../styles.css";
import "flexlayout-react/style/light.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RootFlexLayout from "./RootFlexLayout";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div
          style={{
            border: "1px solid red",
            position: "relative",
            width: "100%",
            height: "100%"
          }}
        >
          <RootFlexLayout />
        </div>
      </div>
    </DndProvider>
  );
}
