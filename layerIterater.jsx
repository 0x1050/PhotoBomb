#target photoshop
$.writeln("---------------")
for (var i=0;i<app.documents.length;i++){
    $.writeln(app.documents[i].name)
    $.writeln("Height: " + app.documents[i].height.as('px'))
    $.writeln("Width " + app.documents[i].width.as('px') +"\r\r")
    }
