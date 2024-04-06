function confirmDownload(button) {
    var downloadUrl = button.getAttribute('data-download-url');
    if (confirm("Do you want to download this file?")) {
        window.location.href = downloadUrl;
    }
}
