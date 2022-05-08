import { ControlProps } from "./patterns/Control-Props/Usage";
import Hooks from "./patterns/Hooks/Usage";
import ContainerPresentation from "./patterns/Presentation-Container/Usage";
import { PatternWrapper } from "./styles";

function App() {
  return (
    <>
      <div className={PatternWrapper}>
        <ContainerPresentation />
      </div>
      <div className={PatternWrapper}>
        <Hooks />
      </div>
      <div className={PatternWrapper}>
        <ControlProps />
      </div>
    </>
  );
}

export default App;
