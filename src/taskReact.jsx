import PropTypes from "prop-types";

export const Task = ({ value }) => {
  return (
    <>
      <h1> CounterAPP</h1>
      <h2> {value}</h2>
    </>
  );
};

Task.propTypes = {
  value: PropTypes.number,
};
