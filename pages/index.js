import Head from "next/head";
import Step from "../Components/step";
import Form from "../Components/form/form";
import { useState } from "react";

const stepTitles = ["your info", "select plan", "add-ons", "summary"];

export default function Home() {
	const [formData, setFormData] = useState({
		personalInfo: { name: "", email: "", phoneNumber: "" },
		planInfo: { cardOption: 0, timeframe: false },
		addOnsInfo: {
			"Online service": true,
			"Larger storage": true,
			"Customizable profile ": false,
		},
	});
	const [step, setStep] = useState(1);

	function updateFormData(info) {
		if (step == 1) {
			setFormData({
				...formData,
				// Probably better to add each individual key:value of personalInfo but oh well
				personalInfo: info,
			});
		} else if (step == 2) {
			setFormData({
				...formData,
				planInfo: info,
			});
		} else if (step == 3) {
			setFormData({
				...formData,
				addOnsInfo: info,
			});
		}
	}

	function toggleYearly() {
		setFormData({
			personalInfo: { ...formData.personalInfo },
			planInfo: {
				...formData.planInfo,
				timeframe: !formData.planInfo.timeframe,
			},
			addOnsInfo: { ...formData.addOnsInfo },
		});
	}

	return (
		<>
			<Head>
				<title>Multi Step Form</title>
				<meta name="description" content="Multi-step Form" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main>
				<aside>
					{stepTitles.map((title, i) => {
						return (
							<Step key={title} step={step} stepNumber={i + 1}>
								{title}
							</Step>
						);
					})}
				</aside>
				<Form
					step={step}
					setStep={setStep}
					formData={formData}
					updateFormData={updateFormData}
					toggleYearly={toggleYearly}
				/>
			</main>
		</>
	);
}
