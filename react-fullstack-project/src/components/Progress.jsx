function Progress({ currentDay, totalDays }) {
  return (
    <p>
      Progress: {((currentDay / totalDays) * 100).toFixed(2)}%
    </p>
  );
}

export default Progress;