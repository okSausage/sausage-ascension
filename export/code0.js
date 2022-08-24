gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1= [];
gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects2= [];
gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects3= [];
gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1= [];
gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects2= [];
gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects3= [];
gdjs.Title_32ScreenCode.GDbgMountainsObjects1= [];
gdjs.Title_32ScreenCode.GDbgMountainsObjects2= [];
gdjs.Title_32ScreenCode.GDbgMountainsObjects3= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDTitle_9595SauSageObjects1Objects = Hashtable.newFrom({"Title_SauSage": gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1});
gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDTitle_9595AscensionObjects1Objects = Hashtable.newFrom({"Title_Ascension": gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1});
gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition0IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9071524);
}
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1, gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects2);

gdjs.copyArray(gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1, gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects2);

{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects2[i].hide(false);
}
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition0IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9072100);
}
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1 */
/* Reuse gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[i].getBehavior("Tween").addObjectPositionYTween("TweenUp", (( gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1.length === 0 ) ? 0 :gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1[0].getAABBTop()) - (gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[i].getHeight()), "linear", 2000, false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1[i].getBehavior("Tween").addObjectOpacityTween("TweenOpacityUp", 255, "linear", 2000, false);
}
}}

}


};gdjs.Title_32ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition0IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9073612);
}
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Title_Ascension"), gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1);
/* Reuse gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[i].getBehavior("Tween").addObjectOpacityTween("SauSageTweenOut", 0, "linear", 1500, true);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1[i].getBehavior("Tween").addObjectOpacityTween("AscensionTweenOut", 0, "linear", 1500, true);
}
}}

}


};gdjs.Title_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition1IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9069628);
}
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Title_Ascension"), gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title_SauSage"), gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1);
gdjs.copyArray(runtimeScene.getObjects("bgMountains"), gdjs.Title_32ScreenCode.GDbgMountainsObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1[i].hide();
}
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDTitle_9595SauSageObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDTitle_9595AscensionObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDbgMountainsObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDbgMountainsObjects1[i].resetTimer("SceneTimer");
}
}
{ //Subevents
gdjs.Title_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Title_SauSage"), gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[i].getBehavior("Tween").hasFinished("TweenUp") ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[k] = gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1.length = k;}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Title_32ScreenCode.conditionTrue_1 = gdjs.Title_32ScreenCode.condition1IsTrue_0;
gdjs.Title_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9072012);
}
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "Title Text", 0, 1.5, 2, 3, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Title_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bgMountains"), gdjs.Title_32ScreenCode.GDbgMountainsObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDbgMountainsObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDbgMountainsObjects1[i].getTimerElapsedTimeInSecondsOrNaN("SceneTimer") >= 5 ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDbgMountainsObjects1[k] = gdjs.Title_32ScreenCode.GDbgMountainsObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDbgMountainsObjects1.length = k;}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", true);
}}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95SauSageObjects3.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitle_95AscensionObjects3.length = 0;
gdjs.Title_32ScreenCode.GDbgMountainsObjects1.length = 0;
gdjs.Title_32ScreenCode.GDbgMountainsObjects2.length = 0;
gdjs.Title_32ScreenCode.GDbgMountainsObjects3.length = 0;

gdjs.Title_32ScreenCode.eventsList2(runtimeScene);
return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
