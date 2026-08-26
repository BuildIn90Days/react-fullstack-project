function Status({ isCompleted }) {
  return (
    <p>
      Status: {isCompleted ? "Journey Completed 🎉" : "Journey In Progress 🚀"}
    </p>
  );
}

export default Status;
