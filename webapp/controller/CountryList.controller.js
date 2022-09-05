sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/GroupHeaderListItem",
    "sap/ui/model/json/JSONModel"
],function(Controller,UIComponent,GroupHeaderListItem,JSONModel){
    "use strict";
    return Controller.extend("custom.custom.controller.CountryList",{
        onInit: function(){
        },
        getCounty:function(oContext){
            return oContext.getProperty('county');
        },
        getGroupHeader: function(oGroup) {
			return new GroupHeaderListItem({
				title : oGroup.key
			});
        },
        onPress: function(oEvent){
            if(!this.popUp){
                this.popUp = this.loadFragment({
                    name:"custom.custom.view.Dialog"
                });
            }
            this.popUp.then(function(oDialog){
                oDialog.open();
            });
        },
        test:function(sLayo){
            debugger;
            return "Gourab";
        },
        onCloseDialog:function(oEvent){
            debugger;
            oEvent.getSource().getParent().close();
        },
        showValueHelp: function(oEvent){
            debugger;
            this.oProductsModel= new JSONModel(sap.ui.require.toUrl("custom/custom/model/columnModel.json"));
            this.oColModel = new JSONModel(sap.ui.require.toUrl("sap/ui/comp/sample/valuehelpdialog/basic") + "/columnsModel.json");
            if(!this._valueHelpDialog){
                this._valueHelpDialog=this.loadFragment({
                    "name":"custom.custom.view.ValueHelpDialog"
                });
            }
            this._valueHelpDialog.then(function(oDialog){
                this._oValueHelpDialog = sap.ui.xmlfragment("custom.custom.view.ValueHelpDialog", this);
                this.getView().addDependent(this._oValueHelpDialog);
                
                this._oValueHelpDialog.getTableAsync().then(function(oTable){

                    oTable.setModel(this.oProductsModel);
					oTable.setModel(this.oColModel, "columns");

					if (oTable.bindRows) {
						oTable.bindAggregation("rows", "/ProductCollection");
					}

                    if (oTable.bindItems) {
						oTable.bindAggregation("items", "/ProductCollection", function () {
							return new ColumnListItem({
								cells: aCols.map(function (column) {
									return new Label({ text: "{" + column.template + "}" });
								})
							});
						});
					}

                    this._oValueHelpDialog.update();

                }.bind(this));
                this._oValueHelpDialog.setTokens(this._oMultiInput.getTokens());
				this._oValueHelpDialog.open();
            }.bind(this));
        }
    });
});