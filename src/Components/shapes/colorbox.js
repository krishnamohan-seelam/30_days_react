import "./shapes.css";
import { Colors } from "@blueprintjs/core";
import { Text } from "@blueprintjs/core";
import _ from "lodash";

const range = _.range(0, 32, 1);
const chunked_range = _.chunk(range, 7);
const Box = (props) => {
  const color = props.number % 2 === 0 ? "#CCFF90" : "#FFFF8D";
  return (
    <td>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        key={props.number}
      >
        <Text>{props.number}</Text>
      </div>
    </td>
  );
};

function PopulateRow(chunkedData) {
  return (
    <tr>
      {chunkedData.map((number) => (
        <Box number={number}></Box>
      ))}
    </tr>
  );
}

function ColorBox() {
  return (
    <table>
      <thead></thead>

      {chunked_range.map((i) => PopulateRow(i))}
    </table>
  );
}

export default ColorBox;
