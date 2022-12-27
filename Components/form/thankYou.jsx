import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function ThankYou() {
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
					Thanks for confirming your subscription! We hope you have
					fun using our platform. If you ever need support, please
					feel free to email us at support@loremgaming.com.
				</p>
			</article>
		</section>
	);
}
