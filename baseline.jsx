#target photoshop

if (documents.length == 0) 
    app.doAction("createIndex", "functions")
 else if (documents.length == 1) 
    app.doAction("drop", "functions")
 else 
    app.doAction("replacePhotos", "functions")
 