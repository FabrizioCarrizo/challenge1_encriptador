//-----DOM element to variables -----

let textInput = document.getElementById("text_input");
let encryptButton = document.getElementById("encrypt_btn");
let decryptButton = document.getElementById("decrypt_btn");
let warnMsg = document.querySelector(".warn_message");
let word = "",
  encryptedWord = "",
  decryptedWord = "";

//-----Encrypt and Decrypt buttons -----

encryptButton.addEventListener("click", (e) => {
  e.preventDefault();
  word = textInput.value;
  if (validationFunction(word) == true && word != "") {
    let result = encryptFunction(word);
    console.log(result)

    showMsg(result);

    warnMsg.innerHTML =
      '<p class="warn_message"><img class="warn_icon" src="assets/vector.png"> Solo letras minúsculas y sin acentos<p>';
    warnMsg.style.color = "#495057";
  } else if (word === "") {
    warnMsg.innerHTML = "No puedes encriptar un texto vacío";
    warnMsg.style.color = "#f00";
  } else {
    warnMsg.innerHTML =
      "El texto no es válido. Recuerda no usar mayúsculas o acentos";
    warnMsg.style.color = "#f00";
  }

  encryptedWord = "";
  textInput.value = "";
});

decryptButton.addEventListener("click", (e) => {
  e.preventDefault();
  word = textInput.value;
  let result = decryptFunction(word);
  console.log(result)
  showMsg(result);
  decryptedWord = "";
  textInput.value = "";
});

// ----- Validation Function -----

const validationFunction = (word) => {
  const accentedVowels = ["á", "é", "í", "ó", "ú"];

  for (let index = 0; index < word.length; index++) {
    if (
      word.charAt(index) === word.charAt(index).toUpperCase() &&
      word.charAt(index) != " "
    ) {
      console.log("PERO TE DIJE QUE MAYUSCULAS NO PELOTUDO");
      return false;
    } else {
      for (let i = 0; i < accentedVowels.length; i++) {
        console.log(accentedVowels[i]);

        if (word.charAt(index) == accentedVowels[i]) {
          console.log("QUE DIJIMOS DE ACENTOSSS");
          console.log(accentedVowels[i]);
          i = 0;
          return false;
        }
      }
    }
    if (index === word.length - 1) {
      return true;
    }
  }
};

//----- Encrypt and decrypt function declaration-----

const encryptFunction = (word) => {
  for (let index = 0; index < word.length; index++) {
    switch (word.charAt(index)) {
      case "a":
        encryptedWord = encryptedWord + "ai";
        break;
      //   return "ai";
      case "e":
        encryptedWord = encryptedWord + "enter";
        break;
      //   return "enter";
      case "i":
        encryptedWord = encryptedWord + "imes";
        break;
      //   return "imes";
      case "o":
        encryptedWord = encryptedWord + "ober";
        break;
      //   return "ober";
      case "u":
        encryptedWord = encryptedWord + "ufat";
        break;
      //   return "ufat";
      default:
        encryptedWord = encryptedWord + word.charAt(index);
        break;
      //   return (word.charAt(index)) ;
    }
  }
  return encryptedWord;
};

const decryptFunction = (word) => {
  console.log('This is word: ',word);
  console.log(word.length);
  console.log(word.charAt(0));

  for (let index = 0; index < word.length; index++) {
    switch (word.charAt(index)) {
      case "a": if(word.charAt((index+1)==='i')) {decryptedWord = decryptedWord + "a";
        console.log(decryptedWord)
      index=index+1; 
      }
        break;
      //   return "a";
      case "e": if(word.substr(index,5)==='enter')
        {decryptedWord = decryptedWord + "e";
        console.log(word.substr(index,5))
        console.log(decryptedWord);
      index=index+4; 

      }
        break;
      //   return "e";
      case "i": if(word.substr(index,4)==='imes')
        {decryptedWord = decryptedWord + "i";
        console.log(decryptedWord);
      index=index+3; 

      break;
    }
      case "o":
        if(word.substr(index,4)==='ober')
        {decryptedWord = decryptedWord + "o";
        console.log(decryptedWord);
        console.log(word.substr(index,4))

      index=index+3; 

      break;
    }
      case "u":
        if(word.substr(index,4)==='ufat')
        {decryptedWord = decryptedWord + "u";
        console.log(decryptedWord);
      index=index+3; 

      break;
    }
      default:
        console.log(decryptedWord)
        decryptedWord = decryptedWord + word.charAt(index);
        break;
      //   return (word.charAt(index)) ;
    }
  }
  return decryptedWord;
};

//----- Function that display encrypted or decrypted message -----

const showMsg = (msg) => {
  let aluraLogo = document.querySelector(".logo_container");
  let noMsgContainer = document.querySelector(".no_message_container");
  let leftContainer = document.querySelector(".left_message_container");
  let rightContainer = document.querySelector(".right_message_container");
  let encryptedMsgContainer = document.querySelector(
    ".encrypted_message_container"
  );
  let encryptedTxt = document.querySelector(".encrypted_text");

  if (screen.width <= 1024) {
    aluraLogo.style = "display:none";

    leftContainer.style = "display: none";
    encryptedMsgContainer.style.minHeight = "35em";
  }

  noMsgContainer.style = "display: none";

  encryptedMsgContainer.innerHTML = `<div class='encrypted_text'>${msg}</div>
  <div class='copy_button_container'><button id="copy_btn" class="button copy">Copiar</button><button id="back_btn" class="button copy " style='background-color:#FFFFFF; color: #0A3871;
  '>Volver</button></div> `;
  encryptedMsgContainer.style = "display: inline-block";

  let copyButton = document.getElementById("copy_btn");
  let backButton = document.getElementById("back_btn");

  copyButton.addEventListener("click", (e) => {
    let selection = navigator.clipboard.writeText(msg);
    console.log(selection);
    copyButton.innerHTML = "Mensaje copiado";
    copyButton.style.backgroundColor = "#E5E5E5";
    copyButton.style.color = "#0A3871";
  });

  //MAKING A BACK BUTTON TO GO BACK TO MAIN SCREEN
  backButton.addEventListener("click", (e) => {
    leftContainer.style.display = "flex";
    encryptedMsgContainer.style.display = "none";
    noMsgContainer.style.display='inline-block'
  });
};