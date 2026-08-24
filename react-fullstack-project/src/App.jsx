function App() {
  const currentDay = 1;
  const totalDays = 90;
  const currentFocus = "React + JSX";
  const goal = "Become a full-stack developer";

  return (
    <>
      {/* Main heading */}
      <h1 className="title">90-Day Developer Journey</h1>

      {/* Current progress */}
      <p className="progress">
        Progress: {((currentDay / totalDays) * 100).toFixed(2)}%
      </p>

      {/* Current focus */}
      <h3>Current Focus</h3>
      <p>{currentFocus}</p>

      {/* Goal */}
      <h3>Goal</h3>
      <p>{goal}</p>

      {/* Remaining days */}
      <h3>Days Remaining</h3>
      <p>{totalDays - currentDay}</p>
    </>
  );
}

export default App;