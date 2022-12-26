import utilStyles from "../../../styles/utils.module.css";

import Image from "next/image";
import ToggleButton from "./toggleButton";

export default function SelectPlan({ selectPlanInfo, setSelectPlanInfo }) {
	const cards = ["arcade", "advanced", "pro"];

	function getPrice(multiplier) {
		return 9 + multiplier * 3;
	}

	function handlePlanChange(e) {
		setSelectPlanInfo({
			...selectPlanInfo,
			cardOption: e.target.value,
		});
	}

	function onToggle() {
		setSelectPlanInfo({
			...selectPlanInfo,
			timeframe: !selectPlanInfo.timeframe,
		});
	}
	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Select your plan
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					You have the option of monthly or yearly billing.
				</legend>
				<ul className={utilStyles.optionsContainer}>
					{cards.map((card, index) => (
						<li key={card}>
							<input
								type="radio"
								name="planOption"
								id={`${card}`}
								value={index}
								onClick={handlePlanChange}
								defaultChecked={
									selectPlanInfo.cardOption == index
								}
								className={utilStyles.planOption}
							/>
							<label
								htmlFor={`${card}`}
								className={utilStyles.planLabel}
							>
								<Image
									className={utilStyles.marginBottom35rem}
									src={`/images/icon-${card}.svg`}
									width={54}
									height={54}
									alt=""
									aria-hidden="true"
								/>
								<div>
									<h2 className={utilStyles.colorText}>
										{card.toUpperCase()}
									</h2>
									<p className={utilStyles.price}>
										{selectPlanInfo.timeframe
											? `$${getPrice(index)}0/yr`
											: `$${getPrice(index)}/mo`}
									</p>
									{selectPlanInfo.timeframe && (
										<p
											className={`${utilStyles.colorText} ${utilStyles.mdDescription}`}
										>
											2 months free
										</p>
									)}
								</div>
							</label>
						</li>
					))}
				</ul>

				<div className={utilStyles.monthlyYearly}>
					<p
						className={`${
							!selectPlanInfo.timeframe && utilStyles.colorText
						} ${utilStyles.description} `}
					>
						Monthly
					</p>
					<ToggleButton
						yearly={selectPlanInfo.timeframe}
						onToggle={onToggle}
					/>
					<p
						className={`${
							selectPlanInfo.timeframe && utilStyles.colorText
						} ${utilStyles.description} `}
					>
						Yearly
					</p>
				</div>
			</fieldset>
		</>
	);
}
