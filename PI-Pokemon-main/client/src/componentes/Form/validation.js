const validate = (formData) => {
    const errors = {};
    // console.log("Esto es lo que trae el parametro formData: ", formData);
    if(!formData.nombre) {
        // console.log("Esto muestra el nombre dentro del error",formData.nombre);
        errors.nombre = "Debes ingresar el nombre de tu pokemon";
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
    if(!formData.ataque){
        errors.ataque = 'Debes ingresar un valor para Ataque';
    }else if(isNaN(formData.ataque)) {
        errors.ataque = 'El tipo de dato debe ser numerico';
    }
    if(!formData.defensa){
        errors.defensa = 'Debes ingresar un valor para Defensa';
    }else if(isNaN(formData.defensa)) {
        errors.defensa = 'El tipo de dato debe ser numerico';
    }
    return errors;
    };

export default validate;