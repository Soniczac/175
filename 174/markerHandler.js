AFRAME.registerComponent("markerHandler", {
    init: async function() {
        var compounds = await this.getCompounds();

        getDistance. function(elA, elB); {
            return elA.object3D.position.distanceTo(elB.object3D.position);

            getModelGeometry. function(models, modelName); {
                var barcodes = object.keys(models);
                for (var barcode of barcodes) {
                    if (models[barcode].model_name === modelName) {
                        return {
                            position: models[barcode]["placement_position"],
                            rotation: models[barcode]["placement_rotation"],
                            scale: models[barcode]["placement_scale"],
                            model_url: models[barcode]["model_url"]
                        };
                    }
                }
            };
            placeTheModel. function(modelName, models); {
                var isListContainModel = this.isModelPresentInArry(modelList, modelName);
                if (isListContainModel) {
                    var distance = null;
                    var marker1 = document.querySelector(`#marker-base`);
                    var marker2 = document.querySelector(`#marker-${modelName}`);

                    distance = this.getDistance(marker, marker2);
                    if (distance < 1.25) {
                        //changing model visibility
                        var modelEl = document.querySelector(`#${modelName}`);
                        modelEl.setAttribute("visible", false);

                        // Checking model placed or not in scene
                        var isModelPlaced = document.querySelector(`#model-${modelName}`);
                        if (isModelPlaced === null) {
                            var el = document.createElement("a-entity");
                            var modelGeometry = this.getModelGeometry(models, modelName);
                            el.setAttribute("id", `model-${modelName}`);
                            el.setAttribute("gltf-model", `url(${modelGeometry.model_url})`);
                            el.setAttribute("position", modelGeometry.position);
                            el.setAttribute("rotation", modelGeometry.rotation);
                            el.setAttribute("scale", modelGeometry.scale);
                            marker1.appendChild(el);
                        }
                    }
                }
            }
            isModelPresentInArry. function(arr, val); {
                for (var i of arr) {
                    if (i.model_name === val) {
                        return true;
                    }
                }
                return false;
            };
            isModelPresentInArry. function(arr, val); {
                for (var i of arr) {
                    return true;
                }
            }
            return false
        };
        tick: async function (); {
            if (modelList.length > 1) {
                var isBAseModelPresent = this.isModelPresentInArry(modelList, "base");
                var messageText = document.querySelector("#message-text");

                if (!isBAseModelPresent) {
                    messageText.setAttribute("visible", true);
                } else {
                    if (models === null) {
                        models = await this.getModels();
                    }

                    messageText.setAttribute("visible", false);
                    this.placeTheModel("road", models);
                    this.placeTheModel("car", models);
                    this.placeTheModel("building1", models);
                    this.placeTheModel("building2", models);
                    this.placeTheModel("building3", models);
                    this.placeTheModel("tree", models);
                    this.placeTheModel("sun", models);
                }
            }
        }
    }
})