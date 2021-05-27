import { Fragment, useState } from "react";
import { generate } from "shortid";
import PropTypes from "prop-types";

const Form = ({ createAppointment }) => {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  //Get values
  const { pet, owner, date, time, symptoms } = appointment;

  //When the user press add appointment
  const submitAppointment = (event) => {
    event.preventDefault();
    //Validate
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Delete message
    setError(false);
    //Set ID
    appointment.id = generate();

    //Create appointment
    createAppointment(appointment);
    //Reset form
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptoms: "",
    });
  };

  //Function that runs every time the user types input
  const handlerState = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      <h2>Create Appointment</h2>

      {error ? (
        <p className="alerta-error">All the fields are required!</p>
      ) : null}
      <form onSubmit={submitAppointment}>
        <label htmlFor="pet">Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Put the name of the pet"
          onChange={handlerState}
          value={pet}
        />
        <label htmlFor="owner">Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Put the name of the owner"
          onChange={handlerState}
          value={owner}
        />
        <label htmlFor="date">Appointment Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          placeholder="Put the date of the appointment"
          onChange={handlerState}
          value={date}
        />
        <label htmlFor="time">Appointment Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          placeholder="Put the time of the appointment"
          onChange={handlerState}
          value={time}
        />
        <label htmlFor="symptoms">Symptoms Presented</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handlerState}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add Appointment
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired,
};

export default Form;
