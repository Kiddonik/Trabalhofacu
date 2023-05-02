import React from 'react';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="inicio.html">
            <img src="icons/house-door-fill.svg" alt="house-door-fill" />
          </a>
        </li>
        <li>
          <a href="perfil.html">
            <img src="icons/person-fill.svg" alt="person-fill" />
          </a>
        </li>
        <li>
          <a href="jogos.html">
            <img src="icons/controller.svg" alt="controller" />
          </a>
        </li>
        <li>
          <a href="produtos.html">
            <img src="icons/joystick.svg" alt="joystick" />
          </a>
        </li>
        <li>
          <a href="carrinho.html">
            <img src="icons/cart3.svg" alt="cart3" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
