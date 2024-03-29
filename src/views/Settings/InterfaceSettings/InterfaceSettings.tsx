import React from "react";
import {useDispatch} from "react-redux";
import ThemeButton from "@components/ThemeButton/ThemeButton";
import Typography from "@components/Typography/Typography";
import {setTheme} from "@store/app/app.slice";
import themes from "@utils/constants/themes";
import {getAppTheme} from "@store/app/app.selectors";
import {Theme} from "@customTypes/components";
import styles from "./InterfaceSettings.module.scss";
import useAppSelector from "../../../hooks/useAppSelector";

const InterfaceSettings = () => {
	const dispatch = useDispatch();
	const themeSelector = useAppSelector(getAppTheme);

	const handleClick = (item: Theme) => dispatch(setTheme(item));

	return (
		<>
			<Typography className={styles.title} variant="h3" component="h3">
				Interface
			</Typography>
			<Typography className={styles["small-title"]} variant="h4" component="h4">
				Accent color
			</Typography>
			<div className={styles.items}>
				{themes.map(theme => (
					<ThemeButton
						key={theme.name}
						className={styles.item}
						onClick={handleClick}
						isActive={theme.name === themeSelector.name}
						theme={theme}
					/>
				))}
			</div>
		</>
	);
};

export default InterfaceSettings;
