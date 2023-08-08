export default function Letter({ value, isShown }) {
    return <span className="letter">{isShown ? value : ' '}</span>;
  }