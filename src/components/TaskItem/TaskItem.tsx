import Button from "@components/Button/Button";
import TagItem from "@components/TagItem/TagItem";
import Typography from "@components/Typography/Typography";
import UserInfo from "@components/UserInfo/UserInfo";
import Tag from "@customTypes/entities/tag";
import User from "@customTypes/entities/user";
import StatusIcon from "@icons/StatusIcon/StatusIcon";
import {PROFILE_ROUTE, TASKS_ROUTE} from "@utils/constants/routes";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
	title: string;
	description: string;
	tags: Tag[];
	creator: User;
	id: string;
	date: string;
	isActive: boolean;
}

const TaskItem: FC<TaskItemProps> = ({
	title,
	date,
	creator,
	description,
	id,
	isActive,
	tags
}) => (
	<div className={styles.item}>
		<div className={styles.header}>
			<Typography className={styles.title} variant="h4" component="h4">
				{title}
			</Typography>
			<StatusIcon variant={isActive ? "active" : "inactive"} />
		</div>
		<UserInfo
			path={`${PROFILE_ROUTE}/${creator.id}/tasks`}
			className={styles.user}
			avatarPath={creator.photo}
			username={creator.username}
		/>
		<Typography className={styles.description} variant="body1" component="p">
			{description}
		</Typography>
		<div className={styles.tags}>
			{tags.map(tag => (
				<TagItem key={tag} text={tag} />
			))}
		</div>
		<div className={styles.footer}>
			<NavLink className={styles.btn} to={`${TASKS_ROUTE}/${id}`}>
				<Button size="small" variant="outline" text="Read more" />
			</NavLink>
			<Typography className={styles.date} variant="body1" component="p">
				{date}
			</Typography>
		</div>
		<NavLink className={styles.more} to={`${TASKS_ROUTE}/${id}`} />
	</div>
);

export default TaskItem;
