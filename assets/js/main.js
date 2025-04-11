let validateForm = {
    emailPattern: /^([a-zA-Z0-9_-])+@([a-zA-Z_-])+\.([a-zA-Z]{2,})+$/,
    notEmpty:function(text){
        return text.value !== '' || text.value.length !== 0;
    },
    
    isEmail:function(email){
        return validateForm.emailPattern.test(email.value);
    },
    min: function (text, min)
    {
        return text.value.length >= min
    }
};
