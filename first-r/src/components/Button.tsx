import { Button } from "@mui/material";

interface Props {
  onBtnPress: (prev: number) => void;
  btnTypes: string[];
  currentState: number
}

function MyButton({ onBtnPress, btnTypes, currentState }: Props) {
  return (
    <Button
      variant="outlined"
      type="button"
      className={"btn btn-primary btn-" + btnTypes[currentState]}
      onClick={() => {
        let newState = currentState + 1
        if (newState >= btnTypes.length)
            onBtnPress(0);
        else
            onBtnPress(newState)
      }}
    >
      {btnTypes[currentState]}
    </Button>
  );
}

export default MyButton;

