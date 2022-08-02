const Numbers = (props) => {
  return props.numbers.map((number) => <li>{number}</li>);
};

const numbers = [1, 2, 3, 4, 5];
const MapNumbers = () => {
  return (
    <ul>
      <Numbers numbers={numbers} />
    </ul>
  );
};

export default MapNumbers;
