import utilStyles from "../../../styles/utils.module.css";
import AddOnsCheckbox from "./addOnsCheckbox";

export default function PickAddOns({ addOns, setAddOns, yearly }) {
	const checkboxData = [
		{
			isChecked: addOns["Online service"],
			title: "Online service",
			description: "Access to multiplayer games",
			price: 1,
		},
		{
			isChecked: addOns["Larger storage"],
			title: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: 2,
		},
		{
			isChecked: addOns["Customizable profile"],
			title: "Customizable profile",
			description: "Custom theme on your profile",
			price: 2,
		},
	];
	function updateAddOns(nextAddOns, isChecked) {
		setAddOns({
			...addOns,
			[`${nextAddOns}`]: !isChecked,
		});
	}
	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Pick add-ons
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Add-ons help enhance your gaming experience.
				</legend>

				{checkboxData.map((c) => {
					return (
						<AddOnsCheckbox
							key={c.title}
							isChecked={c.isChecked}
							title={c.title}
							description={c.description}
							price={c.price}
							updateAddOns={updateAddOns}
							yearly={yearly}
						/>
					);
				})}
			</fieldset>
		</>
	);
}
