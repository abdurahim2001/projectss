import React from 'react'
import { Link } from "react-router-dom";
import aa from './Menu.module.css'


const Menu = () => {
  return (
    <div className={aa.body_menu}>
{/*       
        <Link to='/Texnik'>bghghg</Link>
        <Link to='/Section'>bghghg</Link> */}
        	<div className={aa.main}>  	
		
           
			<div className={aa.signup}>
				<form>
					<label for="chk" aria-hidden="true">Регистрация</label>
					<input type="text" name="txt" placeholder="Имя " required=""/>
					<input type="email" name="email" placeholder="Электронная почта" required=""/>
					<input type="password" name="pswd" placeholder="Пароль" required=""/>
					<button><Link to='/Section'>Далее</Link> </button>
				</form>
			</div>

			<div className={aa.login}>
				<form>
				</form>
			</div>
	</div>
    </div>
  )
}

export default Menu