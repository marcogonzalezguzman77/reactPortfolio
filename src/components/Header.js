import React from 'react';
import fotoPerfil from '../images/fotoPerfil.webp'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header() {
  return (
    <div className="container-fluid bg-dark text-light mb-5 p-3">
      <div className="d-flex align-items-center cabecera center" >
        <img src={fotoPerfil} alt="Perfil" className="avatar" />
        <h1 className="tituloCabecera">Marco Antonio González Guzmán</h1> 
      </div>
    </div>  
  );
}

export default Header;
