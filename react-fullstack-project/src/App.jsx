import Header from "./components/Header";
import Progress from "./components/Progress";
import Focus from "./components/Focus";
import Goal from "./components/Goal";
import DaysRemaining from "./components/DaysRemaining";

function App() {
  const currentDay = 4;
  const totalDays = 100;
  const currentFocus = "React + JSX";
  const goal = "Become a full-stack developer";

  return (
    <>
      <Header />

      <Progress
        currentDay={currentDay}
        totalDays={totalDays}
      />

      <Focus currentFocus={currentFocus} />

      <Goal goal={goal} />

      <DaysRemaining
        currentDay={currentDay}
        totalDays={totalDays}
      />
    </>
  );
}

export default App;