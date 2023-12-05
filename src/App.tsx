import { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './App.module.css';
import classnames from 'classnames';

function validateEmail(value: string) {
  if (!value) {
    return 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2, 4}$/i.test(value)) {
    return 'Invalid email address'
  }
};

function validatePassword(value: string) {
  if (!value) {
    return 'Required'
  }
};

const App: FC = (): JSX.Element => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log('submit', values)
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label
            className={classnames(styles.label, {
              [styles.errorLaber]: errors.email && touched.email,
            })}
          >
            Электронная почта
          </label>
          <Field
            className={classnames(styles.field, {
              [styles.errorInput]: errors.email && touched.email,
            })}
            name="email"
            type="email"
            validate={validateEmail}
          />
          {errors.email && touched.email && (
            <div className={styles.error}>{errors.email}</div>
          )}
          <label className={classnames(styles.label)}>Пароль</label>
          <Field
            className={classnames(styles.field, {
              [styles.errorInput]: errors.password && touched.password,
            })}
            name="password"
            type="password"
            validate={validatePassword}
          />
          {errors.password && touched.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
          <button className={styles.button} type="submit">
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  )
}
export default App;
