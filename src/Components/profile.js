import { Tag, Icon, IconName, H3, H6, H1 } from "@blueprintjs/core";
import profleImage from "../images/download.jpeg";
import "./profile.css";

const SKILLS = [
  "HTML",
  "CSS",
  "JS",
  "REACT",
  "MONGODB",
  "PYTHON",
  "NUMPY",
  "PANDAS",
];
const Tags = (props) => {
  return (
    <>
      {props.skills.map((skill) => (
        <Tag className={"tag"}>{skill}</Tag>
      ))}
    </>
  );
};

const User = (props) => {
  return (
    <div>
      <H1>
        {props.firstName},{props.lastName}
      </H1>
      <H3>
        {props.designation} - {props.country}
      </H3>
      <Tags skills={SKILLS}></Tags>
    </div>
  );
};

const ShowDate = (dateTime) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = dateTime.getFullYear();
  const month = months[dateTime.getMonth()].slice(0, 3);
  const date = dateTime.getDate();
  return `${year} ${month} ${date}`;
};

function Profile() {
  return (
    <>
      <img src={profleImage} alt="Avatar" width="160" height="120"></img>
      <User
        firstName="Krishna"
        lastName="Seelam"
        designation="Programmer"
        country="India"
      />
      <span>
        <Icon icon="time" htmlTitle="Joined 17 July 2022"></Icon>
        Joined {ShowDate(new Date())}
      </span>
    </>
  );
}

export default Profile;
