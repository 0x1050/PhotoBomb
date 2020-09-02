#target photoshop 
var fileName = null
var userPath = $.getenv("USERPROFILE")
var myFolder = new Folder("C:\\PhotoBomb\\PhotoLab");
var myFiles = myFolder.getFiles()
var number = myFiles.length
$.writeln(number)
var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 6
jpegOptions.embedColorProfile = true;
jpegOptions.matte = MatteType.NONE;
activeDocument.saveAs((new File("C:\\PhotoBomb\\PhotoLab\\" + number + ".jpg")), jpegOptions, true);

