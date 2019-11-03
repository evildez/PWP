function copyCB() {
    var copyText = "fernandezemiliov@gmail.com";
    navigator.clipboard.writeText(copyText);
    var notif = UIkit.notification("Copied " + copyText + " to clipboard.", {
        status: "success",
        pos: "bottom-center"
    });
}