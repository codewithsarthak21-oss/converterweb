document.getElementById('download').onclick = function () {
    const { jsPDF } = window.jspdf;
    const input = document.getElementById('upload');

    // Check if the user selected a file
    if (!input.files || input.files.length === 0) {
        alert("Please upload a photo first");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imgData = e.target.result;

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        pdf.addImage(imgData, 'JPEG', 10, 10, 190, 0); // Auto-height
        pdf.save('download.pdf');
    };

    reader.readAsDataURL(file);
};
