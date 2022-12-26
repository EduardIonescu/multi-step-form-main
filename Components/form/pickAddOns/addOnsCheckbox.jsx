import utilStyles from "../../../styles/utils.module.css";

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
			className={`${utilStyles.checkboxContainer} ${
				isChecked && utilStyles.checkedContainer
			}`}
		>
			<input
				type="checkbox"
				className={utilStyles.checkboxInput}
				defaultChecked={isChecked}
				onChange={() => updateAddOns(title, isChecked)}
			/>
			<span className={utilStyles.checkboxSpan}></span>
			<div className={utilStyles.checkboxText}>
				<h3
					className={`${utilStyles.colorText} ${utilStyles.checkboxTitle}`}
				>
					{title}
				</h3>
				<p
					className={`${utilStyles.description} ${utilStyles.checkboxDescription}`}
				>
					{description}
				</p>
			</div>
			<p className={utilStyles.checkboxPrice}>
				+${price}
				{yearly ? "0/yr" : "/mo"}
			</p>
		</label>
	);
}
