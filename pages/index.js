import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
				personalInfo: info,
				planInfo: { ...formData.planInfo },
				addOnsInfo: { ...formData.addOnsInfo },
			});
		} else if (step == 2) {
			setFormData({
				personalInfo: { ...formData.personalInfo },
				planInfo: info,
				addOnsInfo: { ...formData.addOnsInfo },
			});
		} else if (step == 3) {
			setFormData({
				personalInfo: { ...formData.personalInfo },
				planInfo: { ...formData.planInfo },
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
				{console.log(step)}
				{console.table(formData)}
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