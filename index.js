function shadowfy(options) {
    if(options.shadow_type ==='hard') {
        options.shadow_type = '0px'
    } else {
        options.shadow_type = '15px'
    }

    Images.forEach((img) =>{
        img.style.boxShadow =`10px 10px ${options.shadow_type} 1px rgb(0,0,0,0.12)`;
        if(options.padding) {
            img.style.padding ='1em';
        }
    })
}

module.exports.shadowfy = shadowfy