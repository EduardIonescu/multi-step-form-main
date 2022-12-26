import utilStyles from "../../styles/utils.module.css";

export default function PersonalInfo({ personalInfo, setPersonalInfo }) {
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
						<span className={utilStyles.error}>
							This field is required
						</span>
					</div>
					<input
						className={utilStyles.inputOne}
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
						<span className={utilStyles.error}>
							This field is required
						</span>
					</div>
					<input
						className={utilStyles.inputOne}
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
						<span className={utilStyles.error}>
							This field is required
						</span>
					</div>
					<input
						className={`${utilStyles.inputOne} ${utilStyles.containerError}`}
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
