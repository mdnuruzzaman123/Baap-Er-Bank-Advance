function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputValueString = inputField.value ;
    const newInputValue = parseFloat(newInputValueString);
    inputField.value = '';
    return newInputValue;
}

function getElementTextById(textId) {
    const textField = document.getElementById(textId);
    const textValueString = textField.innerText;
    const textValue = parseFloat(textValueString);
    textField.value = '';
    return textValue;
}

function setElementTextValueById(textId, newTotalValue) {
    const textField = document.getElementById(textId)
    textField.innerText = newTotalValue;

}