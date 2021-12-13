const SaleJsxOne = ({ price = 30000, dates = "14, 15, 16" }) => {
  return (
    <div>
      <big>
        <h1 align="center">
          {dates} апреля! Праздничное открытие! Магазин промтоваров Галамарт!
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
