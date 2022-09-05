sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],function(Controller,UIComponent){
    "use strict";
    return Controller.extend("custom.custom.controller.List",{
        onInit: function(){
            debugger;
        },
        onSelectionChange:function(oEvent){
            debugger;
            this.getView().getModel("AppView").setProperty(
                "/Layout", "TwoColumnsMidExpanded"
            );
            var oBindingContext=oEvent.getSource().getBindingContext();
            UIComponent.getRouterFor(this).navTo("Detail",{
                ClaimNo:this.getView().getModel().getProperty(oBindingContext.getPath()).Claim
            });
        }
    });
});