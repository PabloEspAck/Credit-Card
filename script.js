const inputName = document.querySelector("#cardholder");
const inputNumber = document.querySelector("#cardNumber");
const inputMonth = document.querySelector("#cardMonth");
const inputYear = document.querySelector("#cardYear");
const inputCvc = document.querySelector("#cardCvc");

const cardName = document.querySelector(".card_details-name")
const cardNumber = document.querySelector(".card_number")
const cardMonth = document.querySelector(".card_month")
const cardYear = document.querySelector(".card_year")
const cardCvc = document.querySelector(".card-back_cvc")

const Form = document.querySelector(".form")
const ThankYou = document.querySelector("#thankYou")
const buttonConfirm = document.querySelector("#continue")

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;
if (inputName.value.length === 0){        //si borro el valor del input, coloca el nombre que estaba(pablo espinosa)   
    cardName.innerText = "Pablo Espinosa";
}
})

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;
if (inputNumber.value.length === 0){        //si borro el valor del input, coloca el nombre que estaba(pablo espinosa)   
    cardNumber.innerText = "0000 0000 0000 0000 ";
}
})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value;
if (inputMonth.value.length === 0){        //si borro el valor del input, coloca el nombre que estaba(pablo espinosa)   
    cardMonth.innerText = "00";
}
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;
if (inputYear.value.length === 0){        //si borro el valor del input, coloca el nombre que estaba(pablo espinosa)   
    cardYear.innerText = "00";
}
})

inputCvc.addEventListener("input", () => {
    cardCvc.innerText = inputCvc.value;
if (inputCvc.value.length === 0){        //si borro el valor del input, coloca el nombre que estaba(pablo espinosa)   
    cardCvc.innerText = "000";
}
})

// funcion sacada de una libreria de js donde me brinda el formato de las tarjetas
let cleave = new Cleave('#cardNumber', { 
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
    }
});

//funcion para darle funcionalidad al boton confirmar
Form.addEventListener("submit", (evento) => {
evento.preventDefault();
Form.classList.add("disabled");  //remuevo el form
ThankYou.classList.remove("disabled"); //agrego la seccion thanks
})

//funcion para volver al menu principal de las tarjetas, y resetear todos los campos.
buttonConfirm.addEventListener("click", () => {
    Form.classList.remove("disabled");  
    ThankYou.classList.add("disabled"); 
    Form.reset();
    cardName.innerText = "Pablo Espinosa";
    cardNumber.innerText = "0000 0000 0000 0000 ";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCvc.innerText = "000";
    })

    //funciones para pintar el fondo de cada input cuando seleccionamos arriba.
    document.querySelectorAll('input').forEach((input) => {
        input.addEventListener('focusin', (event) => {
     event.target.style.background = '#fbf8ec';    
     });
  });
    
   document.querySelectorAll('input').forEach((input) => {
       input.addEventListener('focusout', (event) => {
     event.target.style.background = '';    
      });
   });

   function Letras(string){//solo letras y numeros
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}

