import { object, string, ref } from "yup";

let esquemaUsuario = object({
    nombre: string().required("El campo nombre es requerido"),
    telefono: string().min(10, "El teléfono debe tener al menos 10 dígitos").required("El campo teléfono es requerido"),
    email: string().email("Debe ser un email válido").required("El campo email es requerido"),
    repetirEmail: string().email()
        .oneOf([ref('email')], "El email no coincide")
        .required("El campo repetir email es requerido")
});

const validarFormulario = async (dataForm) => {
    try {
        await esquemaUsuario.validate(dataForm);
        return {
            status: "success"
        };
    } catch (error) {
        return {
            status: "error",
            message: error.message
        };
    }
};

export default validarFormulario;
