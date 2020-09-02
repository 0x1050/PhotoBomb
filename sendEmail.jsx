#target photoshop
//gather email address
var email = prompt ("", "", "email?")
var layersCount = activeDocument.layers.length
var userPath = $.getenv("USERPROFILE")
var folder = new Folder("C:\\PhotoBomb\\email\\" + email)
if (!folder.exists)
    folder.create()
$.writeln(email)
$.writeln(layersCount)

if (email == "")
    {
    $.writeln("No email")
    }
    else
    {
    app.activeDocument.resizeImage(3.6, 5.4, 300, ResampleMethod.BICUBIC)
    for (var i = 0; i< activeDocument.artLayers.length; i++)
    {
        var num = i + 1
        activeDocument.activeLayer.visible = false
        activeDocument.activeLayer = activeDocument.layers[i]
        activeDocument.activeLayer.visible = true
        var jpegOptions = new JPEGSaveOptions()
        jpegOptions.quality = 6
        jpegOptions.embedColorProfile = true;
        jpegOptions.matte = MatteType.NONE;
        activeDocument.saveAs((new File("C:\\PhotoBomb\\email\\" + email +"\\" + email + num + ".jpg")), jpegOptions, true);
        activeDocument.activeLayer.visible = false
    }
    activeDocument.activeLayer.visible = true
}

//var cmdFile = new File( userPath + "\\Desktop\\test\\sendEmail.cmd")
//cmdFile.execute()