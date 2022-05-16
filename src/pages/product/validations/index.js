import * as Yup from "yup";

export const messageSchema = Yup.object().shape({
  message: Yup.string()
    .required("Campo requerido")
    .min(17, "Mínimo 17 caracteres")
    .max(255, "Máximo 255 caracteres")
    .trim(),
});
