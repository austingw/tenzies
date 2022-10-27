export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die" style={styles} onClick={props.holdDie}>
      <h2 className="die-value">{props.value}</h2>
    </div>
  );
}
