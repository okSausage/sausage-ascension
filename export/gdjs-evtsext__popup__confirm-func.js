
if (typeof gdjs.evtsExt__PopUp__Confirm !== "undefined") {
  gdjs.evtsExt__PopUp__Confirm.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PopUp__Confirm = {};

gdjs.evtsExt__PopUp__Confirm.conditionTrue_0 = {val:false};
gdjs.evtsExt__PopUp__Confirm.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PopUp__Confirm.userFunc0x8a39c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const isConfirmed = confirm(eventsFunctionContext.getArgument("Message"));
runtimeScene
    .getVariables()
    .get("__PopUp")
    .getChild("Confirm")
    .setBoolean(isConfirmed);

};
gdjs.evtsExt__PopUp__Confirm.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PopUp__Confirm.userFunc0x8a39c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PopUp__Confirm.func = function(runtimeScene, Message, parentEventsFunctionContext) {
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
if (argName === "Message") return Message;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PopUp__Confirm.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__PopUp__Confirm.registeredGdjsCallbacks = [];