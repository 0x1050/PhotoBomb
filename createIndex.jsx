#target Photoshop

sourceFiles = File.openDialog("Files?","*.*",true);  
app.open(sourceFiles[0])
for (i = 1; i <sourceFiles.length; i++) {  

var idPlc = charIDToTypeID( "Plc " ); 
var desc11 = new ActionDescriptor();  
var idnull = charIDToTypeID( "null" );

desc11.putPath( idnull, new File(sourceFiles[i]) );
var idFTcs = charIDToTypeID( "FTcs" ); 
var idQCSt = charIDToTypeID( "QCSt" );   
var idQcsa = charIDToTypeID( "Qcsa" ); 
desc11.putEnumerated( idFTcs, idQCSt, idQcsa );
var idOfst = charIDToTypeID( "Ofst" );     
var desc12 = new ActionDescriptor();     
var idHrzn = charIDToTypeID( "Hrzn" );    
var idPxl = charIDToTypeID( "#Pxl" );      
desc12.putUnitDouble( idHrzn, idPxl, 0.000000 );     
var idVrtc = charIDToTypeID( "Vrtc" );    
var idPxl = charIDToTypeID( "#Pxl" );    
desc12.putUnitDouble( idVrtc, idPxl, 0.000000 );
var idOfst = charIDToTypeID( "Ofst" );
desc11.putObject( idOfst, idOfst, desc12 );
executeAction( idPlc, desc11, DialogModes.NO );
    } 
 app.activeDocument.resizeImage(7.58, 11.37, 300, ResampleMethod.BICUBIC)
    for (var i = 0; i < activeDocument.layers.length; i++)
   {
        activeDocument.activeLayer = activeDocument.artLayers[i]
        var layerName
        
        if (i < 10) 
            layerName = "0" + (i+1)
        else 
            layerName = i+1
        
        activeDocument.activeLayer.name = layerName
        activeDocument.activeLayer.visible = false
     }

activeDocument.activeLayer = activeDocument.layers[0]
activeDocument.activeLayer.visible = true

app.doAction("fullScreen", "functions")
 