#target photoshop
var userPath = $.getenv("USERPROFILE")
var myFolder = new Folder("C:\\PhotoBomb\\PhotoLab");
var myFiles = myFolder.getFiles()
for (var i = 0; i<myFiles.length; i++)
myFiles[i].remove()
while(app.documents.length>0){
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
	}