import uuid from uuid;

const = ADD_COMMENT;
const = EDIT_COMMENT;
const = REMOVE_COMMENT;
const = EVALUATE_COMMENT;

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    editedText: text,
    id: id //id komentarza, który chcemy edytować
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id //id komentarza, który chcemy usunąć
  }
}

function evaluate_comment(like) {
  let likeCounter = 0;
  let unlikeCounter = 0;
  if(like) ? likeCounter++ : unlikeCounter++;
  return {
    type: EVALUATE_COMMENT,
    thumb: like,
    likeCounter: likeCounter,
    unlikeCounter: unlikeCounter
  }
}

evaluate_comment(true); //jeśli ktoś kliknął łapkę w górę like ma wartość true czyli zapali się łapka w górę a licznik plusów zwiększy się o 1
evaluate_comment(false); //jeśli ktoś kliknął łapkę w dół like ma wartość false czyli licznik minusów zwiększy się o jeden

// jeszcze powinna być chyba taka możliwość, że gdy ktoś kliknął łapkę w górę ale chce zmienić zdanie i kliknąć łapkę w dół to licznik minusów się zwiększy
//ale i licznik plusów się zmniejszy oczywiście tylko wtedy gdy łapka w górę była już wcześniej kliknięta
// nie bardzo wiem jak to ugryźć tu przy akcjach jak mamy obiekt
