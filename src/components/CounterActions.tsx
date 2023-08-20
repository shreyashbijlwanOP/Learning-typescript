import { counterDispatchObject } from "../App";

interface CounterActionsProps {
  callback: (action: counterDispatchObject) => void;
}

interface IActionButton {
  type: "increment" | "decrement" | "reset";
  value: number;
  label: string;
}

const actionButtons: IActionButton[] = [
  {
    type: "increment",
    value: 3,
    label: "Plus",
  },
  {
    type: "decrement",
    value: 2,
    label: "Minus",
  },
  {
    type: "reset",
    value: 0,
    label: "Reset",
  },
];

const CounterActions = ({ callback }: CounterActionsProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {actionButtons.map((button) => (
        <button
          style={{
            fontSize: "1rem",
            marginRight: "5px",
          }}
          onClick={() =>
            callback({
              type: button.type,
              payload: {
                value: button.value,
              },
            })
          }
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default CounterActions;
