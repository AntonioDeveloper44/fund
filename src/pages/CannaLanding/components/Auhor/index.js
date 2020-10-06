import React from 'react';
import axios from 'axios'


//Styles
import './styles.scss';
import {Button} from "antd";

//----------------------

export const Author = () => {
  //Render
    function createPayment() {
            axios
                .post('https://www.liqpay.ua/api/3/checkout', {
                    data: "eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIxMDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5IjoiaTU5NTAxMjg4Njk1IiwibGFuZ3VhZ2UiOiJydSJ9",
                    signature: "V7JGaCugnYdMQpZCQz+g8W32nOs=",
                })
                .then(res => {
                    console.log('res.data', res.data)
                    // history.push(`success`);
                })
                .catch((e) => {
                    console.log(e);
                });
    }

  return (
    <div className="author-block" id="author">
        {/*<h2>Допоможіть на обрану суму</h2>*/}
        {/*<Button type='primary' onClick={() => createPayment()}>1000 грн</Button>*/}

    {/*<form method="POST" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">*/}
    {/*<input type="hidden" name="data"*/}
    {/*value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOjUsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNGW0Lkg0YLQvtCy0LDRgCIsInB1YmxpY19rZXkiOiJpNTk1MDEyODg2OTUiLCJsYW5ndWFnZSI6InJ1In0="/>*/}
    {/*<input type="hidden" name="signature" value="SwbM0ycWicqy7Z5LKWwq8D72Rkg="/>*/}
    {/*<button style={{border: 'none', display:'inline-block', textAlign: 'center', padding: '7px 20px',*/}
    {/*color: '#fff' , fontSize:'16px',*/}
    {/*fontWeight: '600' , fontFamily:'OpenSans', cursor: 'pointer' ,*/}
    {/*borderRadius: '2px',*/}
    {/*background: 'rgba(122,183,43,1)' , onMouseOver:"this.style.opacity='0.5'", onMouseOut:"opacity='1';"}} >*/}
    {/*<img src="https://static.liqpay.ua/buttons/logo-small.png" name="btn_text"*/}
    {/*style={{marginRight: '7px', verticalAlign: 'middle'}}/>*/}
    {/*<span style={{verticalAlign:'middle'}}>Оплатить 5 UAH</span>*/}
    {/*</button>*/}
    {/*</form>*/}

    </div>
  );
};


