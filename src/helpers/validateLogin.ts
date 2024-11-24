export const validateLogin = (name: string, value: string) => {
    let error = ""

    if (!value) {
        error = `El campo ${name} es obligatorio.` 
    }

    return error;
};
