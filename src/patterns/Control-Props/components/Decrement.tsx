import { useCounterContext } from "../useCounterContext";

const Decrement = ({ icon = null }: { icon?: string | null }) => {
  const { handleDecrement } = useCounterContext();
  return (
    <button className="button" onClick={handleDecrement}>
      {icon ? icon : "-"}
    </button>
  );
};

export { Decrement };
