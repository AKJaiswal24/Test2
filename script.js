function convertToPDF() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const text = event.target.result;

         
            console.log(text);
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file to convert.');
    }
}