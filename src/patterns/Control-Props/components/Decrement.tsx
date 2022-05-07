import { useCounterContext } from "../useCounterContext";

const Decrement = ({ icon = "-" }: { icon?: string }) => {
  const { handleDecrement } = useCounterContext();
  return (
    <button className="button" onClick={handleDecrement}>
      {icon}
    </button>
  );
};

export { Decrement };
