#target photoshop

var userPath = $.getenv("USERPROFILE")
var batFile = new File(userPath + "\\Desktop\\testbatch.cmd")
batFile.execute()