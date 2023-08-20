interface CounterDisplayProps {
  counter: number;
}

const CounterDisplay = ({ counter }: CounterDisplayProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        fontWeight: "400",
      }}
    >
      {counter}
    </div>
  );
};

export default CounterDisplay;
