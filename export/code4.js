gdjs.Character_32SelectionCode = {};
gdjs.Character_32SelectionCode.GDHeaderObjects1= [];
gdjs.Character_32SelectionCode.GDHeaderObjects2= [];
gdjs.Character_32SelectionCode.GDHeaderObjects3= [];
gdjs.Character_32SelectionCode.GDButton_95LogoutObjects1= [];
gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2= [];
gdjs.Character_32SelectionCode.GDButton_95LogoutObjects3= [];
gdjs.Character_32SelectionCode.GDWiener_95WarlockObjects1= [];
gdjs.Character_32SelectionCode.GDWiener_95WarlockObjects2= [];
gdjs.Character_32SelectionCode.GDWiener_95WarlockObjects3= [];
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects1= [];
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2= [];
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects3= [];
gdjs.Character_32SelectionCode.GDWiener_95WizardObjects1= [];
gdjs.Character_32SelectionCode.GDWiener_95WizardObjects2= [];
gdjs.Character_32SelectionCode.GDWiener_95WizardObjects3= [];
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects1= [];
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2= [];
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects3= [];
gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects1= [];
gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects2= [];
gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects3= [];
gdjs.Character_32SelectionCode.GDBase_95LayerObjects1= [];
gdjs.Character_32SelectionCode.GDBase_95LayerObjects2= [];
gdjs.Character_32SelectionCode.GDBase_95LayerObjects3= [];
gdjs.Character_32SelectionCode.GDText_95WarlockObjects1= [];
gdjs.Character_32SelectionCode.GDText_95WarlockObjects2= [];
gdjs.Character_32SelectionCode.GDText_95WarlockObjects3= [];
gdjs.Character_32SelectionCode.GDText_95WizardObjects1= [];
gdjs.Character_32SelectionCode.GDText_95WizardObjects2= [];
gdjs.Character_32SelectionCode.GDText_95WizardObjects3= [];
gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects1= [];
gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2= [];
gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects3= [];
gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects1= [];
gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2= [];
gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects3= [];

gdjs.Character_32SelectionCode.conditionTrue_0 = {val:false};
gdjs.Character_32SelectionCode.condition0IsTrue_0 = {val:false};
gdjs.Character_32SelectionCode.condition1IsTrue_0 = {val:false};
gdjs.Character_32SelectionCode.condition2IsTrue_0 = {val:false};
gdjs.Character_32SelectionCode.conditionTrue_1 = {val:false};
gdjs.Character_32SelectionCode.condition0IsTrue_1 = {val:false};
gdjs.Character_32SelectionCode.condition1IsTrue_1 = {val:false};
gdjs.Character_32SelectionCode.condition2IsTrue_1 = {val:false};


