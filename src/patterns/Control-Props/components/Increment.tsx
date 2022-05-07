import { useCounterContext } from "../useCounterContext";

const Increment = ({ icon = "+" }: { icon?: string }) => {
  const { handleIncrement } = useCounterContext();
  return (
    <button className="button" onClick={handleIncrement}>
      {icon}
    </button>
  );
};

export { Increment };
