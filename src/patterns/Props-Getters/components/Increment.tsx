const Increment = ({
  icon = "+",
  handleIncrement,
  ...otherProps
}: {
  icon?: string;
  handleIncrement?: () => void;
  otherProps?: any[] | undefined;
}) => {
  return (
    <button className="button" onClick={handleIncrement} {...otherProps}>
      {icon}
    </button>
  );
};

export { Increment };
