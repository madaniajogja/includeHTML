var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");
    editor.setValue('<!DOCTYPE html>\n<html>\n  \n</html>');

    editor.session.on('change', function(delta) {
      var preview = document.getElementById('preview').contentWindow.document;
      preview.open();
      preview.writeln(editor.getValue());
      preview.close();
    });
    function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
    editor.change();
    function save() {
      download('file.html', editor.getValue());
    }
