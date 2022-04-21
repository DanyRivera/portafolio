import { Formik, Form, Field } from "formik";

const Formulario = () => {
    return (

        <Formik

        >

            {({ errors, touched }) => {

                return (
                    <Form
                        className="text-center px-8 mb-28 md:w-[70rem] md:mx-auto"
                    >
                        <div className="flex gap-1 flex-col justify-start mb-14">
                            <label htmlFor="email" className="w-full text-left text-[18px] font-poppins">Email:</label>
                            <Field
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="bg-[#eef8fc] p-5 rounded-xl font-poppins outline-primary text-[17px]"
                            />
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

                        </div>

                        <div className="mb-7 flex justify-center md:justify-end">
                            <button
                                className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                            >Send</button>
                        </div>

                    </Form>
                )

            }}

        </Formik>

    )
}

export default Formulario