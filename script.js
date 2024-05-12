function convertToPDF() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const text = event.target.result;

            // Convert the file content to PDF using jsPDF library or other methods
            // For simplicity, let's just log the file content to the console
            console.log(text);
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file to convert.');
    }
}