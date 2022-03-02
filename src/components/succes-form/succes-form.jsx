/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { postFormRequest } from '../../store/form-store-saga';

import styles from './succes-form.module.css';

export const SuccesForm = ({ state }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(postFormRequest(values));
    console.log(values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Поле обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ошибка адреса';
    }
    if (!values.name) {
      errors.name = 'Поле обязательно';
    }
    if (!values.adress) {
      errors.adress = 'Поле обязательно';
    }
    return errors;
  };

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          tel: '',
          adress: '',
          tv: state.tv.value,
          tvCost: state.tv.cost,
          fridge: state.fridge.value,
          fridgeCost: state.fridge.cost,
          washingMashine: state.washingMashine.value,
          washingMashineCost: state.washingMashine.cost,
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h2>Вы хотите приобрести:</h2>
            {state.tv.value ? (
              <div>
                <label htmlFor="tv">телевизоров</label>
                <Field type="text" name="tv" disabled id="tv" style={{ width: 20 }} />
                <span>шт. </span>
                <label htmlFor="tvCost">на сумму</label>
                <Field type="text" name="tvCost" disabled id="tvCost" style={{ width: 40 }} />
              </div>
            ) : null}
            {state.fridge.value ? (
              <div>
                <label htmlFor="fridge">холодильников</label>
                <Field type="text" name="fridge" disabled id="fridge" style={{ width: 20 }} />
                <span>шт. </span>
                <label htmlFor="fridgeCost">на сумму</label>
                <Field type="text" name="fridgeCost" disabled id="fridgeCost" style={{ width: 40 }} />
              </div>
            ) : null}
            {state.washingMashine.value ? (
              <div>
                <label htmlFor="washingMashine">стиральниых машин</label>
                <Field type="text" name="washingMashine" disabled id="washingMashine" style={{ width: 20 }} />
                <span>шт. </span>
                <label htmlFor="washingMashineCost">на сумму</label>
                <Field type="text" name="washingMashineCost" disabled id="washingMashineCost" style={{ width: 40 }} />
              </div>
            ) : null}
            <h2>Куда доставить покупки?</h2>
            <Field type="text" name="name" placeholder="Ваше имя" />
            <ErrorMessage name="name" component="div" />
            <Field type="text" name="adress" placeholder="Адрес доставки" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field type="tel" name="tel" placeholder="Телефон" />
            <ErrorMessage name="tel" component="div" />
            <label htmlFor="date">Дата доставки</label>
            <Field type="date" name="date" id="date" />
            <ErrorMessage name="tel" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
