function chooseKey(key) {
    let contentDisplay = document.getElementById("content").innerHTML;

    switch (key) {

        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
            if (contentDisplay === "0.") {
                let newContentDisplay = document.getElementById("content");
                newContentDisplay.innerHTML = contentDisplay + key;
            } else if (contentDisplay == 0) {
                contentDisplay = key;
                document.getElementById("content").innerHTML = contentDisplay;
            } else {
                let newContentDisplay = document.getElementById("content");
                newContentDisplay.innerHTML = contentDisplay + key;
            }
            break;

        case "+": case "-": case "*": case "/":
            if (contentDisplay.includes("+") || contentDisplay.includes("-") || contentDisplay.includes("*") || contentDisplay.includes("/")) {
                // don't append operator!
            }
            else if (contentDisplay == 0) {
                contentDisplay = key;
                document.getElementById("content").innerHTML = contentDisplay;
            } else {
                let newContentDisplay = document.getElementById("content");
                newContentDisplay.innerHTML = contentDisplay + key;
            }
            break;

        case "/100":
            if (contentDisplay.includes("/100")) {
                // don't append operator!
            }
            else if (contentDisplay == 0) {
                contentDisplay = key;
                document.getElementById("content").innerHTML = contentDisplay;
            } else {
                let newContentDisplay = document.getElementById("content");
                newContentDisplay.innerHTML = contentDisplay + key;
            }
            break;

        case ".":
            if (contentDisplay.includes("..")) {
                // don't append dot!
            }
            else if (contentDisplay == 0) {
                contentDisplay = 0 + key;
                document.getElementById("content").innerHTML = contentDisplay;
            } else {
                let newContentDisplay = document.getElementById("content");
                newContentDisplay.innerHTML = contentDisplay + key;
            }
            break;

        case "clear":
            contentDisplay = document.getElementById("content").innerHTML;
            contentDisplay = 0;
            document.getElementById("content").innerHTML = contentDisplay;
            break;

        case "=":
            contentDisplay = document.getElementById("content").innerHTML;
            document.getElementById("content").innerHTML = eval(contentDisplay);
            break;
    }
}