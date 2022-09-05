sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],function(Controller,UIComponent){
    "use strict";
    return Controller.extend("custom.custom.controller.Detail",{
        onInit: function(){
            debugger;
            UIComponent.getRouterFor(this).getRoute("Detail").attachPatternMatched(this.handleNavigation,this);
        },
        handleNavigation:function(oEvent){
            debugger;
            this.getView().getModel("AppView").setProperty(
                "/Layout", "TwoColumnsMidExpanded"
            );
            var sClaim = oEvent.getParameters().arguments['ClaimNo'];
            var sPath="/ExpenseDetailSet('" + sClaim + "')";
            this.getView().bindElement(sPath);
        }
    });
});