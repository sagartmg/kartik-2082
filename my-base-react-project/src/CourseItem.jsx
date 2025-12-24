// const CourseItem = (props) => {
//   return (
//     <div className="course">
//       <img src={props.image} />
//       <p>{props.name}</p>
//       <p>{props.duration}</p>
//       <p>{props.status ? "yes" : "no"}</p>
//       <p>{props.description}</p>
//     </div>
//   );
// };

// const CourseItem = (props) => {
//   let { image, name, duration, status, description } = props;
//   return (
//     <div className="course">
//       <img src={image} />
//       <p>{name}</p>
//       <p>{duration}</p>
//       <p>{status ? "yes" : "no"}</p>
//       <p>{description}</p>
//     </div>
//   );
// };

const CourseItem = ({ image, name, duration, status, description }) => (
  <div className="course">
    <img src={image} />
    <p>{name}</p>
    <p>{duration}</p>
    <p>{status ? "yes" : "no"}</p>
    <p>{description}</p>
  </div>
);

export default CourseItem;
