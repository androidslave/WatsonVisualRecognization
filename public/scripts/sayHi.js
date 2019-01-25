

var signaturePad = new SignaturePad(document.getElementById('canvas'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
});
var saveButton = document.getElementById('save');
var cancelButton = document.getElementById('clear');

saveButton.addEventListener('click', function (event) {
    var data = signaturePad.toDataURL('image/png');
    document.getElementById('data_img').value = data;


    // Send data to server instead...
});

cancelButton.addEventListener('click', function (event) {
    signaturePad.clear();
});