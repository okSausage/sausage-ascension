gdjs.LoginCode = {};
gdjs.LoginCode.GDButton_95Sign_95InObjects1_1final = [];

gdjs.LoginCode.GDEmailObjects2_1final = [];

gdjs.LoginCode.GDPasswordObjects2_1final = [];

gdjs.LoginCode.GDbutton_95Create_95AccountObjects1_1final = [];

gdjs.LoginCode.GDbutton_95Create_95AccountObjects2_1final = [];

gdjs.LoginCode.GDLoginBoxObjects1= [];
gdjs.LoginCode.GDLoginBoxObjects2= [];
gdjs.LoginCode.GDLoginBoxObjects3= [];
gdjs.LoginCode.GDEmailObjects1= [];
gdjs.LoginCode.GDEmailObjects2= [];
gdjs.LoginCode.GDEmailObjects3= [];
gdjs.LoginCode.GDPasswordObjects1= [];
gdjs.LoginCode.GDPasswordObjects2= [];
gdjs.LoginCode.GDPasswordObjects3= [];
gdjs.LoginCode.GDButton_95ExitObjects1= [];
gdjs.LoginCode.GDButton_95ExitObjects2= [];
gdjs.LoginCode.GDButton_95ExitObjects3= [];
gdjs.LoginCode.GDButton_95Sign_95InObjects1= [];
gdjs.LoginCode.GDButton_95Sign_95InObjects2= [];
gdjs.LoginCode.GDButton_95Sign_95InObjects3= [];
gdjs.LoginCode.GDbutton_95Create_95AccountObjects1= [];
gdjs.LoginCode.GDbutton_95Create_95AccountObjects2= [];
gdjs.LoginCode.GDbutton_95Create_95AccountObjects3= [];
gdjs.LoginCode.GDBackgroundObjects1= [];
gdjs.LoginCode.GDBackgroundObjects2= [];
gdjs.LoginCode.GDBackgroundObjects3= [];
gdjs.LoginCode.GDTextEntry_95ListenerObjects1= [];
gdjs.LoginCode.GDTextEntry_95ListenerObjects2= [];
gdjs.LoginCode.GDTextEntry_95ListenerObjects3= [];

gdjs.LoginCode.conditionTrue_0 = {val:false};
gdjs.LoginCode.condition0IsTrue_0 = {val:false};
gdjs.LoginCode.condition1IsTrue_0 = {val:false};
gdjs.LoginCode.condition2IsTrue_0 = {val:false};
gdjs.LoginCode.condition3IsTrue_0 = {val:false};
gdjs.LoginCode.conditionTrue_1 = {val:false};
gdjs.LoginCode.condition0IsTrue_1 = {val:false};
gdjs.LoginCode.condition1IsTrue_1 = {val:false};
gdjs.LoginCode.condition2IsTrue_1 = {val:false};
gdjs.LoginCode.condition3IsTrue_1 = {val:false};
gdjs.LoginCode.conditionTrue_2 = {val:false};
gdjs.LoginCode.condition0IsTrue_2 = {val:false};
gdjs.LoginCode.condition1IsTrue_2 = {val:false};
gdjs.LoginCode.condition2IsTrue_2 = {val:false};
gdjs.LoginCode.condition3IsTrue_2 = {val:false};


gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9083820);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.LoginCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Button_Sign_In"), gdjs.LoginCode.GDButton_95Sign_95InObjects2);
gdjs.copyArray(runtimeScene.getObjects("button_Create_Account"), gdjs.LoginCode.GDbutton_95Create_95AccountObjects2);
{firebase.analytics();
}{firebase.performance();
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Background Mountains");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Input layer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{for(var i = 0, len = gdjs.LoginCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDBackgroundObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].returnVariable(gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getVariables().get("scale").getChild("x")).setNumber((gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getScaleX()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].returnVariable(gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getVariables().get("scale").getChild("y")).setNumber((gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getScaleY()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].returnVariable(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getVariables().get("scale").getChild("x")).setNumber((( gdjs.LoginCode.GDButton_95Sign_95InObjects2.length === 0 ) ? 0 :gdjs.LoginCode.GDButton_95Sign_95InObjects2[0].getScaleX()));
}
}{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].returnVariable(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getVariables().get("scale").getChild("y")).setNumber((( gdjs.LoginCode.GDButton_95Sign_95InObjects2.length === 0 ) ? 0 :gdjs.LoginCode.GDButton_95Sign_95InObjects2[0].getScaleY()));
}
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.firebaseTools.auth.isAuthentified();
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9085220);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Selection", true);
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = !(gdjs.evtTools.firebaseTools.auth.isAuthentified());
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9087316);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Background Mountains");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Input layer");
}}

}


};gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595Sign_9595InObjects2Objects = Hashtable.newFrom({"Button_Sign_In": gdjs.LoginCode.GDButton_95Sign_95InObjects2});
gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595Sign_9595InObjects2Objects = Hashtable.newFrom({"Button_Sign_In": gdjs.LoginCode.GDButton_95Sign_95InObjects2});
gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595Sign_9595InObjects2Objects = Hashtable.newFrom({"Button_Sign_In": gdjs.LoginCode.GDButton_95Sign_95InObjects2});
gdjs.LoginCode.eventsList1 = function(runtimeScene) {

{

gdjs.LoginCode.GDEmailObjects2.length = 0;

gdjs.LoginCode.GDPasswordObjects2.length = 0;


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.GDEmailObjects2_1final.length = 0;gdjs.LoginCode.GDPasswordObjects2_1final.length = 0;gdjs.LoginCode.condition0IsTrue_1.val = false;
gdjs.LoginCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.LoginCode.GDPasswordObjects3);
for(var i = 0, k = 0, l = gdjs.LoginCode.GDPasswordObjects3.length;i<l;++i) {
    if ( gdjs.LoginCode.GDPasswordObjects3[i].getString() == "" ) {
        gdjs.LoginCode.condition0IsTrue_1.val = true;
        gdjs.LoginCode.GDPasswordObjects3[k] = gdjs.LoginCode.GDPasswordObjects3[i];
        ++k;
    }
}
gdjs.LoginCode.GDPasswordObjects3.length = k;if( gdjs.LoginCode.condition0IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LoginCode.GDPasswordObjects3.length;j<jLen;++j) {
        if ( gdjs.LoginCode.GDPasswordObjects2_1final.indexOf(gdjs.LoginCode.GDPasswordObjects3[j]) === -1 )
            gdjs.LoginCode.GDPasswordObjects2_1final.push(gdjs.LoginCode.GDPasswordObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects3);
for(var i = 0, k = 0, l = gdjs.LoginCode.GDEmailObjects3.length;i<l;++i) {
    if ( gdjs.LoginCode.GDEmailObjects3[i].getString() == "" ) {
        gdjs.LoginCode.condition1IsTrue_1.val = true;
        gdjs.LoginCode.GDEmailObjects3[k] = gdjs.LoginCode.GDEmailObjects3[i];
        ++k;
    }
}
gdjs.LoginCode.GDEmailObjects3.length = k;if( gdjs.LoginCode.condition1IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LoginCode.GDEmailObjects3.length;j<jLen;++j) {
        if ( gdjs.LoginCode.GDEmailObjects2_1final.indexOf(gdjs.LoginCode.GDEmailObjects3[j]) === -1 )
            gdjs.LoginCode.GDEmailObjects2_1final.push(gdjs.LoginCode.GDEmailObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LoginCode.GDEmailObjects2_1final, gdjs.LoginCode.GDEmailObjects2);
gdjs.copyArray(gdjs.LoginCode.GDPasswordObjects2_1final, gdjs.LoginCode.GDPasswordObjects2);
}
}
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9096140);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "Email and/or password is blank.  You must sign in to play the game.  How else would we store your progress?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9096580);
}
}if (gdjs.LoginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.LoginCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.LoginCode.GDPasswordObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.LoginCode.GDEmailObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDEmailObjects1[0].getString()), (( gdjs.LoginCode.GDPasswordObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDPasswordObjects1[0].getString()), runtimeScene.getVariables().get("result"));
}}

}


};gdjs.LoginCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button_Sign_In"), gdjs.LoginCode.GDButton_95Sign_95InObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595Sign_9595InObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9088956);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95Sign_95InObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getBehavior("Tween").addObjectScaleXTween("TweenXY1", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getVariables().get("scale").getChild("x"))) + 0.025, "linear", 50, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getBehavior("Tween").addObjectScaleYTween("TweenXY2", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getVariables().get("scale").getChild("y"))) + 0.025, "linear", 50, false, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Sign_In"), gdjs.LoginCode.GDButton_95Sign_95InObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.condition0IsTrue_1.val = false;
gdjs.LoginCode.condition1IsTrue_1.val = false;
gdjs.LoginCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length;i<l;++i) {
    if ( gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getHeight() > 40 ) {
        gdjs.LoginCode.condition0IsTrue_1.val = true;
        gdjs.LoginCode.GDButton_95Sign_95InObjects2[k] = gdjs.LoginCode.GDButton_95Sign_95InObjects2[i];
        ++k;
    }
}
gdjs.LoginCode.GDButton_95Sign_95InObjects2.length = k;}if ( gdjs.LoginCode.condition0IsTrue_1.val ) {
{
gdjs.LoginCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_1.val ) {
{
gdjs.LoginCode.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595Sign_9595InObjects2Objects, runtimeScene, true, true);
}}
}
gdjs.LoginCode.conditionTrue_1.val = true && gdjs.LoginCode.condition0IsTrue_1.val && gdjs.LoginCode.condition1IsTrue_1.val && gdjs.LoginCode.condition2IsTrue_1.val;
}
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9091140);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95Sign_95InObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getBehavior("Tween").addObjectScaleXTween("TweenXY3", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getVariables().get("scale").getChild("x"))), "linear", 50, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getBehavior("Tween").addObjectScaleYTween("TweenXY4", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getVariables().get("scale").getChild("y"))), "linear", 50, false, true);
}
}}

}


