import utilStyles from "../../../styles/utils.module.css";
import checkboxStyles from "../../../styles/PickAddOns/addOnsCheckbox.module.css";

export default function AddOnsCheckbox({
	isChecked,
	title,
	description,
	price,
	updateAddOns,
	yearly,
}) {
	return (
		<label
			htmlFor={`${title}`}
			className={`${checkboxStyles.checkboxContainer} ${
				isChecked && checkboxStyles.checkedContainer
			}`}
		>
			<input
				type="checkbox"
				id={`${title}`}
				className={checkboxStyles.checkboxInput}
				defaultChecked={isChecked}
				onChange={() => updateAddOns(title, isChecked)}
			/>
			<span className={checkboxStyles.checkboxSpan}></span>
			<div className={checkboxStyles.checkboxText}>
				<h3
					className={`${utilStyles.colorText} ${checkboxStyles.checkboxTitle}`}
				>
					{title}
				</h3>
				<p
					className={`${utilStyles.description} ${checkboxStyles.checkboxDescription}`}
				>
					{description}
				</p>
			</div>
			<p className={checkboxStyles.checkboxPrice}>
				+${price}
				{yearly ? "0/yr" : "/mo"}
			</p>
		</label>
	);
}
