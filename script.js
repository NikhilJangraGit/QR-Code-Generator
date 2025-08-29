document.getElementById("qr-input").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                // Trigger QR code generation
                document.getElementById("generate-btn").click();
                event.preventDefault(); // Prevent form submission if inside a form
            }
        });
document.getElementById("generate-btn").addEventListener("click", function() {
    var qrInput = document.getElementById("qr-input").value;
    if(qrInput.trim() === "") {
        document.getElementById("toast").classList.add("show");
        document.querySelector(".qr-code").style.display = "none";
        document.getElementById("toast").innerText = "Please write something in the input area";
        setTimeout(() => {
            document.getElementById("toast").classList.remove("show");
        }, 2800);
    } else {
        let toast = document.getElementById("toast");
        toast.innerText = "QR Code Generated Successfully!";
        toast.classList.add("success");
        setTimeout(() => {
            toast.classList.remove("success");
        }, 2800);
        var qrImage = document.getElementById("qr-image");
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(qrInput);
        document.querySelector(".qr-code").style.display = "block";
        document.getElementById("qr-input").value = "";
    }
});