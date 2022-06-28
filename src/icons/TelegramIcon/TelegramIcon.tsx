import React, {FC} from "react";
import {IconProps} from "@customTypes/index";
import classNames from "classnames";
import styles from "./TelegramIcon.module.scss";

const TelegramIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={classNames(className, styles.icon)}
		width={width || 20}
		height={height || 17}
		viewBox="0 0 20 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M19.943 1.54763L16.9249 15.9738C16.6972 16.992 16.1034 17.2454 15.2596 16.7657L10.6609 13.3311L8.44199 15.4941C8.19643 15.743 7.99105 15.9512 7.5178 15.9512L7.84819 11.2043L16.3713 3.39841C16.7418 3.06355 16.2909 2.87802 15.7953 3.21288L5.25867 9.93726L0.72255 8.49826C-0.264145 8.18602 -0.282004 7.4982 0.927925 7.01853L18.6706 0.0905301C19.4921 -0.221705 20.2109 0.276061 19.943 1.54763V1.54763Z" />
	</svg>
);
export default TelegramIcon;
