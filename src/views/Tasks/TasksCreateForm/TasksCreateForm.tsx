import Button from "@components/Button/Button";
import FormDropdownField from "@components/FormDropdownField/FormDropdownField";
import FormTagsField from "@components/FormTagsField/FormTagsField";
import FormTextField from "@components/FormTextField/FormTextField";
import Input from "@components/Input/Input";
import Textarea from "@components/Textarea/Textarea";
import {getTags} from "@store/tags/tags.selectors";
import {getIsTaskCreating, getTasksLimit} from "@store/tasks/tasks.selectors";
import classNames from "classnames";
import {Field, Form, Formik} from "formik";
import React from "react";
import * as yup from "yup";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import TasksService from "../../../services/tasks/tasks.service";
import styles from "./TasksCreateForm.module.scss";

interface TasksCreateFormValues {
	title: string;
	text: string;
	tags: string[];
	course: string[];
	subject: string[];
}

const TasksCreateForm = ({onSubmit}: {onSubmit: () => void}) => {
	const dispatch = useAppDispatch();
	const tags = useAppSelector(getTags);

	const isFetching = useAppSelector(getIsTaskCreating);
	const limit = useAppSelector(getTasksLimit);
	const initialValues: TasksCreateFormValues = {
		title: "",
		text: "",
		tags: [],
		course: [],
		subject: []
	};

	const validationSchema = yup.object().shape({
		title: yup.string(),
		text: yup.string(),
		tags: yup.array().of(yup.string())
	});

	const handleSubmit = (values: TasksCreateFormValues) => {
		dispatch(TasksService.createOne({...values, limit}));
		onSubmit();
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			validateOnBlur
		>
			<Form>
				<div className={styles.fields}>
					<Field
						className={styles.field}
						name="tags"
						component={FormTagsField}
						options={tags.general_categories.map(tag => ({
							value: tag.uuid,
							id: tag.uuid,
							text: tag.text
						}))}
						placeholder="Категорії"
					/>

					<Field
						className={styles.field}
						name="course"
						component={FormDropdownField}
						options={tags.courses.map(tag => ({
							value: tag.uuid,
							id: tag.uuid,
							text: tag.text
						}))}
						placeholder="Курси"
					/>

					<Field
						className={styles.field}
						name="subject"
						component={FormDropdownField}
						options={tags.subjects.map(subject => ({
							value: subject.uuid,
							id: subject.uuid,
							text: subject.text
						}))}
						placeholder="Предмети"
					/>

					<Field
						label="Заголовок"
						className={classNames(styles.field, styles.title)}
						name="title"
						component={FormTextField}
						element={Input}
					/>

					<Field
						label="Опис"
						className={styles.field}
						name="text"
						component={FormTextField}
						element={Textarea}
						rows={6}
					/>
				</div>
				<Button
					disabled={isFetching}
					size="big"
					className={styles.btn}
					text="Створити"
					isSubmit
				/>
			</Form>
		</Formik>
	);
};

export default TasksCreateForm;
