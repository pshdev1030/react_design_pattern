const Increment = ({
  icon = "+",
  handleIncrement,
}: {
  icon?: string;
  handleIncrement: () => void;
}) => {
  return (
    <button className="button" onClick={handleIncrement}>
      {icon}
    </button>
  );
};

export { Increment };