{



}


{

gdjs.LoginCode.GDButton_95Sign_95InObjects1.length = 0;


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.GDButton_95Sign_95InObjects1_1final.length = 0;gdjs.LoginCode.condition0IsTrue_1.val = false;
gdjs.LoginCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button_Sign_In"), gdjs.LoginCode.GDButton_95Sign_95InObjects2);
{gdjs.LoginCode.conditionTrue_2 = gdjs.LoginCode.condition0IsTrue_1;
gdjs.LoginCode.condition0IsTrue_2.val = false;
gdjs.LoginCode.condition1IsTrue_2.val = false;
gdjs.LoginCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length;i<l;++i) {
    if ( gdjs.LoginCode.GDButton_95Sign_95InObjects2[i].getHeight() > 40 ) {
        gdjs.LoginCode.condition0IsTrue_2.val = true;
        gdjs.LoginCode.GDButton_95Sign_95InObjects2[k] = gdjs.LoginCode.GDButton_95Sign_95InObjects2[i];
        ++k;
    }
}
gdjs.LoginCode.GDButton_95Sign_95InObjects2.length = k;}if ( gdjs.LoginCode.condition0IsTrue_2.val ) {
{
gdjs.LoginCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_2.val ) {
{
gdjs.LoginCode.condition2IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595Sign_9595InObjects2Objects, runtimeScene, true, false);
}}
}
gdjs.LoginCode.conditionTrue_2.val = true && gdjs.LoginCode.condition0IsTrue_2.val && gdjs.LoginCode.condition1IsTrue_2.val && gdjs.LoginCode.condition2IsTrue_2.val;
}
if( gdjs.LoginCode.condition0IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LoginCode.GDButton_95Sign_95InObjects2.length;j<jLen;++j) {
        if ( gdjs.LoginCode.GDButton_95Sign_95InObjects1_1final.indexOf(gdjs.LoginCode.GDButton_95Sign_95InObjects2[j]) === -1 )
            gdjs.LoginCode.GDButton_95Sign_95InObjects1_1final.push(gdjs.LoginCode.GDButton_95Sign_95InObjects2[j]);
    }
}
}
{
gdjs.LoginCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.LoginCode.condition1IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.LoginCode.GDButton_95Sign_95InObjects1_1final, gdjs.LoginCode.GDButton_95Sign_95InObjects1);
}
}
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9093532);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95Sign_95InObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects1[i].getBehavior("Tween").addObjectScaleXTween("TweenXY3", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDButton_95Sign_95InObjects1[i].getVariables().get("scale").getChild("x"))), "linear", 50, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95Sign_95InObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95Sign_95InObjects1[i].getBehavior("Tween").addObjectScaleYTween("TweenXY4", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDButton_95Sign_95InObjects1[i].getVariables().get("scale").getChild("y"))), "linear", 50, false, true);
}
}
{ //Subevents
gdjs.LoginCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDbutton_9595Create_9595AccountObjects2Objects = Hashtable.newFrom({"button_Create_Account": gdjs.LoginCode.GDbutton_95Create_95AccountObjects2});
gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDbutton_9595Create_9595AccountObjects3Objects = Hashtable.newFrom({"button_Create_Account": gdjs.LoginCode.GDbutton_95Create_95AccountObjects3});
gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDbutton_9595Create_9595AccountObjects2Objects = Hashtable.newFrom({"button_Create_Account": gdjs.LoginCode.GDbutton_95Create_95AccountObjects2});
gdjs.LoginCode.eventsList3 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Create an Account", true);
}}

}


};gdjs.LoginCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("button_Create_Account"), gdjs.LoginCode.GDbutton_95Create_95AccountObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDbutton_9595Create_9595AccountObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9098356);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDbutton_95Create_95AccountObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseReleasePlay-X", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getVariables().get("scale").getChild("x"))) + 0.025, "linear", 50, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseReleasePlay-Y", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getVariables().get("scale").getChild("y"))) + 0.025, "linear", 50, false, true);
}
}}

}


