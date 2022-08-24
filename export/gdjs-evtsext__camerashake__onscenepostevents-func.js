
if (typeof gdjs.evtsExt__CameraShake__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__onScenePostEvents = {};

gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShake__onScenePostEvents.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_AngleTravelled"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ZoomTravelled")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledX"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledY"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledX").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledY").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_AngleTravelled").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_ZoomTravelled").setNumber(0);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) * gdjs.randomWithStep(-(1), 1, 2));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) * gdjs.randomWithStep(-(1), 1, 2));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake")) == 1;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake")) == 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeCounter")), 2) == 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")));
}}

}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeCounter")), 2) == 1);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle").setNumber(-(1) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeCounter")), 2) == 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom").setNumber(-(1) * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) * (1 / 100));
}}

}


{



}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeCounter")), 2) == 1);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShake_DurationTimer")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) * (1 / 100));
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);
}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake").setNumber(0);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake")) == 1;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")), "__CameraShake_ShakeTimer");
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_ShakeTimer");
}{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeCounter").add(1);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledX").sub(Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024);
}{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledY").sub(Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_AngleTravelled").add(Math.round(1024 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame")))) / 1024);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_ZoomTravelled").add(Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) != 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), 0) + (Math.round(1024 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame")))) / 1024), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), 0);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) != 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) + Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledX").add(Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024);
}{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledY").add(Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_AngleTravelled").sub(Math.round(1024 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame")))) / 1024);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_ZoomTravelled").sub(Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) + (Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) + (Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) != 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), 0) - (Math.round(1024 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementAngle")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame")))) / 1024), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), 0);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) != 0);
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - Math.round(1024 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementZoom")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame"))) / 1024, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getVariables().get("__CameraShake_PercentTimeElapsedThisFrame").setNumber(Math.min(1, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes"))));
}}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) / 2, "__CameraShake_ShakeTimer"));
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) / 2, "__CameraShake_ShakeTimer");
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeForever"), true);
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber(100);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_DurationTimer");
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList16(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == 1;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_AngleTravelled"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom")) != 0;
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ZoomTravelled")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerX")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_PowerY")) != 0;
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledX"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera"))) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledY"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShake_Layer")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Camera")));
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledX").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_DisplacementTravelledY").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_AngleTravelled").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_ZoomTravelled").setNumber(0);
}{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeCounter").setNumber(0);
}}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList19(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = false;
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")), "__CameraShake_DurationTimer");
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == -(1);
if( gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_1.val ) {
    gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.evtsExt__CameraShake__onScenePostEvents.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0;
gdjs.evtsExt__CameraShake__onScenePostEvents.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9261380);
}
}}
if (gdjs.evtsExt__CameraShake__onScenePostEvents.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList21(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList22(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CameraShake__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__onScenePostEvents.eventsList23(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraShake__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraShake__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
