function openTrailerModal(src) {
    document.getElementById('trailerPreview').src = src;
    document.getElementById('trailerPreviewModal').style.display = 'flex';
}

function closeTrailerModal() {
    document.getElementById('trailerPreview').src = '';
    document.getElementById('trailerPreviewModal').style.display = 'none';
}
