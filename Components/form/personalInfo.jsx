import utilStyles from "../../styles/utils.module.css";

export default function PersonalInfo({
	personalInfo,
	setPersonalInfo,
	validForm,
}) {
	function handleNameChange(e) {
		setPersonalInfo({
			...personalInfo,
			name: e.target.value,
		});
	}
	function handleEmailChange(e) {
		setPersonalInfo({
			...personalInfo,
			email: e.target.value,
		});
	}
	function handlePhoneNumberChange(e) {
		setPersonalInfo({
			...personalInfo,
			phoneNumber: e.target.value,
		});
	}

	function getError(validator) {
		if (!validator)
			return (
				<span className={utilStyles.error}>
					{validator === undefined
						? "This field is required"
						: "Invalid format"}
				</span>
			);
	}

	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Personal info
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Please provide your name, email address, and phone number.
				</legend>
				<label
					htmlFor="name"
					className={`${utilStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={utilStyles.labelContainer}>
						<span>Name</span>
						{getError(validForm.hasValidName)}
					</div>
					<input
						className={`${utilStyles.inputOne} ${
							!validForm.hasValidName && utilStyles.containerError
						}`}
						type="text"
						value={personalInfo.name}
						onChange={handleNameChange}
						placeholder="e.g. Stephen King"
						name="name"
						maxLength={32}
					/>
				</label>
				<label
					htmlFor="email"
					className={`${utilStyles.label} ${utilStyles.colorText}`}
				>
					{" "}
					<div className={utilStyles.labelContainer}>
						<span>Email Address</span>
						{getError(validForm.hasValidEmailAddress)}
					</div>
					<input
						className={`${utilStyles.inputOne} ${
							!validForm.hasValidEmailAddress &&
							utilStyles.containerError
						}`}
						type="email"
						value={personalInfo.email}
						onChange={handleEmailChange}
						placeholder="e.g. stephenking@lorem.com"
						name="email"
					/>
				</label>
				<label
					htmlFor="name"
					className={`
					${utilStyles.label}
					 ${utilStyles.colorText}`}
				>
					{" "}
					<div className={utilStyles.labelContainer}>
						<span>Phone Number</span>
						{getError(validForm.hasValidPhoneNumber)}
					</div>
					<input
						className={`${utilStyles.inputOne} ${
							!validForm.hasValidPhoneNumber &&
							utilStyles.containerError
						}`}
						type="tel"
						placeholder="e.g. +1 234 567 890"
						value={personalInfo.phoneNumber}
						onChange={handlePhoneNumberChange}
						name="name"
						maxLength={32}
					/>
				</label>
			</fieldset>
		</>
	);
}
