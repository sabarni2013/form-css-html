var checkSelect = {};
let forDataValue;
function submitForm() {
  
    var formEl = document.forms.submitForm;
    var formData = new FormData(formEl);
   
    localStorage.setItem("firstName", formData.get('firstName'));
    localStorage.setItem("secondName", formData.get('secondName'));
    localStorage.setItem("address", formData.get('address'));
    localStorage.setItem("pincode", formData.get('pincode'));
    localStorage.setItem("state", formData.get('state'));
    localStorage.setItem("radioV", formData.get('radioV'));
    localStorage.setItem("country", formData.get('country'));
    
   
    var all_location_id = document.querySelectorAll('input[name="choiceOffood[]"]:checked');
    var aIds = [];

    for(var x = 0, l = all_location_id.length; x < l;  x++)
    {
        aIds.push(all_location_id[x].value);
    }

    var str = aIds.join(', ');
    localStorage.setItem("choiceOffood", str);
}
window.onload = function(){
    
document.getElementById('fname').innerText = localStorage.getItem('firstName');
document.getElementById('lname').innerText = localStorage.getItem('secondName');
document.getElementById('address').innerText = localStorage.getItem('address');
document.getElementById('pin').innerText = localStorage.getItem('pincode');
document.getElementById('state').innerText = localStorage.getItem('state');
document.getElementById('gender').innerText = localStorage.getItem('radioV');
document.getElementById('country').innerText = localStorage.getItem('country');
document.getElementById('choiceOffood').innerText = localStorage.getItem('choiceOffood');


}

