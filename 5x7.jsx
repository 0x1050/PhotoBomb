#target photoshop
//rotate if needed
var flipped = false
if (app.activeDocument.width > app.activeDocument.height) {
activeDocument.rotateCanvas(90)
flipped = true
}
//copy and resize
activeDocument.selection.selectAll()
if (activeDocument.layers.length  == 1)
    activeDocument.selection.copy()
else
    activeDocument.selection.copy(true)
//create temp file
app.documents.add(5, 7, 300, "temp", NewDocumentMode.CMYK)
activeDocument.paste()
activeDocument.activeLayer.resize(71.96, 71.96)
activeDocument.activeLayer.translate(-1.25, -1.25)
//Save file
var fileName = null
var userPath = $.getenv("USERPROFILE")
fileName = prompt("Save as", "..", "Save file as...?")
if (fileName == null) 
{
    $.writeln("fileName is null")
} else
{
var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 6
jpegOptions.embedColorProfile = true;
jpegOptions.matte = MatteType.NONE;
activeDocument.saveAs((new File(userPath + "\\Desktop\\small" + fileName + ".jpg")), jpegOptions, true);
}
//close after saving
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
$.writeln(flipped)
if (flipped == true)
    activeDocument.rotateCanvas (-90)
activeDocument.selection.deselect()