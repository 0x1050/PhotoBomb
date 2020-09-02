#target photoshop
//
// revert.jsx
//

//
// Generated Sun Jan 28 2018 15:02:05 GMT-0500
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== revert ==============
//
function revert() {
  // Revert
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(cTID('Rvrt'), undefined, dialogMode);
  };

  step1();      // Revert
};



//=========================================
//                    revert.main
//=========================================
//

revert.main = function () {
  revert();
};

revert.main();

// EOF

"revert.jsx"
// EOF
