function DaysRemaining({ currentDay, totalDays }) {
  return (
    <p>
      Days Remaining = {totalDays - currentDay}
    </p>
  );
}

export default DaysRemaining;