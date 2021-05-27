import { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  console.log("Init App React!");
  //Appointemnst in Local Storage
  let initAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initAppointments) {
    initAppointments = [];
  }

  //Array appointments
  const [appointments, setAppointment] = useState(initAppointments);

  //Use Effect for do operations when the state changes
  //When the page is ready or the state changes!!
  useEffect(() => {
    console.log("useEffect");
    if (initAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [initAppointments, appointments]);

  const createAppointment = (appointment) => {
    setAppointment([...appointments, appointment]);
  };

  const deleteApointment = (id) => {
    const appsFilter = appointments.filter((app) => app.id !== id);
    setAppointment(appsFilter);
  };

  //Conditional message
  const title =
    appointments.length === 0
      ? "There are no appointments"
      : "Appointment Manager";

  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appoinment) => (
              <Appointment
                key={appoinment.id}
                appoinment={appoinment}
                deleteApointment={deleteApointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
