#target photoshop 
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
activeDocument.saveAs((new File(userPath + "\\Desktop\\" + fileName + ".jpg")), jpegOptions, true);
}