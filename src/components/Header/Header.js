import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import * as actions from 'actions';

function Header() {
  return (
    <header>
      <img src='' alt='logo'></img>
      <div className='price price_selected'>
          <i className='price-icon'></i>
          <div className='price-value'> Se ha creado toda la estructura base de la aplicacion por problemas
           de disposición de tiempo no se ha podido completar el diseño de la pagina, con mas tiempo puedo hjacer una excelente aplicación</div>
          <i className='price-close'></i>
      </div>
    </header>
  );
}

export default connect(null, actions)(Header);