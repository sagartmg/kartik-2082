import Home from "./Home";
import "./App.css";
import { Tabs } from "./Tabs";
import Counter from "./Counter";
import { Todo } from "./Todo";
// export default function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

// export default App;

export const App = () => {
  console.log("app render");
  return (
    <div className="app m-8">
      {/* routing */}
      {/* <Home /> */}
      {/* <Tabs/>
      <Counter /> */}
      <Todo />
    </div>
  );
};
