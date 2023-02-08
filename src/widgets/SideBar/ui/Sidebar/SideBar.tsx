import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./SideBar.module.scss";

interface SideBarProps {
	className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
	const { className } = props;

	const [collapsed, setCollapsed] = useState(false);
	const toggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button onClick={toggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				{/* LanSwitcher */}
			</div>
		</div>
	);
};
