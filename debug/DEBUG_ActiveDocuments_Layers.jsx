#target photoshop



for (i = 0; i < activeDocument.layers.length; i++) {
    $.writeln("Layer \[" + [i] +"\]" + " Name: " + activeDocument.layers[i].name)
    }