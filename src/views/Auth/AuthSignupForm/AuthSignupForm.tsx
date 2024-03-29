import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import {getIsAuthSubmitting} from "@store/auth/auth.selectors";
import {useNavigate} from "react-router-dom";
import {TASKS_ROUTE} from "@utils/constants/routes";
import {RegisterArgs} from "@customTypes/services/auth";
import FormPasswordField from "@components/FormPasswordField/FormPasswordField";
import styles from "./AuthSignupForm.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import AuthService from "../../../services/auth/auth.service";
import {signupFormValidation} from "../../../vaildation";

const AuthSignupForm: FC<{className?: string}> = ({className}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isFetching = useAppSelector(getIsAuthSubmitting);

	const handleSubmit = async (
		values: RegisterArgs,
		{setStatus}: FormikHelpers<RegisterArgs>
	) => {
		await dispatch(
			AuthService.register(
				values,
				() => navigate(TASKS_ROUTE),
				e => {
					setStatus(e.response.data.error.message);
				}
			)
		);
	};

	return (
		<Formik
			initialValues={{
				// email: "",
				username: "",
				password: "",
				confirmPassword: ""
			}}
			onSubmit={handleSubmit}
			validationSchema={signupFormValidation}
			validateOnBlur
		>
			{({status, isValid}) => (
				<Form className={className} noValidate>
					{status && <p className={styles.status}>{status}</p>}
					<div className={styles.fields}>
						<Field
							label="Name"
							className={styles.field}
							name="username"
							component={FormTextField}
							element={Input}
						/>

						<Field
							label="Password"
							className={styles.field}
							name="password"
							component={FormPasswordField}
							element={Input}
						/>

						<Field
							label="Confirm password"
							className={styles.field}
							name="confirmPassword"
							component={FormPasswordField}
							element={Input}
						/>
					</div>
					<Button
						disabled={isFetching || !isValid}
						size="big"
						className={styles.btn}
						text="Sign up"
						isSubmit
					/>
				</Form>
			)}
		</Formik>
	);
};

export default AuthSignupForm;