{

gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length = 0;


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.GDbutton_95Create_95AccountObjects2_1final.length = 0;gdjs.LoginCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("button_Create_Account"), gdjs.LoginCode.GDbutton_95Create_95AccountObjects3);
{gdjs.LoginCode.conditionTrue_2 = gdjs.LoginCode.condition0IsTrue_1;
gdjs.LoginCode.condition0IsTrue_2.val = false;
gdjs.LoginCode.condition1IsTrue_2.val = false;
gdjs.LoginCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDbutton_95Create_95AccountObjects3.length;i<l;++i) {
    if ( gdjs.LoginCode.GDbutton_95Create_95AccountObjects3[i].getHeight() > 40 ) {
        gdjs.LoginCode.condition0IsTrue_2.val = true;
        gdjs.LoginCode.GDbutton_95Create_95AccountObjects3[k] = gdjs.LoginCode.GDbutton_95Create_95AccountObjects3[i];
        ++k;
    }
}
gdjs.LoginCode.GDbutton_95Create_95AccountObjects3.length = k;}if ( gdjs.LoginCode.condition0IsTrue_2.val ) {
{
gdjs.LoginCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_2.val ) {
{
gdjs.LoginCode.condition2IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDbutton_9595Create_9595AccountObjects3Objects, runtimeScene, true, true);
}}
}
gdjs.LoginCode.conditionTrue_2.val = true && gdjs.LoginCode.condition0IsTrue_2.val && gdjs.LoginCode.condition1IsTrue_2.val && gdjs.LoginCode.condition2IsTrue_2.val;
}
if( gdjs.LoginCode.condition0IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LoginCode.GDbutton_95Create_95AccountObjects3.length;j<jLen;++j) {
        if ( gdjs.LoginCode.GDbutton_95Create_95AccountObjects2_1final.indexOf(gdjs.LoginCode.GDbutton_95Create_95AccountObjects3[j]) === -1 )
            gdjs.LoginCode.GDbutton_95Create_95AccountObjects2_1final.push(gdjs.LoginCode.GDbutton_95Create_95AccountObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2_1final, gdjs.LoginCode.GDbutton_95Create_95AccountObjects2);
}
}
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9100884);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDbutton_95Create_95AccountObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseClickPlay-X", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getVariables().get("scale").getChild("x"))), "linear", 50, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseClickPlay-Y", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getVariables().get("scale").getChild("y"))), "linear", 50, false, true);
}
}}

}


{



}


