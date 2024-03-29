import React from "react";
import TabItem from "@components/TabItem/TabItem";
import {
	SETTINGS_ACCOUNT_ROUTE,
	SETTINGS_INTEGRATION_ROUTE,
	SETTINGS_INTERFACE_ROUTE
} from "@utils/constants/routes";
import TabList from "@components/TabList/TabList";
import ScreenSizes from "@utils/constants/screenSizes";
import classNames from "classnames";
import styles from "./SettingsTabs.module.scss";
import useWindowSize from "../../../hooks/useWindowSize";

const SettingsTabs = () => {
	const {width} = useWindowSize();
	return (
		<TabList
			className={classNames(styles.tabs, {
				[styles.tablet]: width <= ScreenSizes.TabletWidth
			})}
			variant={width <= ScreenSizes.TabletWidth ? "horizontal" : "vertical"}
			adaptiveLineSizing
		>
			<TabItem text="Account" to={SETTINGS_ACCOUNT_ROUTE} />

			<TabItem text="Integration" to={SETTINGS_INTEGRATION_ROUTE} />

			<TabItem to={SETTINGS_INTERFACE_ROUTE} text="Interface" />
		</TabList>
	);
};

export default SettingsTabs;
