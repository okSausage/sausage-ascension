gdjs.LoginCode = {};
gdjs.LoginCode.GDLoginBoxObjects1= [];
gdjs.LoginCode.GDLoginBoxObjects2= [];
gdjs.LoginCode.GDLoginBoxObjects3= [];
gdjs.LoginCode.GDEmailObjects1= [];
gdjs.LoginCode.GDEmailObjects2= [];
gdjs.LoginCode.GDEmailObjects3= [];
gdjs.LoginCode.GDPasswordObjects1= [];
gdjs.LoginCode.GDPasswordObjects2= [];
gdjs.LoginCode.GDPasswordObjects3= [];
gdjs.LoginCode.GDButton_95PlayObjects1= [];
gdjs.LoginCode.GDButton_95PlayObjects2= [];
gdjs.LoginCode.GDButton_95PlayObjects3= [];
gdjs.LoginCode.GDButton_95OptionsObjects1= [];
gdjs.LoginCode.GDButton_95OptionsObjects2= [];
gdjs.LoginCode.GDButton_95OptionsObjects3= [];
gdjs.LoginCode.GDButton_95ExitObjects1= [];
gdjs.LoginCode.GDButton_95ExitObjects2= [];
gdjs.LoginCode.GDButton_95ExitObjects3= [];

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


gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595PlayObjects2Objects = Hashtable.newFrom({"Button_Play": gdjs.LoginCode.GDButton_95PlayObjects2});
gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button_Play"), gdjs.LoginCode.GDButton_95PlayObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595PlayObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8510476);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95PlayObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95PlayObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95PlayObjects2[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseClickPlay-X", (gdjs.LoginCode.GDButton_95PlayObjects2[i].getScaleX()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95PlayObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95PlayObjects2[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseClickPlay-Y", (gdjs.LoginCode.GDButton_95PlayObjects2[i].getScaleY()) + 0.025, "linear", 0.250, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Play"), gdjs.LoginCode.GDButton_95PlayObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDButton_95PlayObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDButton_95PlayObjects1[i].getHeight() > 40 ) {
        gdjs.LoginCode.condition1IsTrue_0.val = true;
        gdjs.LoginCode.GDButton_95PlayObjects1[k] = gdjs.LoginCode.GDButton_95PlayObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDButton_95PlayObjects1.length = k;}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8510628);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95PlayObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95PlayObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95PlayObjects1[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseReleasePlay-X", (gdjs.LoginCode.GDButton_95PlayObjects1[i].getScaleX()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95PlayObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95PlayObjects1[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseReleasePlay-Y", (gdjs.LoginCode.GDButton_95PlayObjects1[i].getScaleY()) - 0.025, "linear", 0.250, false, true);
}
}}

}


};gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595OptionsObjects2Objects = Hashtable.newFrom({"Button_Options": gdjs.LoginCode.GDButton_95OptionsObjects2});
gdjs.LoginCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button_Options"), gdjs.LoginCode.GDButton_95OptionsObjects2);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595OptionsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8513668);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95OptionsObjects2 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95OptionsObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95OptionsObjects2[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseClickPlay-X", (gdjs.LoginCode.GDButton_95OptionsObjects2[i].getScaleX()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95OptionsObjects2.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95OptionsObjects2[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseClickPlay-Y", (gdjs.LoginCode.GDButton_95OptionsObjects2[i].getScaleY()) + 0.025, "linear", 0.250, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Options"), gdjs.LoginCode.GDButton_95OptionsObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LoginCode.GDButton_95OptionsObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDButton_95OptionsObjects1[i].getHeight() > 40 ) {
        gdjs.LoginCode.condition1IsTrue_0.val = true;
        gdjs.LoginCode.GDButton_95OptionsObjects1[k] = gdjs.LoginCode.GDButton_95OptionsObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDButton_95OptionsObjects1.length = k;}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8513332);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
/* Reuse gdjs.LoginCode.GDButton_95OptionsObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDButton_95OptionsObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95OptionsObjects1[i].getBehavior("Tween").addObjectScaleXTween("LeftMouseReleasePlay-X", (gdjs.LoginCode.GDButton_95OptionsObjects1[i].getScaleX()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.LoginCode.GDButton_95OptionsObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDButton_95OptionsObjects1[i].getBehavior("Tween").addObjectScaleYTween("LeftMouseReleasePlay-Y", (gdjs.LoginCode.GDButton_95OptionsObjects1[i].getScaleY()) - 0.025, "linear", 0.250, false, true);
}
}{gdjs.evtsExt__PopUp__Alert.func(runtimeScene, "If you are looking for options you're out of luck.  There are no options yet.  Maybe there won't be any.  I don't know right now.  Nobody knows...\n\nI suppose this is not entirely true.\nI guess you have one option.\n\nPlay the game.", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595ExitObjects1Objects = Hashtable.newFrom({"Button_Exit": gdjs.LoginCode.GDButton_95ExitObjects1});
gdjs.LoginCode.eventsList2 = function(runtimeScene) {

{


gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition1IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8481244);
}
}}
if (gdjs.LoginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.LoginCode.eventsList3 = function(runtimeScene) {

{


gdjs.LoginCode.eventsList0(runtimeScene);
}


{


gdjs.LoginCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Exit"), gdjs.LoginCode.GDButton_95ExitObjects1);

gdjs.LoginCode.condition0IsTrue_0.val = false;
gdjs.LoginCode.condition1IsTrue_0.val = false;
gdjs.LoginCode.condition2IsTrue_0.val = false;
{
gdjs.LoginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoginCode.condition0IsTrue_0.val ) {
{
gdjs.LoginCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_46LoginCode_46GDButton_9595ExitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LoginCode.condition1IsTrue_0.val ) {
{
{gdjs.LoginCode.conditionTrue_1 = gdjs.LoginCode.condition2IsTrue_0;
gdjs.LoginCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7424860);
}
}}
}
if (gdjs.LoginCode.condition2IsTrue_0.val) {
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Quitters never win.\nAre you sure you want to be a loser?", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.LoginCode.eventsList2(runtimeScene);} //End of subevents
}

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
gdjs.LoginCode.GDButton_95PlayObjects1.length = 0;
gdjs.LoginCode.GDButton_95PlayObjects2.length = 0;
gdjs.LoginCode.GDButton_95PlayObjects3.length = 0;
gdjs.LoginCode.GDButton_95OptionsObjects1.length = 0;
gdjs.LoginCode.GDButton_95OptionsObjects2.length = 0;
gdjs.LoginCode.GDButton_95OptionsObjects3.length = 0;
gdjs.LoginCode.GDButton_95ExitObjects1.length = 0;
gdjs.LoginCode.GDButton_95ExitObjects2.length = 0;
gdjs.LoginCode.GDButton_95ExitObjects3.length = 0;

gdjs.LoginCode.eventsList3(runtimeScene);
return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