{

gdjs.LoginCode.GDbutton_95Create_95AccountObjects1.length = 0;


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition0IsTrue_0;
gdjs.LoginCode.GDbutton_95Create_95AccountObjects1_1final.length = 0;gdjs.LoginCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("button_Create_Account"), gdjs.LoginCode.GDbutton_95Create_95AccountObjects2);
{gdjs.LoginCode.conditionTrue_2 = gdjs.LoginCode.condition0IsTrue_1;
gdjs.LoginCode.condition0IsTrue_2.val = false;
gdjs.LoginCode.condition1IsTrue_2.val = false;
gdjs.LoginCode.condition2IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length;i<l;++i) {
    if ( gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i].getHeight() > 40 ) {
        gdjs.LoginCode.condition0IsTrue_2.val = true;
        gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[k] = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[i];
        ++k;
    }
}
gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length = k;}if ( gdjs.LoginCode.condition0IsTrue_2.val ) {
{
gdjs.LoginCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition1IsTrue_2.val ) {
{
gdjs.LoginCode.condition2IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDbutton_9595Create_9595AccountObjects2Objects, runtimeScene, true, false);
}}
}
gdjs.LoginCode.conditionTrue_2.val = true && gdjs.LoginCode.condition0IsTrue_2.val && gdjs.LoginCode.condition1IsTrue_2.val && gdjs.LoginCode.condition2IsTrue_2.val;
}
if( gdjs.LoginCode.condition0IsTrue_1.val ) {
    gdjs.LoginCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length;j<jLen;++j) {
        if ( gdjs.LoginCode.GDbutton_95Create_95AccountObjects1_1final.indexOf(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[j]) === -1 )
            gdjs.LoginCode.GDbutton_95Create_95AccountObjects1_1final.push(gdjs.LoginCode.GDbutton_95Create_95AccountObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LoginCode.GDbutton_95Create_95AccountObjects1_1final, gdjs.LoginCode.GDbutton_95Create_95AccountObjects1);
}
}
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9103476);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDbutton_95Create_95AccountObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects1[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseClickPlay-X", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDbutton_95Create_95AccountObjects1[i].getVariables().get("scale").getChild("x"))), "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDbutton_95Create_95AccountObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDbutton_95Create_95AccountObjects1[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseClickPlay-Y", (gdjs.RuntimeObject.getVariableNumber(gdjs.LoginCode.GDbutton_95Create_95AccountObjects1[i].getVariables().get("scale").getChild("y"))), "linear", 0.250, false, true);
}
}
{ //Subevents
gdjs.LoginCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595ExitObjects2Objects = Hashtable.newFrom({"Button_Exit": gdjs.LoginCode.GDButton_95ExitObjects2});
gdjs.LoginCode.eventsList5 = function(runtimeScene) {

{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9106988);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.LoginCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button_Exit"), gdjs.LoginCode.GDButton_95ExitObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595ExitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9106444);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Quitters never win.\nAre you sure you want to be a loser?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9107620);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.LoginCode.eventsList7 = function(runtimeScene) {

{


gdjs.LoginCode.eventsList0(runtimeScene);
}


{


gdjs.LoginCode.eventsList2(runtimeScene);
}


{


gdjs.LoginCode.eventsList4(runtimeScene);
}


{


gdjs.LoginCode.eventsList6(runtimeScene);
}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDLoginBoxObjects1.length = 0;
gdjs.LoginCode.GDLoginBoxObjects2.length = 0;
gdjs.LoginCode.GDLoginBoxObjects3.length = 0;
gdjs.LoginCode.GDEmailObjects1.length = 0;
gdjs.LoginCode.GDEmailObjects2.length = 0;
gdjs.LoginCode.GDEmailObjects3.length = 0;
gdjs.LoginCode.GDPasswordObjects1.length = 0;
gdjs.LoginCode.GDPasswordObjects2.length = 0;
gdjs.LoginCode.GDPasswordObjects3.length = 0;
gdjs.LoginCode.GDButton_95ExitObjects1.length = 0;
gdjs.LoginCode.GDButton_95ExitObjects2.length = 0;
gdjs.LoginCode.GDButton_95ExitObjects3.length = 0;
gdjs.LoginCode.GDButton_95Sign_95InObjects1.length = 0;
gdjs.LoginCode.GDButton_95Sign_95InObjects2.length = 0;
gdjs.LoginCode.GDButton_95Sign_95InObjects3.length = 0;
gdjs.LoginCode.GDbutton_95Create_95AccountObjects1.length = 0;
gdjs.LoginCode.GDbutton_95Create_95AccountObjects2.length = 0;
gdjs.LoginCode.GDbutton_95Create_95AccountObjects3.length = 0;
gdjs.LoginCode.GDBackgroundObjects1.length = 0;
gdjs.LoginCode.GDBackgroundObjects2.length = 0;
gdjs.LoginCode.GDBackgroundObjects3.length = 0;
gdjs.LoginCode.GDTextEntry_95ListenerObjects1.length = 0;
gdjs.LoginCode.GDTextEntry_95ListenerObjects2.length = 0;
gdjs.LoginCode.GDTextEntry_95ListenerObjects3.length = 0;

gdjs.LoginCode.eventsList7(runtimeScene);
return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
