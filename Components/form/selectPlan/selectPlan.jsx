import utilStyles from "../../../styles/utils.module.css";
import selectPlanStyles from "../../../styles/SelectPlan/SelectPlan.module.css";

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
				<ul className={selectPlanStyles.optionsContainer}>
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
								className={selectPlanStyles.planOption}
							/>
							<label
								htmlFor={`${card}`}
								className={selectPlanStyles.planLabel}
							>
								<Image
									className={`${utilStyles.marginBottom35rem} ${selectPlanStyles.image}`}
									src={`/images/icon-${card}.svg`}
									width={40}
									height={40}
									alt=""
									aria-hidden="true"
								/>
								<div>
									<h2
										className={`${utilStyles.colorText} ${selectPlanStyles.titleMobile}`}
									>
										{card.toUpperCase()}
									</h2>
									<p className={utilStyles.price}>
										{selectPlanInfo.timeframe
											? `$${getPrice(index)}0/yr`
											: `$${getPrice(index)}/mo`}
									</p>
									{selectPlanInfo.timeframe && (
										<p
											className={`${utilStyles.colorText} ${selectPlanStyles.mdDescription}`}
										>
											2 months free
										</p>
									)}
								</div>
							</label>
						</li>
					))}
				</ul>

				<div className={selectPlanStyles.monthlyYearly}>
					<p
						className={`${
							!selectPlanInfo.timeframe && utilStyles.colorText
						} ${selectPlanStyles.description} `}
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
						} ${selectPlanStyles.description} `}
					>
						Yearly
					</p>
				</div>
			</fieldset>
		</>
	);
}
