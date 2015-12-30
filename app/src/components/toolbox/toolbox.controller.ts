module app.toolbox {


    //TODO change scrolling in toolbox to let bottom bar and top tabs stay static

    import GeneralToolboxElement = app.core.GeneralToolboxElement;
    import ControlToolboxElement = app.core.ControlToolboxElement;
    import TreeElement = app.core.TreeElement;
    import ToolboxElement = app.core.ToolboxElement;


    class ToolboxController {

        public currentAddElementLabel: string = '';
        public currentAddElementType: string = 'string';
        public elementTypes = ['string', 'number', 'boolean'];


        static $inject = ['$scope', '$filter', 'ToolboxService', 'ConfigDialogService'];

        constructor($scope, public $filter, public toolboxService: ToolboxService, public configService: ConfigDialogService) {

            var _this = this;
            $scope.treeOptionsToolbox = {
                accept: function (sourceNodeScope, destNodesScope, destIndex) {
                    return false;
                },
                dropped: function(e) {
                    //if the element is being dragged into the toolbar itself, return
                    if(e.dest.nodesScope.$modelValue == e.source.nodesScope.$modelValue) {
                        return;
                    }

                    // Convert the ToolboxElement into a TreeElement
                    var index = e.dest.index;
                    var modelDest: ToolboxElement = e.dest.nodesScope.$modelValue[index];

                    var modelSource: ToolboxElement = e.source.nodeScope.$modelValue;
                    if(modelSource instanceof ControlToolboxElement) {
                        var control: ControlToolboxElement = modelSource;
                        control.increasePlacedTimes();
                    }
                    e.dest.nodesScope.$modelValue[index] = modelDest.insertIntoTree(TreeElement.getNewId());

                },
                dragStart: function(e) {
                    var h = 52;
                    var w = $('.tree-view').width() /2;

                    console.log(e);

                    $(e.elements.placeholder).css('height',h+'px');
                    $(e.elements.placeholder).css('width',w+'px');
                }

            };
        }

        shouldHide(element: ToolboxElement): boolean {
            if(!this.configService.enableFilter){
                return false;
            }
            if(element instanceof ControlToolboxElement){
                if(element.isAlreadyPlaced()){
                    return true;
                }
            }
            return false;
        }

        changeAddType() {
            this.currentAddElementIndex = (this.currentAddElementIndex + 1) % this.elementTypes.length;
        }

        typeOfNewElement(): string {
            return this.currentAddElementType;
        }


        //TODO support different scopes(inside folders)
        //TODO add more data into content(required, min chars, etc)
        addNewElement() {
            document.getElementById("inputLabel").focus();

            var content = {
                type: this.typeOfNewElement()
            };

            var added = this.toolboxService.addSchemaElement(this.currentAddElementLabel, content);

            if(added==false) {
                console.log("ERROR: failed to add the element into the schema");
            }
            this.currentAddElementLabel = '';
        }

        removeDataElement(element: ControlToolboxElement) {
            if(this.canRemoveDataElement(element)){
                var removed = this.toolboxService.removeSchemaElement(element.getScope());

                if(removed==false) {
                    console.log("ERROR: failed to remove the element from the schema");
                }
            }
        }

        canRemoveDataElement(element:ControlToolboxElement):boolean {
            return !element.isAlreadyPlaced();
        }

    }

    angular.module('app.toolbox').controller('ToolboxController', ToolboxController)
}

