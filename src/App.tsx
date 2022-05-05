import Hooks from "./patterns/Hooks/Usage";
import ContainerPresentation from "./patterns/Presentation_Container/Usage";
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
    </>
  );
}

export default App;
