import { ControlProps } from "./patterns/Control-Props/Usage";
import Hooks from "./patterns/Hooks/Usage";
import ContainerPresentation from "./patterns/Presentation-Container/Usage";
import PropsGetters from "./patterns/Props-Getters/Usage";
import StateReducer from "./patterns/State-Reducer/Usage";
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
      <div className={PatternWrapper}>
        <PropsGetters />
      </div>

      <div className={PatternWrapper}>
        <StateReducer />
      </div>
    </>
  );
}

export default App;
