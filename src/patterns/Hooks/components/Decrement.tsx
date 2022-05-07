const Decrement = ({
  icon = "-",
  handleDecrement,
}: {
  icon?: string;
  handleDecrement: () => void;
}) => {
  return (
    <button className="button" onClick={handleDecrement}>
      {icon}
    </button>
  );
};

export { Decrement };
