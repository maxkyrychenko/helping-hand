import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import * as yup from "yup";
import Button from "@components/Button/Button";
import styles from "./AuthSignupForm.module.scss";

const AuthSignupForm: FC<{className?: string}> = ({className}) => {
	const validationSchema = yup.object().shape({
		email: yup.string(),
		password: yup.string(),
		username: yup.string()
	});

	return (
		<Formik
			initialValues={{username: "", email: "", password: ""}}
			onSubmit={() => console.log("Submit")}
			validationSchema={validationSchema}
			validateOnBlur
		>
			<Form className={className}>
				<div className={styles.fields}>
					<Field
						label="Ім'я"
						className={styles.field}
						name="username"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label="Email"
						className={styles.field}
						name="email"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label="Пароль"
						type="password"
						className={styles.field}
						name="password"
						component={FormTextField}
						element={Input}
					/>
				</div>
				<Button
					size="big"
					className={styles.btn}
					text="Зареєструватись"
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default AuthSignupForm;
