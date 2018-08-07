window.onload = function() {
    var form = document.getElementById("form_container");
    var fileInput = document.getElementById("file_input");
    var uploadButton = document.getElementById("upload_button");

    form.onsubmit = function(event) {
        event.preventDefault();
        var status = document.getElementById("status_container").innerHTML = "Uploading...";
        var files = fileInput.files;
        if (files.length == 0) {
            status.innerHTML = "ERROR: No file selected!";
        } else if (files.length > 1) {
            status.innerHTML = "ERROR: Too many files selected!";
        }
        var formData = new FormData();
        var file = files[0];
        formData.append("csv_file", file, file.name);
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open("POST", "http://localhost:5000", true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new DomainRequest();
            xhr.open("POST", "http://localhost:5000", true);
        }
        xhr.onload = function () {
            if (xhr.status === 200) {
                document.getElementById("response_container").innerHTML = xhr.responseText;
                document.getElementById("status_container").innerHTML = "Finished!";
            } else {
                status.innerHTML = "ERROR: Network failure!";
            }
        }
        xhr.send(formData);
        // document.getElementById("response_container").innerHTML = "Transposing...";
    }
}
