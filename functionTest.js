

function handleKeyDown(e) {
    var ascii, key = e.key;

    ascii = key.charCodeAt(0);

    if (key.length === 1 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
        console.log("key pressed alone");
        alert("ascii code of character " + ascii + " pressed alone");
    }

    if (e.ctrlKey && key.length === 1) {
        console.log("control pressed with the key");
        alert("ascii code of character " + ascii + " pressed by Ctrl key");
    }

    if (e.altKey && key.length === 1) {
        console.log("alt pressed with the key");
        alert("ascii code of character " + ascii + " pressed by alt key");
    }

    if (e.shiftKey && key.length === 1) {
        console.log("shift pressed with the key");
        alert("ascii code of character " + ascii + " pressed by Shift key");
    }
}

module.exports = { handleKeyDown };
