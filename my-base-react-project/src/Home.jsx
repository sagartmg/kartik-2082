import Header from "./Header";

const Home = () => {
  let courses = [
    {
      name: "html",
      description:
        "html is m dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "1 weeks",
      status: true,
      image: "https://placehold.co/200",
    },
    {
      name: "css",
      description:
        "css is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "1 weeks",
      status: true,
      image: "https://placehold.co/200",
    },
    {
      name: "js",
      description:
        "js is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: true,
      image: "https://placehold.co/200",
    },
    {
      name: "react",
      description:
        "react is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: false,
      image: "https://placehold.co/200",
    },
    {
      name: "node",
      description:
        "js is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: false,
      image: "https://placehold.co/200",
    },
    {
      name: "express",
      description:
        "js is sum dolor sit amet consectetur adipisicing elit. Sit dolore min",
      duration: "2 weeks",
      status: false,
      image: "https://placehold.co/200",
    },
  ];

  let name = "JOhn Doe";
  let description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore minima saepe quis accusamus inventore excepturi, nostrum, unde quae laborum similique suscipit vitae reiciendis assumenda non eaque quidem adipisci! Tempore.";

  let tags = ["react", "mern", "html", "css", "js"];

  let convertedtags = tags.map((el) => <li>{el}</li>); // [ <li>react</li> <li>mern</li>]
  console.log(convertedtags);

  return (
    <div>
      <Header />
      <section>
        <h1>{name}</h1>
        <ul>
          {tags.map((el) => (
            <li>{el}</li>
          ))}

          {convertedtags}
          {/*
          
          Instead of this, we can use map function .

          <li>react</li>
          <li>mern</li>
          <li>html</li> 
          
          */}
        </ul>
        <p>{description}</p>
      </section>
      <h2>Courses</h2>
      <ul>
        {courses.map((el) => {
          return (
            <li className="course">
              <img src={el.image}/>
              <p>{el.name}</p>
              <p>{el.description}</p>
              <p>{el.duration}</p>
              <p>status:{el.status}</p>
            </li>
          );
        })}
        <li>hml</li>
        <li>css</li>
        <li>js</li>
      </ul>

      <table>
        <thead>
          <th>Title</th>
          <th>Duration</th>
          <th>Status</th>
        </thead>
        <tbody>
          {/* <tr>
            <td>one</td>
            <td>1 weeks</td>
            <td>complted</td>
          </tr>
          <tr>
            <td>two</td>
            <td>1 weeks</td>
            <td>complted</td>
          </tr>
          <tr>
            <td>three</td>
            <td>1 weeks</td>
            <td>complted</td>
          </tr> */}
          {courses.map((el) => {
            return (
              <tr>
                <td>{el.name}</td>
                <td>{el.duration}</td>
                <td>{el.status ? "complted" : "pending" } {true} {false}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
