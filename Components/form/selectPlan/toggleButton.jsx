import utilStyles from "../../../styles/utils.module.css";

export default function ToggleButton({ yearly, onToggle }) {
	return (
		<label className={utilStyles.toggleLabel} htmlFor="toggleYearly">
			<input
				type="checkbox"
				id="toggleYearly"
				defaultChecked={yearly}
				onClick={onToggle}
				className={utilStyles.toggleInput}
			/>
			<span className={utilStyles.toggleSpan} />
		</label>
	);
}
