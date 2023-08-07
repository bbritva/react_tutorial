interface Props {
  onBtnPress: (prev: number) => void;
  btnTypes: string[];
  currentState: number
}

function MyButton({ onBtnPress, btnTypes, currentState }: Props) {
  return (
    <button
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
    </button>
  );
}

export default MyButton;

/* <button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button> */
