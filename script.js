// function convertToPDF() {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function(event) {
//             const text = event.target.result;

//             const doc = new jsPDF();
//             doc.text(text, 10, 10); // Adjust text position as needed
//             doc.save('converted_file.pdf');
//         };

//         reader.readAsText(file);
//     } else {
//         alert('Please select a file to convert.');
//     }
// }






let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.menubar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100);

    
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active')
