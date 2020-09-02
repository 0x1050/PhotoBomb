#target photoshop
var userPath = $.getenv("USERPROFILE")
var myFolder = new Folder("C:\\PhotoBomb\\PhotoLab");
var myFiles = myFolder.getFiles()
for (var i = 0; i<myFiles.length; i++)
app.open(File(myFiles[i]))