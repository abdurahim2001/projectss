import React from 'react'
import aa from './Machen.module.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Machen = () => {
  return (
    <div className={aa.ab_foon}>

<div className={aa.class_link}>
        <Link to='/Section'>
          <b className={aa.class_b}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
          </b>
        </Link>
      </div>
      <div className={aa.text_h1}><h3>БЫКИ (СОБСТВЕННЫЕ)</h3></div>



<div className={aa.input_text}>
        <div className={aa.menu_text}>
        <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) </h6> </sup> Идентификационный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) </h6> </sup> Инвентарный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*)</h6> </sup> кличка (в хозяйстве)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(/) </h6> </sup> место рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(/) </h6> </sup> порода
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(+) </h6> </sup> породность
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> кому принадлежит
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(/) </h6> </sup> масть и приметы
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>


   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> группа крови
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> происхождение (если родилась не в хозяйстве)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(+) </h6> </sup> линия
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> О - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> О - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> О - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> М - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> М - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> М - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОМ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОМ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОМ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ММ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ММ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ММ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ООО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ООО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ООО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

        </div>




        <div className={aa.menu_text}>
        
        <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МОО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МОО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МОО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОМО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОМО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОМО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ММО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ММО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ММО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ООМ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ООМ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ООМ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МОМ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МОМ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МОМ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОММ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОММ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> ОММ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МММ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МММ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(-) (*) </h6> </sup> МММ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Живая масса при рождении, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Живая масса в 6 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Живая масса в 10 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Живая масса в 12 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Живая масса в 18 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Перемещение - откуда (наименование хозяйства/фирмы)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Перемещение - куда (наименование хозяйства)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Перемещение - дата
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Перемещение - возраст
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Перемещение - живая масса
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(/) </h6> </sup> Перемещение - цель перемещения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(*) </h6> </sup> Дата выбытия
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

   <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup> <h6>(/) </h6> </sup> Причина выбытия
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>

        </div>






















      </div>








    </div>
  )
}

export default Machen