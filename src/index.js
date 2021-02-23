function converValues(w, h){
    if(isNaN(w) || isNaN(h)){
        //ie invalid inputs
        document.getElementById('toastId').style.opacity = '1'
    }
    else{
        //ie valid inputs, convert to cm
        document.getElementById('toastId').style.opacity = '0'
        let location = document.getElementById('outputValue')
        const widthPx = (w * 0.026458333).toFixed(2);
        const heightPx = (h * 0.0264583333).toFixed(2);
        location.textContent = 'Your device is ' + widthPx + 'cm x ' + heightPx + 'cm.';
        document.getElementById('outputContainer').style.opacity = '1'
    }
}

document.getElementById('inputSubmitButton').addEventListener('mouseover',  () =>{
    let widthVal = document.getElementById('widthInputValue').value
    let heightVal = document.getElementById('heightInputValue').value
    if(widthVal != '' && heightVal != ''){
        document.getElementById('inputSubmitButton').style.cursor = 'pointer';
        document.getElementById('inputSubmitButton').addEventListener('click',  () =>{
            let widthVal = document.getElementById('widthInputValue').value
            let heightVal = document.getElementById('heightInputValue').value
            converValues(widthVal, heightVal);
            }
        )}
    else{
    document.getElementById('inputSubmitButton').style.cursor = 'not-allowed';
    }
})
$(document).keypress(function (e) {
    if (e.which == 13) {
      document.getElementById('inputSubmitButton').click();
    }
  });