gdjs.Character_32SelectionCode.eventsList0 = function(runtimeScene) {

{


gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
{gdjs.Character_32SelectionCode.conditionTrue_1 = gdjs.Character_32SelectionCode.condition1IsTrue_0;
gdjs.Character_32SelectionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9137948);
}
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background_Mountains"), gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects1);
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects1.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects1[i].setOpacity(100);
}
}}

}


};gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDButton_9595LogoutObjects2Objects = Hashtable.newFrom({"Button_Logout": gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDButton_9595LogoutObjects2Objects = Hashtable.newFrom({"Button_Logout": gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDButton_9595LogoutObjects1Objects = Hashtable.newFrom({"Button_Logout": gdjs.Character_32SelectionCode.GDButton_95LogoutObjects1});
gdjs.Character_32SelectionCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button_Logout"), gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDButton_9595LogoutObjects2Objects, runtimeScene, true, false);
}if (gdjs.Character_32SelectionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2 */
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2[i].setItalic(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Logout"), gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDButton_9595LogoutObjects2Objects, runtimeScene, true, true);
}if (gdjs.Character_32SelectionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2 */
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2[i].setItalic(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Logout"), gdjs.Character_32SelectionCode.GDButton_95LogoutObjects1);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDButton_9595LogoutObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
{firebase.auth().signOut();
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", true);
}}

}


};gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWizard_9595Character_9595BoxObjects2Objects = Hashtable.newFrom({"Wizard_Character_Box": gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWizard_9595Character_9595BoxObjects2Objects = Hashtable.newFrom({"Wizard_Character_Box": gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWizard_9595Character_9595BoxObjects2Objects = Hashtable.newFrom({"Wizard_Character_Box": gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWarlock_9595Character_9595BoxObjects2Objects = Hashtable.newFrom({"Warlock_Character_Box": gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWarlock_9595Character_9595BoxObjects2Objects = Hashtable.newFrom({"Warlock_Character_Box": gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2});
gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWarlock_9595Character_9595BoxObjects1Objects = Hashtable.newFrom({"Warlock_Character_Box": gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects1});
gdjs.Character_32SelectionCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Wizard_Character_Box"), gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWizard_9595Character_9595BoxObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
{gdjs.Character_32SelectionCode.conditionTrue_1 = gdjs.Character_32SelectionCode.condition1IsTrue_0;
gdjs.Character_32SelectionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9173772);
}
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Small_Wiener_Wizard"), gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2);
/* Reuse gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2 */
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWizardCharacterBox-X", (gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getScaleX()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWizardCharacterBox-Y", (gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getScaleY()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWizardCharacterBox-X", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getScaleX()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWizardCharacterBox-Y", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getScaleY()) + 0.025, "linear", 0.250, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wizard_Character_Box"), gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWizard_9595Character_9595BoxObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Warlock");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Wizard");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wizard_Character_Box"), gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWizard_9595Character_9595BoxObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
{gdjs.Character_32SelectionCode.conditionTrue_1 = gdjs.Character_32SelectionCode.condition1IsTrue_0;
gdjs.Character_32SelectionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9154260);
}
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Small_Wiener_Wizard"), gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2);
/* Reuse gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2 */
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWizardCharacterBox-X", (gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getScaleX()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWizardCharacterBox-Y", (gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2[i].getScaleY()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWizardCharacterBox-Y", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getScaleY()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWizardCharacterBox-X", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2[i].getScaleX()) - 0.025, "linear", 0.250, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Warlock_Character_Box"), gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWarlock_9595Character_9595BoxObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
{gdjs.Character_32SelectionCode.conditionTrue_1 = gdjs.Character_32SelectionCode.condition1IsTrue_0;
gdjs.Character_32SelectionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9122020);
}
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Small_Wiener_Warlock"), gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2);
/* Reuse gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2 */
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWarlockCharacterBox-X", (gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getScaleX()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWarlockCharacterBox-Y", (gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getScaleY()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWarlockCharacterBox-X", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getScaleX()) + 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWarlockCharacterBox-Y", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getScaleY()) + 0.025, "linear", 0.250, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Warlock_Character_Box"), gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWarlock_9595Character_9595BoxObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
{gdjs.Character_32SelectionCode.conditionTrue_1 = gdjs.Character_32SelectionCode.condition1IsTrue_0;
gdjs.Character_32SelectionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9169716);
}
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Small_Wiener_Warlock"), gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2);
/* Reuse gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2 */
{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWarlockCharacterBox-X", (gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getScaleX()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWarlockCharacterBox-Y", (gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2[i].getScaleY()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getBehavior("Tween").addObjectScaleYTween("MouseOverWarlockCharacterBox-Y", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getScaleY()) - 0.025, "linear", 0.250, false, true);
}
}{for(var i = 0, len = gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2.length ;i < len;++i) {
    gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getBehavior("Tween").addObjectScaleXTween("MouseOverWarlockCharacterBox-X", (gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2[i].getScaleX()) - 0.025, "linear", 0.250, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Warlock_Character_Box"), gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects1);

gdjs.Character_32SelectionCode.condition0IsTrue_0.val = false;
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = false;
{
gdjs.Character_32SelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Character_32SelectionCode.condition0IsTrue_0.val ) {
{
gdjs.Character_32SelectionCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Character_32SelectionCode.mapOfGDgdjs_46Character_9532SelectionCode_46GDWarlock_9595Character_9595BoxObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Character_32SelectionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Wizard");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Warlock");
}}

}


};gdjs.Character_32SelectionCode.eventsList3 = function(runtimeScene) {

{


gdjs.Character_32SelectionCode.eventsList0(runtimeScene);
}


{


gdjs.Character_32SelectionCode.eventsList1(runtimeScene);
}


{


gdjs.Character_32SelectionCode.eventsList2(runtimeScene);
}


};

gdjs.Character_32SelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Character_32SelectionCode.GDHeaderObjects1.length = 0;
gdjs.Character_32SelectionCode.GDHeaderObjects2.length = 0;
gdjs.Character_32SelectionCode.GDHeaderObjects3.length = 0;
gdjs.Character_32SelectionCode.GDButton_95LogoutObjects1.length = 0;
gdjs.Character_32SelectionCode.GDButton_95LogoutObjects2.length = 0;
gdjs.Character_32SelectionCode.GDButton_95LogoutObjects3.length = 0;
gdjs.Character_32SelectionCode.GDWiener_95WarlockObjects1.length = 0;
gdjs.Character_32SelectionCode.GDWiener_95WarlockObjects2.length = 0;
gdjs.Character_32SelectionCode.GDWiener_95WarlockObjects3.length = 0;
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects1.length = 0;
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects2.length = 0;
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WarlockObjects3.length = 0;
gdjs.Character_32SelectionCode.GDWiener_95WizardObjects1.length = 0;
gdjs.Character_32SelectionCode.GDWiener_95WizardObjects2.length = 0;
gdjs.Character_32SelectionCode.GDWiener_95WizardObjects3.length = 0;
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects1.length = 0;
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects2.length = 0;
gdjs.Character_32SelectionCode.GDSmall_95Wiener_95WizardObjects3.length = 0;
gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects1.length = 0;
gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects2.length = 0;
gdjs.Character_32SelectionCode.GDBackground_95MountainsObjects3.length = 0;
gdjs.Character_32SelectionCode.GDBase_95LayerObjects1.length = 0;
gdjs.Character_32SelectionCode.GDBase_95LayerObjects2.length = 0;
gdjs.Character_32SelectionCode.GDBase_95LayerObjects3.length = 0;
gdjs.Character_32SelectionCode.GDText_95WarlockObjects1.length = 0;
gdjs.Character_32SelectionCode.GDText_95WarlockObjects2.length = 0;
gdjs.Character_32SelectionCode.GDText_95WarlockObjects3.length = 0;
gdjs.Character_32SelectionCode.GDText_95WizardObjects1.length = 0;
gdjs.Character_32SelectionCode.GDText_95WizardObjects2.length = 0;
gdjs.Character_32SelectionCode.GDText_95WizardObjects3.length = 0;
gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects1.length = 0;
gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects2.length = 0;
gdjs.Character_32SelectionCode.GDWizard_95Character_95BoxObjects3.length = 0;
gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects1.length = 0;
gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects2.length = 0;
gdjs.Character_32SelectionCode.GDWarlock_95Character_95BoxObjects3.length = 0;

gdjs.Character_32SelectionCode.eventsList3(runtimeScene);
return;

}

gdjs['Character_32SelectionCode'] = gdjs.Character_32SelectionCode;
