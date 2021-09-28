import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Login({ login }) {

    return(
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center me-lg-5 ms-lg-5 ps-lg-5 pe-lg-5">
            <h1>Alkemy React Challenge</h1>
            <Formik
                initialValues={{
                    correo: '',
                    contraseña: ''
                }}

                validate={(valores) => {
                    let errores = {}

                    if(!valores.correo){
                        errores.correo = 'Ingrese una dirección de correo'
                    }

                    if(!valores.contraseña){
                        errores.contraseña = 'Ingrese una contraseña'
                    }

                    return errores;
                }}


                onSubmit={(valores, {resetForm}) => {
                    resetForm()
                    console.log('Formulario enviado')
                    login({email: valores.correo, password: valores.contraseña})
                }}

            >
                {( {errors} ) => (
                    <Form className="p-4 d-flex flex-column justify-content-center w-100 ps-lg-5 pe-lg-5">
                        <div className="mb-4">
                            <label htmlFor="correo" className="form-label">Email</label>
                            <Field 
                                className="form-control"
                                type="email"
                                id="correo"
                                name="correo"
                                placeholder="Ingrese su correo"
                            />
                            <ErrorMessage name="correo" component={() => (<div className="text-danger">{errors.correo}</div>)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contraseña" className="form-label">Contraseña</label>
                            <Field 
                                className="form-control"
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                placeholder="Ingrese la contraseña"
                            />
                            <ErrorMessage name="contraseña" component={() => (<div className="text-danger">{errors.contraseña}</div>)} />
                        </div>
                        <button className="btn btn-primary" type="submit">Log In</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}