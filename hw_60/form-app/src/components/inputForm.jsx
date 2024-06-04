import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../components/inputForm.module.css";

function inputForm() {
	return (
		<div className={styles.container}>
			<Formik
				initialValues={{ fullName: "", email: "", phoneNumber: "" }}
				validate={(values) => {
					const errors = {};

					if (!values.fullName) {
						errors.fullName = "Required";
					}

					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = "Invalid email address";
					}

					if (!values.phoneNumber) {
						errors.phoneNumber = "Required";
					} else if (!/^\d{12}$/.test(values.phoneNumber)) {
						errors.phoneNumber = "Only digits and length 12";
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field
							type="text"
							name="fullName"
							placeholder="Enter your full name"
							className={styles.input}
						/>
						<ErrorMessage name="fullName" component="div" />

						<Field
							type="email"
							name="email"
							placeholder="Enter e-mail"
							className={styles.input}
						/>
						<ErrorMessage name="email" component="div" />

						<Field
							type="text"
							name="phoneNumber"
							placeholder="Enter phone number"
							className={styles.input}
						/>
						<ErrorMessage name="phoneNumber" component="div" />

						<button
							type="submit"
							disabled={isSubmitting}
							className={styles.button}
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default inputForm;
