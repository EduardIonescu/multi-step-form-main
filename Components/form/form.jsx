import utilStyles from "../../styles/utils.module.css";
import { useState } from "react";
import Image from "next/image";
import PersonalInfo from "./personalInfo";
import SelectPlan from "./selectPlan/selectPlan";
import PickAddOns from "./pickAddOns/pickAddOns";
import Summary from "./summary";

export default function Form({
	step,
	setStep,
	formData,
	updateFormData,
	toggleYearly,
}) {
	const [personalInfo, setPersonalInfo] = useState({
		...formData.personalInfo,
	});
	const [validForm, setValidForm] = useState({
		hasValidName: true,
		hasValidEmailAddress: true,
		hasValidPhoneNumber: true,
	});

	const [selectPlanInfo, setSelectPlanInfo] = useState({
		...formData.planInfo,
	});
	const [addOnsInfo, setAddOnsInfo] = useState({
		...formData.addOnsInfo,
	});

	function handleSubmit(e) {
		e.preventDefault();
		if (step == 1) {
			formValidation();
			updateFormData(personalInfo);
		} else if (step == 2) {
			updateFormData(selectPlanInfo);
		} else if (step == 3) {
			updateFormData(addOnsInfo);
		}

		if (step != 1) {
			setStep((s) => s + 1);
		} else {
			Object.values(validForm).every((value) => value == true) &&
				setStep((s) => s + 1);
		}
	}
	function handleGoBack() {
		setStep((s) => {
			return s - 1;
		});
	}

	function formValidation() {
		const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
		const emailRegex = /(\w\.?)+@[\w\.-]+\.\w{2,}/;
		const phoneNumberRegex = /\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/;

		const hasValidName = nameRegex.test(personalInfo.name);
		const hasValidEmailAddress = emailRegex.test(personalInfo.email);
		const hasValidPhoneNumber = phoneNumberRegex.test(
			personalInfo.phoneNumber
		);
		setValidForm({
			hasValidName,
			hasValidEmailAddress,
			hasValidPhoneNumber,
		});
	}

	if (step != 5)
		return (
			<form onSubmit={handleSubmit} className={utilStyles.relative}>
				{console.table(validForm)}
				{step == 1 && (
					<PersonalInfo
						personalInfo={personalInfo}
						setPersonalInfo={setPersonalInfo}
					/>
				)}
				{step == 2 && (
					<SelectPlan
						selectPlanInfo={selectPlanInfo}
						setSelectPlanInfo={setSelectPlanInfo}
					/>
				)}
				{step == 3 && (
					<PickAddOns
						addOns={addOnsInfo}
						setAddOns={setAddOnsInfo}
						yearly={selectPlanInfo.timeframe}
					/>
				)}
				{step == 4 && (
					<Summary
						formData={formData}
						toggleYearly={() => {
							setSelectPlanInfo({
								...selectPlanInfo,
								timeframe: !selectPlanInfo.timeframe,
							});
							toggleYearly();
						}}
					/>
				)}
				<div className={utilStyles.bottom}>
					<button
						type="button"
						className={
							step >= 2
								? utilStyles.buttonGoBack
								: utilStyles.firstPage
						}
						onClick={handleGoBack}
					>
						Go Back
					</button>
					<button
						type="submit"
						className={`${utilStyles.bottomButton} ${
							step == 4 && utilStyles.buttonConfirm
						}`}
					>
						{step == 4 ? "Confirm" : "Next Step"}
					</button>
				</div>
			</form>
		);
	else {
		return (
			<section className={utilStyles.sectionThankYou}>
				<article className={utilStyles.articleThankYou}>
					<Image
						src="/images/icon-thank-you.svg"
						alt=""
						aria-hidden="true"
						width={108}
						height={108}
					/>
					<h1
						className={`${utilStyles.title} ${utilStyles.colorText} ${utilStyles.margins}`}
					>
						Thank you!
					</h1>
					<p className={utilStyles.description}>
						Thanks for confirming your subscription! We hope you
						have fun using our platform. If you ever need support,
						please feel free to email us at support@loremgaming.com.
					</p>
				</article>
			</section>
		);
	}
}
