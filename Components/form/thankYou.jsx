import utilStyles from "../../styles/utils.module.css";
import thankYouStyles from "../../styles/ThankYou.module.css";
import Image from "next/image";

export default function ThankYou() {
	return (
		<section className={thankYouStyles.sectionThankYou}>
			<article className={thankYouStyles.articleThankYou}>
				<Image
					className={thankYouStyles.imageThankYou}
					src="/images/icon-thank-you.svg"
					alt=""
					aria-hidden="true"
					width={56}
					height={56}
				/>
				<h1
					className={`${utilStyles.title} ${utilStyles.colorText} ${thankYouStyles.margins}`}
				>
					Thank you!
				</h1>
				<p className={utilStyles.description}>
					Thanks for confirming your subscription! We hope you have
					fun using our platform. If you ever need support, please
					feel free to email us at support@loremgaming.com.
				</p>
			</article>
		</section>
	);
}
