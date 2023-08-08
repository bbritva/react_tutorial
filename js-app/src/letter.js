export default function Letter({ value, isShown }) {
    return <span>{isShown ? value : ' '}</span>;
  }