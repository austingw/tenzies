export default function Die(props) {
  return (
    <div className="die">
      <h2 className="die-value">{props.number.value}</h2>
    </div>
  );
}