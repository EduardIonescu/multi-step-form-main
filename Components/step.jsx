import stepStyles from "../styles/Step.module.css";

export default function Step({ step, stepNumber, children }) {
	return (
		<article className={stepStyles.containerBig}>
			<button
				className={`${stepStyles.button} ${
					(step == stepNumber || (step == 5 && stepNumber == 4)) &&
					stepStyles.stepFocused
				}`}
			>
				{stepNumber}
			</button>
			<div>
				<p className={stepStyles.stepDescription}>STEP {stepNumber}</p>
				<h2 className={stepStyles.stepTitle}>
					{children.toUpperCase()}
				</h2>
			</div>
		</article>
	);
}
