// const onlyText = /^[a-zA-Z0-9\s]+$/;
const validate = (formData) => {
    const errors = {};
    // console.log("Esto es lo que trae el parametro formData: ", formData);
    if(!formData.nombre) {
        // console.log("Esto muestra el nombre dentro del error",formData.nombre);
        errors.nombre = "Debes ingresar el nombre de tu pokemon";
    }
     else if (!/^[a-zA-Z0-9\s]+$/.test(formData.nombre)) {
        errors.nombre = 'No pueden ser solo numeros';
    }
    if (!formData.imagen) {
        errors.imagen = 'La imagen es requerida';
    } else if (!/\.(png|jpg)$/.test(formData.imagen)) {
        errors.imagen = 'La URL de la imagen debe terminar en .png o .jpg';
    }
    if(!formData.vida){
        errors.vida = 'Debes ingresar un valor para Vida';
    }else if(isNaN(formData.vida)) {
        errors.vida = 'El tipo de dato debe ser numerico';
    }
    else if(formData.vida < 1){
        errors.vida = 'El valor debe ser mayor a cero';
    }
    if(!formData.ataque){
        errors.ataque = 'Debes ingresar un valor para Ataque';
    }else if(isNaN(formData.ataque)) {
        errors.ataque = 'El tipo de dato debe ser numerico';
    }
    else if(formData.ataque < 1){
        errors.ataque = 'El valor debe ser mayor a cero';
    }
    if(!formData.defensa){
        errors.defensa = 'Debes ingresar un valor para Defensa';
    }else if(isNaN(formData.defensa)) {
        errors.defensa = 'El tipo de dato debe ser numerico';
    }
    else if(formData.defensa < 1){
        errors.defensa = 'El valor debe ser mayor a cero';
    }
    return errors;
    };

export default validate;