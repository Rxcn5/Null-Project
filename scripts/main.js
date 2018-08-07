services = [
    {
        "path": "services/tranpose/transpose.html",
        "title": "Transpose",
        "description": "Takes a CSV and inverts the rows and columns"
    }
];

window.onload = function() {
    document.getElementById("search_bar").value = "";
    document.getElementById("services_container").innerHTML = "";
}

function search() {
    var query = document.getElementById("search_bar").value;
    if (query.length > 0) {
        document.getElementById("services_container").innerHTML = "";
    } else {
        return;
    }
    for (var id in services) {
        var service = services[id];
        if (service["title"].length >= query.length &&
            service["title"].substring(0, query.length).toLowerCase() == query.toLowerCase()) {
            var service_container = document.createElement("div");
            service_container.classList.add("service_container");
            var link = document.createElement('a');
            link.setAttribute("href", service['path']);
            var title = document.createElement("div");
            title.classList.add("title");
            title.innerHTML = service['title'];
            var description = document.createElement("div")
            description.classList.add("description");
            description.classList.add("description");
            description.innerHTML = service['description'];
            link.appendChild(title);
            link.appendChild(description);
            service_container.appendChild(link);
            document.getElementById("services_container").appendChild(service_container);
        }
    }

}
