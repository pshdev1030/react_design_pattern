import { useCounterContext } from "../useCounterContext";

const Increment = ({ icon = null }: { icon?: string | null }) => {
  const { handleIncrement } = useCounterContext();
  return (
    <button className="button" onClick={handleIncrement}>
      {icon ? icon : "+"}
    </button>
  );
};

export { Increment };
