/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { postFormRequest } from '../../store/form-store-saga';

import styles from './succes-form.module.css';

export const SuccesForm = () => {
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
      <h2>Куда доставить покупки?</h2>
      <Formik initialValues={{ name: '', email: '', tel: '', adress: '' }} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={styles.form}>
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
