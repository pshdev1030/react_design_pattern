const Decrement = ({
  icon = "-",
  handleDecrement,
  ...otherProps
}: {
  icon?: string;
  otherProps?: any[] | undefined;
  handleDecrement?: () => void;
}) => {
  return (
    <button className="button" onClick={handleDecrement} {...otherProps}>
      {icon}
    </button>
  );
};

export { Decrement };
