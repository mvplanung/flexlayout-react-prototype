import "../styles.css";
import "flexlayout-react/style/light.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RootFlexLayout from "./RootFlexLayout";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <RootFlexLayout />
      </div>
    </DndProvider>
  );
}
