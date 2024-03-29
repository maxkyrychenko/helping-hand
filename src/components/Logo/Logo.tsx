import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "@utils/constants/routes";
import classNames from "classnames";
import LogoIcon from "@icons/LogoIcon/LogoIcon";
import styles from "./Logo.module.scss";

const Logo: FC<{className?: string}> = ({className}) => (
	<NavLink className={classNames(className, styles.link)} to={HOME_ROUTE}>
		<LogoIcon />
	</NavLink>
);

export default Logo;
