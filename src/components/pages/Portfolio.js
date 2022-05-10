import React from 'react';

export default function Portfolio() {
  return (
    <section className="container my-5">    
    <div className="row">      
      <div className="col-12 col-md-4 col-xl-3">
        <h1> Work </h1>        
      </div>
      <div className="col-12 col-md-8 col-xl-9 textoPersonalDescription">        
        <a className="card works divSafeTrip" href="https://josevidmal.github.io/u7-project1-team4/"><span className="tituloWorks">Safe Trip Planer</span></a>
        <a className="card works divWeatherDashboard" href="https://marcogonzalezguzman77.github.io/weatherDashboard/"><span className="tituloWorks">Weather Dashboard</span></a>
        <a className="card works divWorkDay" href="https://marcogonzalezguzman77.github.io/workDayScheduler/"><span className="tituloWorks">Work Day Scheduler</span></a>
        <a className="card works divEncriptedMessaging" href="https://www.criptosedena.org:4000/"><span className="tituloWorks">Encrypted instant messaging</span></a>      
        <a className="card works divProjectManagment" href="https://guarded-gorge-18778.herokuapp.com/notes"><span className="tituloWorks">Note Taker</span></a>          
        <a className="card works divEmployeeManager" href="https://www.youtube.com/watch?v=XPmssXGg2cI"><span className="tituloWorks">Employee Manager</span></a>
        <a className="card works divEcommerce" href="https://www.youtube.com/watch?v=CbLu13pZGVI"><span className="tituloWorks">E-commerce Back End</span></a>
        <a className="card works divLifeMultitaskManager" href="https://life-multitask-manager-cdbc.herokuapp.com/"><span className="tituloWorks">Life Multitask Manager</span></a>
                       
        
      </div>
    </div>
  </section>
  );
}
