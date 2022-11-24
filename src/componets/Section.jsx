import React from 'react'
import aa from '../componets/Section.module.css'
import { Link } from "react-router-dom";

const Section = () => {
    return (
        <div className={aa.body_menu}>
            <div className={aa.class_link}>
                <Link to='/menu'>
                    <b className={aa.class_b}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </b>
                </Link>
            </div>


            <div className={aa.body_menu_1}>
                <div className={aa.menu}>
                    <div className={aa.hexagon}> <Link to='/texnik'>Маточное Поголовье</Link> </div>
                    <div className={aa.hexagon}><Link to='/div'>Быки (Семя)</Link></div>
                    <div className={aa.hexagon}>  <Link to='/machen'>Быки (Собственные)</Link></div>
                    {/* <div > <Link className={aa.border_1} to='/texnik'><b>Маточное Поголовье</b></Link> </div>
                    <div ><Link className={aa.border_2} to='/Div'><b>Быки (Семя)</b></Link></div>
                    <div >  <Link className={aa.border_3} to='/machen'><b>Быки (Собственные)</b></Link></div> */}
                </div>
            </div>


        </div>
    )
}

export default Section