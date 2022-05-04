import ContainerPresentation from "./patterns/Presentation_Container/Usage";
import { PatternWrapper } from "./styles";

function App() {
  return (
    <>
      <div className={PatternWrapper}>
        <ContainerPresentation />
      </div>
    </>
  );
}

export default App;
