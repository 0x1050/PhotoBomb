#target photoshop

function play_action(set, action, cmd_number, allow_continue)  
    {  
    try  
        {  
        var d = new ActionDescriptor();  
        var r = new ActionReference();  
  
        if (typeof(cmd_number) == "number") r.putIndex( charIDToTypeID( "Cmnd" ), cmd_number );  
  
        r.putName( charIDToTypeID( "Actn" ), action );  
        r.putName( charIDToTypeID( "ASet" ), set );  
        d.putReference( charIDToTypeID( "null" ), r );  
  
        if (typeof(allow_continue) == "boolean") d.putBoolean( charIDToTypeID( "Cntn" ), allow_continue );  
  
        executeAction( charIDToTypeID( "Ply " ), d, DialogModes.NO );  
        }  
    catch(e) { alert(e); }  
    }  

var openFiles = []
for (i = 0; i < documents.length; i++)
    openFiles.push( documents[i].name)
//trim end of document names
for (i=0; i < documents.length ; i++)
    openFiles[i] = openFiles[i].substring(0, openFiles[i].length -4)
//write out document names and index position
$.writeln("---------------")

//copy layer from index
activeDocument = documents[0]
activeDocument.selection.selectAll()
activeDocument.selection.copy()
//revert templates
activeDocument.activeHistoryState[1]
for (var i = 1; i < documents.length; i++) {
    activeDocument = documents[i]
    if (activeDocument != documents[0])
    activeDocument.activeHistoryState = activeDocument.historyStates[0]
play_action("templates", openFiles[i], 4,true)
}