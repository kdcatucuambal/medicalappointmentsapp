import PropTypes from "prop-types";

const Appointment = ({ appoinment, deleteApointment }) => (
  <div className="cita">
    <p>ID: {appoinment.id}</p>
    <p>
      Pet: <span>{appoinment.pet}</span>
    </p>
    <p>
      Owner: <span>{appoinment.owner}</span>
    </p>
    <p>
      Date: <span>{appoinment.date}</span>
    </p>
    <p>
      Time: <span>{appoinment.time}</span>
    </p>
    <p>
      Symptoms: <span>{appoinment.symptoms}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => deleteApointment(appoinment.id)}
    >
      Delete
    </button>
  </div>
);

Appointment.propTypes = {
   appoinment: PropTypes.object.isRequired,
   deleteApointment: PropTypes.func.isRequired
}

export default Appointment;
