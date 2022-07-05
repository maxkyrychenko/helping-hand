import React, {FC, MouseEventHandler} from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import styles from "./MenuItem.module.scss";

type As = "button" | "link";

interface MenuItemProps {
	className?: string;
	icon: FC<{className?: string}>;
	text: string;
	path?: string;
	onClick: MouseEventHandler;
	as?: As;
	isActive?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({
	className,
	onClick,
	icon: Icon,
	text,
	path,
	isActive,
	as
}) => {
	if (as === "button") {
		return (
			<button
				type="button"
				onClick={onClick}
				className={classNames(className, styles.item, {
					[styles.active]: isActive
				})}
			>
				<Icon className={styles.icon} />
				<span>{text}</span>
			</button>
		);
	}

	return (
		<NavLink
			onClick={onClick}
			to={path}
			end
			className={props =>
				classNames(className, styles.item, {[styles.active]: props.isActive})
			}
		>
			<Icon className={styles.icon} />
			<span>{text}</span>
		</NavLink>
	);
};

export default MenuItem;
