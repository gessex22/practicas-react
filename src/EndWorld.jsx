import PropTypes from "prop-types";

export const NdelWorld = ({ title, time }) => {
  return (
    <>
      <h1>{title} </h1>
      <p> Fin del mundo desde un modulo exportado</p>
      <p> {time + 1}</p>
    </>
  );
}

NdelWorld.propType = {
title: PropTypes.string.isRequired,
time: PropTypes.number.isRequired

}


NdelWorld.defaultProps = {

title : 'not title',
time: 99999
}





