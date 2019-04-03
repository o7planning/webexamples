function dropHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    // FileList object.
    var files = evt.dataTransfer.files;

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), //
            '</strong> (', f.type || 'n/a', ') - ', //
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    }
    document.getElementById('log-div').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function dragoverHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    // Explicitly show this is a copy.
    evt.dataTransfer.dropEffect = 'copy';
}
