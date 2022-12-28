import utilStyles from "../../styles/utils.module.css";
import summaryStyles from "../../styles/Summary.module.css";

export default function Summary({ formData, toggleYearly }) {
	const cardOptionToName = ["Arcade", "Advanced", "Pro"];
	const cardName = cardOptionToName[formData.planInfo.cardOption];
	const yearly = formData.planInfo.timeframe;
	const timeframe = yearly ? "Yearly" : "Monthly";
	const perTimeframe = yearly ? "per year" : "per month";
	const cardPrice = 9 + formData.planInfo.cardOption * 3;
	const pricePerTimeframe = yearly ? "0/yr" : "/mo";
	const addOnsInfo = formData.addOnsInfo;
	const activeAddOns = Object.keys(addOnsInfo).filter(
		(addOn) => addOnsInfo[addOn]
	);

	const addOnsPrice = activeAddOns.reduce(
		(accumulator, currentValue) =>
			accumulator + (currentValue == "Online service" ? 1 : 2),
		0
	);

	const totalPrice = cardPrice + addOnsPrice;
	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Finishing up
			</h1>
			<p className={utilStyles.description}>
				Double-check everything looks OK before confirming.
			</p>

			<article className={summaryStyles.containerSummary}>
				<div className={summaryStyles.containerSeparate}>
					<div>
						<h3
							className={`${utilStyles.colorText} ${summaryStyles.fontSize21}`}
						>
							{cardName} ({timeframe})
						</h3>
						<button
							type="button"
							onClick={toggleYearly}
							className={summaryStyles.buttonChange}
						>
							Change
						</button>
					</div>
					<h3
						className={`${utilStyles.colorText}  ${summaryStyles.fontSize21}`}
					>
						${cardPrice}
						{pricePerTimeframe}
					</h3>
				</div>
				<hr className={summaryStyles.lineBreak} />
				{activeAddOns.map((addOn, i) => (
					<li
						className={`${summaryStyles.containerSeparate} ${summaryStyles.marginTop15rem}`}
						key={i}
					>
						<p className={summaryStyles.addOnsName}>{addOn}</p>
						<p
							className={`${summaryStyles.fontSize19} ${utilStyles.colorText}`}
						>
							{addOn == "Online service"
								? `+$1${pricePerTimeframe}`
								: `+$2${pricePerTimeframe}`}
						</p>
					</li>
				))}
			</article>
			<article
				className={`
				${summaryStyles.containerSeparate} 
				${summaryStyles.marginTop15rem} 
				${summaryStyles.paddingSides2rem}`}
			>
				<p className={summaryStyles.addOnsName}>
					Total ({perTimeframe})
				</p>
				<h2 className={summaryStyles.total}>
					+${totalPrice}
					{pricePerTimeframe}
				</h2>
			</article>
		</>
	);
}
