import Header from "./components/Header";
import Progress from "./components/Progress";
import Focus from "./components/Focus";
import Goal from "./components/Goal";
import DaysRemaining from "./components/DaysRemaining";
import Status from "./components/Status";

function App() {
  const currentDay = 3;
  const totalDays = 90;
  const currentFocus = "React + JSX";
  const goal = "Become a full-stack developer";
  const isCompleted = currentDay >= totalDays;

  return (
    <>
      <Header />
      <Progress currentDay={currentDay} totalDays={totalDays} />
      <Focus currentFocus={currentFocus} />
      <Goal goal={goal} />
      <DaysRemaining currentDay={currentDay} totalDays={totalDays} />
      <Status isCompleted={isCompleted} />
    </>
  );
}

export default App;
