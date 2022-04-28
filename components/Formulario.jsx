import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import Alerta from "./Alerta";

const Formulario = () => {

    // const [sent, setSent] = useState(false);

    const contactoSchema = Yup.object().shape({
        email: Yup.string().required('Email is Required').email('Invalid Email'),
        name: Yup.string().min(3, 'The Name is Too Short').required('Name is Required'),
        phone: Yup.number().integer('Invalid Phone Number').positive('Invalid Phone Number').typeError('Invalid Phone Number').required('Phone Number is Required'),
        message: Yup.string().required('Message is Required'),
    })

    const handleSubmit = (values, resetForm) => {

        resetForm()
    }

    return (

        <Formik

            initialValues={{
                email: '',
                name: '',
                phone: '',
                message: '',
            }}

            enableReinitialize={true}
            validationSchema={contactoSchema}

            onSubmit={(values, { resetForm }) => {

                handleSubmit(values, resetForm);

            }}

        >

            {({ errors, touched }) => {

                return (
                    <form
                        action="https://formsubmit.co/846837b5f5d0383b47aafb491d2beab8" method="POST"
                        className="text-center px-8 mb-28 md:w-[50rem] md:mx-auto"
                    >
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_subject" value="Alguien te Contacto!"></input>
                        <div className="flex gap-1 flex-col justify-start mb-14">
                            <label htmlFor="email" className="w-full text-left text-[18px] font-poppins">Email:</label>
                            <Field
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="bg-[#eef8fc] p-5 rounded-xl font-poppins outline-primary text-[17px]"
                            />

                            {errors.email && touched.email ? (
                                <Alerta>{errors.email}</Alerta>
                            ) : null}
                        </div>

                        <div className="flex gap-1 flex-col justify-start mb-14">
                            <label htmlFor="name" className="w-full text-left text-[18px] font-poppins">Name:</label>
                            <Field
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="bg-[#eef8fc] p-5 rounded-xl font-poppins outline-primary text-[17px]"
                            />

                            {errors.name && touched.name ? (
                                <Alerta>{errors.name}</Alerta>
                            ) : null}
                        </div>

                        <div className="flex gap-1 flex-col justify-start mb-14">
                            <label htmlFor="number" className="w-full text-left text-[18px] font-poppins">Phone Number:</label>
                            <Field
                                id="number"
                                type="tel"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="bg-[#eef8fc] p-5 rounded-xl font-poppins outline-primary text-[17px]"
                            />

                            {errors.phone && touched.phone ? (
                                <Alerta>{errors.phone}</Alerta>
                            ) : null}
                        </div>

                        <div className="flex gap-1 flex-col justify-start mb-14">
                            <label htmlFor="message" className="w-full text-left text-[18px] font-poppins">Message:</label>

                            <Field
                                name="message"
                                id="message"
                                as="textarea"
                                type="text"
                                className="bg-[#eef8fc] p-5 rounded-xl font-poppins outline-primary text-[17px] h-[200px]"
                            />

                            {errors.message && touched.message ? (
                                <Alerta>{errors.message}</Alerta>
                            ) : null}
                        </div>

                        {/* {sent && (
                            <div className="bg-[#068206] text-tertiary p-5 rounded-lg mt-5 font-poppins">
                                <p>Form Sent Successfully</p>
                            </div>
                        )} */}

                        <div className="mb-7 flex justify-center">
                            <button
                                type="submit"
                                className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                            >Send</button>
                        </div>

                    </form>
                )

            }}

        </Formik>

    )
}

export default Formulario