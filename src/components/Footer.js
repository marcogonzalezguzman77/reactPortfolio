import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header() {
  return (
    <div className="col-12 footer">
        <a href="https://github.com/marcogonzalezguzman77" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.facebook.com/marcoantonio.gonzalezguzman.3/" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/in/marco-antonio-gonz%C3%A1lez-guzm%C3%A1n-73660b224/" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  );
}

export default Header;
