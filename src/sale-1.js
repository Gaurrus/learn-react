const SaleJsxOne = ({price = 35000}) => {
  return (
    <div>
                   <big>
 
        <h1 align="center">
          14,15, 16 апреля! Праздничное открытие! Магазин промтоваров Галамарт!
        </h1>
        <p>
          <b>В честь праздника:</b>
        </p>
        <font face="Arial">
          <p>
            <b>
              <ins>При покупке от 500 рублей</ins>
            </b>
            - гарантированный
            <b>ПОДАРОК</b>.
          </p>
          <p>
            <ins>
              <b>Главный подарок</b>
            </ins>
            -<b>СЕРТИФИКАТ</b>
            на покупки
            <font color="red" face="Georgia" size="+1">
              <b>{price}</b>
            </font>
            рублей (разыгрывается между посетителями).
          </p>
          <i>
            <font color="red">
              Обладатель определится 16 апреля в 16<sup>00</sup>.
            </font>
            Наш адрес: г.Минск, пр. Победителей, 20.
          </i>
        </font>
      </big>
      <hr />
    </div>
  );
};

export default SaleJsxOne;
