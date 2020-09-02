#target photoshop

var openFiles = []
for (i = 0; i < documents.length; i++)
    openFiles.push( documents[i].name)
//trim end of document names
for (i=0; i < documents.length ; i++)
    openFiles[i] = openFiles[i].substring(0, openFiles[i].length -4)
//write out document names and index position
$.writeln("---------------")
for (var i=0;i<app.documents.length;i++){
    $.writeln("Document: " + i + ". " + openFiles[i])
    
    }
