import toggleStyles from "../../../styles/SelectPlan/ToggleButton.module.css";

export default function ToggleButton({ yearly, onToggle }) {
	return (
		<label className={toggleStyles.toggleLabel} htmlFor="toggleYearly">
			<input
				type="checkbox"
				id="toggleYearly"
				defaultChecked={yearly}
				onClick={onToggle}
				className={toggleStyles.toggleInput}
			/>
			<span className={toggleStyles.toggleSpan} />
		</label>
	);
}
