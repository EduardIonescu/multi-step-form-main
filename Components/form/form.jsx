import utilStyles from "../../styles/utils.module.css";
import formStyles from "../../styles/Form.module.css";
import { useState } from "react";
import PersonalInfo from "./personalInfo";
import SelectPlan from "./selectPlan/selectPlan";
import PickAddOns from "./pickAddOns/pickAddOns";
import Summary from "./summary";
import ThankYou from "./thankYou";
import {
	nameRegex,
	emailRegex,
	phoneNumberRegex,
} from "../../constants/regex/regexConstants";

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
		} else if (step == 2) {
			updateFormData(selectPlanInfo);
		} else if (step == 3) {
			updateFormData(addOnsInfo);
		}

		if (step != 1) {
			setStep((s) => s + 1);
		}
	}
	function handleGoBack() {
		setStep((s) => {
			return s - 1;
		});
	}

	function formValidation() {
		let hasValidName = nameRegex.test(personalInfo.name);
		let hasValidEmailAddress = emailRegex.test(personalInfo.email);
		let hasValidPhoneNumber = phoneNumberRegex.test(
			personalInfo.phoneNumber
		);
		if (personalInfo.name == "") hasValidName = undefined;
		if (personalInfo.email == "") hasValidEmailAddress = undefined;
		if (personalInfo.phoneNumber == "") hasValidPhoneNumber = undefined;
		setValidForm({
			hasValidName,
			hasValidEmailAddress,
			hasValidPhoneNumber,
		});
		if (
			[hasValidName, hasValidEmailAddress, hasValidPhoneNumber].every(
				(value) => value == true
			)
		) {
			updateFormData(personalInfo);
			setStep((s) => s + 1);
		}
	}

	if (step != 5)
		return (
			<form onSubmit={handleSubmit}>
				{step == 1 && (
					<PersonalInfo
						personalInfo={personalInfo}
						setPersonalInfo={setPersonalInfo}
						validForm={validForm}
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
				<div className={formStyles.bottom}>
					<button
						type="button"
						className={
							step >= 2
								? formStyles.buttonGoBack
								: formStyles.firstPage
						}
						onClick={handleGoBack}
					>
						Go Back
					</button>
					<button
						type="submit"
						className={`${formStyles.bottomButton} ${
							step == 4 && formStyles.buttonConfirm
						}`}
					>
						{step == 4 ? "Confirm" : "Next Step"}
					</button>
				</div>
			</form>
		);
	else return <ThankYou />;
}
