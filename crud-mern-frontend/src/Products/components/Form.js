import React, { useState, useRef } from "react"
import { Form as bulmaForm, Button } from "react-bulma-components"

const { Field, Control, Label, Input } = bulmaForm

const expRegister = {
	usuario: "^[a-zA-Z0-9\_\-]{4,16}$", // eslint-disable-line
	nombre: "^[a-zA-ZÀ-ÿ ]{1,40}$", // eslint-disable-line
	numero: "^.{4,12}$", // 4 a 12 digitos.
	correo: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", // eslint-disable-line
	telefono: "^\d{7,14}$" // eslint-disable-line
}

const Form = ({ handleSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        unitaryPrice: '',
        size: '',
        description: ''
    })

    const [errorFormValues, setErrorFormValues] = useState({
        name: '',
        type: '',
        value: ''
    })

    const [ errorFlag, setErrorFlag ] = useState(false)
    const errors = {}

    const invalidCondiction = "is-danger"
    const validCondition = "is-success"

    const inputFileRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormValues({ ...formValues, [name]: value })
    }

    const _handleSubmit = (e) => {
        e.preventDefault()

        if (generalValidation(e)) handleSubmit(
                                { 
                                    ...formValues, 
                                    image: inputFileRef.current.files[0] 
                                })
    }

    const validateForm = (e) => {
        handleChange(e)

        setErrorFormValues({ name: "", type: "", value: "" })

        setErrorFlag(false)

        if (e.target.required) {
            if (e.target.type === 'text') {
                if (e.target.value === "") {
                    setErrorFormValues({ name: e.target.name, type: "required", value: "" })
                    document.getElementById(Number(e.target.id)).focus()
                    setErrorFlag(true)
                } else if (e.target.pattern) {
                    let expPattern = new RegExp(e.target.pattern)
                    console.log(expPattern)
                    if (!expPattern.test(e.target.value)) {
                        setErrorFormValues({ name: e.target.name, type: "pattern", value: "" })
                        document.getElementById(Number(e.target.id)).focus()
                        setErrorFlag(true)
                    }
                }
                return
            }

            if (e.target.type === "number") {
                if (e.target.value === "") {
                    setErrorFormValues({name: e.target.name, type: "required", value: "" })
                    document.getElementById(Number(e.target.id)).focus()
                    setErrorFlag(true)
                } else if (e.target.pattern) {
                    let expPattern = new RegExp(e.target.pattern)
                    if (!expPattern.test(e.target.value)) {
                        setErrorFormValues({ name: e.target.name, type: "pattern", value: "" })
                        document.getElementById(Number(e.target.id)).focus()
                        setErrorFlag(true)
                    }
                }
                return
            }            
        }

        if (e.target.type === 'text' && e.target.pattern) {
            let expPattern = new RegExp(e.target.pattern)
            if (!expPattern.test(e.target.value)) {
                setErrorFormValues({ name: e.target.name, type: "pattern", value: "" })
                document.getElementById(Number(e.target.id)).focus()
                setErrorFlag(true)
            }
            return
        }

        if (e.target.type === "number" && e.target.pattern) {
            let expPattern = new RegExp(e.target.pattern)
            if (!expPattern.test(e.target.value)) {
                setErrorFormValues({ name: e.target.name, type: "pattern", value: "" })
                document.getElementById(Number(e.target.id)).focus()
                setErrorFlag(true)
            }
            return
        }
    }

    const generalValidation = (e) => {
        const inputs = document.querySelectorAll("form input[required]")
        var isCorrect = true

        if (inputs.length) {
            inputs.forEach((inputData) => {
                var propError = inputData.name
                if (inputData.value === "") {
                    errors[propError] = `${inputData.name} is required`
                    inputData.focus()
                    inputData.blur()
                }
            })

            if (Object.keys(errors).length) isCorrect = false
        } 

        return isCorrect
    }

    return (
        <form onSubmit={_handleSubmit} noValidate>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input
                        id="0"
                        className={errorFlag && errorFormValues.name === "name" ? invalidCondiction : validCondition}
                        placeholder="Text input"
                        name="name"
                        value={formValues.name}
                        required
                        pattern={expRegister.nombre}
                        //autoFocus
                        onChange={handleChange}
                        onKeyUp={validateForm}
                        onBlur={validateForm}
                    />

                    {
                        errorFormValues.name === "name" && errorFormValues.type === 'required' && 
                            <p className="help is-danger">Name is required </p>
                    }

                    {
                        errorFormValues.name === "name" && errorFormValues.type === 'pattern' && 
                            <p className="help is-danger">Name must be only letters </p>
                    }
                </Control>
            </Field>
            <Field>
                <Label>Unitary Price</Label>
                <Control>
                    <Input
                        id="1"
                        className={errorFlag && errorFormValues.name === "unitaryPrice" ? invalidCondiction : validCondition}
                        placeholder="Text input"
                        type="number"
                        name="unitaryPrice"
                        value={formValues.unitaryPrice}
                        required
                        pattern={expRegister.numero}
                        onChange={handleChange}
                        onKeyUp={validateForm}
                        onBlur={validateForm}
                    />

                    {
                        (errors.unitaryPrice || (errorFormValues.name === "unitaryPrice" && errorFormValues.type === 'required')) && 
                            <p className="help is-danger">Unitary Price is required </p>
                    }

                    {
                        errorFormValues.name === "unitaryPrice" && errorFormValues.type === 'number' && 
                            <p className="help is-danger">Unitary Price must be a number </p>
                    }

                    {
                        errorFormValues.name === "unitaryPrice" && errorFormValues.type === 'pattern' && 
                            <p className="help is-danger">Unitary Price must be in 4-12 characters </p>
                    }
                </Control>
            </Field>
            <Field>
                <Label>Size</Label>
                <Control>
                    <Input
                        id="2"
                        className={errorFlag && errorFormValues.name === "size" ? invalidCondiction : validCondition}
                        placeholder="Text input"
                        type="number"
                        name="size"
                        value={formValues.size}
                        required
                        pattern={expRegister.numero}
                        onChange={handleChange}
                        onKeyUp={validateForm}
                        onBlur={validateForm}
                    />

                    {
                        errorFormValues.name === "size" && errorFormValues.type === 'required' && 
                            <p className="help is-danger">Size is required </p>
                    }

                    {
                        errorFormValues.name === "size" && errorFormValues.type === 'number' && 
                            <p className="help is-danger">Size must be a number </p>
                    }

                    {
                        errorFormValues.name === "size" && errorFormValues.type === 'pattern' && 
                            <p className="help is-danger">Size must be in 4-12 characters </p>
                    }
                </Control>
            </Field>
            <Field>
                <Label>Description</Label>
                <Control>
                    <Input
                        id="3"
                        className={(errorFlag && errorFormValues.name === "description") ? invalidCondiction : validCondition}
                        placeholder="Text input"
                        type="text"
                        name="description"
                        value={formValues.description}
                        required
                        pattern={expRegister.nombre}
                        onChange={handleChange}
                        onKeyUp={validateForm}
                        onBlur={validateForm}
                    />
 
                    {
                        errorFormValues.name === "description" && errorFormValues.type === 'required' && 
                            <p className="help is-danger">Description is required </p>
                    }
 
                    {
                        errorFormValues.name === "description" && errorFormValues.type === 'pattern' && 
                            <p className="help is-danger">Description must be only letters </p>
                    }
                </Control>
            </Field>
            <Field>
                <Label>Image</Label>
                <Control>
                    <Input 
                        id="4"
                        //className={(errorFlag && errorFormValues.name === "imagen") ? invalidCondiction : validCondition}
                        type="file"
                        name="imagen"
                        //value={formValues.imagen}
                        //required
                        //onChange={handleChange}
                        //onKeyUp={validateForm}
                        //onBlur={validateForm} 
                        domRef={inputFileRef}/>
                </Control>
            </Field>
            <Button type="submit" className="button is-link" disabled={errorFlag} style={{ width: 120 }}>
                Save
            </Button>
        </form>
    )
}

export default Form
