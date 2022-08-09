gdjs.CreditsCode = {};
gdjs.CreditsCode.GDSauSageObjects1= [];
gdjs.CreditsCode.GDSauSageObjects2= [];
gdjs.CreditsCode.GDAscensionObjects1= [];
gdjs.CreditsCode.GDAscensionObjects2= [];
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDSauSageObjects1Objects = Hashtable.newFrom({"SauSage": gdjs.CreditsCode.GDSauSageObjects1});
gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDSauSageObjects1Objects = Hashtable.newFrom({"SauSage": gdjs.CreditsCode.GDSauSageObjects1});
gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDAscensionObjects1Objects = Hashtable.newFrom({"Ascension": gdjs.CreditsCode.GDAscensionObjects1});
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ascension"), gdjs.CreditsCode.GDAscensionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.CreditsCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("SauSage"), gdjs.CreditsCode.GDSauSageObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Title");
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDSauSageObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneTop.func(runtimeScene, gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDSauSageObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToScreenCenter.func(runtimeScene, gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDAscensionObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.CreditsCode.GDAscensionObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDAscensionObjects1[i].setY((( gdjs.CreditsCode.GDSauSageObjects1.length === 0 ) ? 0 :gdjs.CreditsCode.GDSauSageObjects1[0].getAABBBottom()));
}
}{for(var i = 0, len = gdjs.CreditsCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsObjects1[i].setX(20);
}
}{for(var i = 0, len = gdjs.CreditsCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsObjects1[i].setY((( gdjs.CreditsCode.GDAscensionObjects1.length === 0 ) ? 0 :gdjs.CreditsCode.GDAscensionObjects1[0].getAABBBottom()) + 20);
}
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDSauSageObjects1.length = 0;
gdjs.CreditsCode.GDSauSageObjects2.length = 0;
gdjs.CreditsCode.GDAscensionObjects1.length = 0;
gdjs.CreditsCode.GDAscensionObjects2.length = 0;
gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
