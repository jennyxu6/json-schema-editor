module app.core.model {

    import ElementConfig = app.core.elementsConfig.ElementConfig;

    export class ToolboxDataType{
    // export class ToolboxDataType extends ToolboxElement{

        constructor(public datatype:string) {
            // super(name, "", null);
            // var config, type;
            // if(datatype == 'object'){
            //     config = new ElementConfig('object', '', 'folder');
            //     type = 'object';
            // } else {
            //     config = new ElementConfig('Control', '', 'code');
            //     type = 'Control';
            // }
            // this.elementConfig = config;
            this.datatype = datatype;

        }

        getType(): string {
            return this.datatype;
        }

        isObject(): boolean {
            return false;
        }


        convertToTreeElement():TreeElement {
            var treeElement = new TreeElement();
            // treeElement.setType("Control");
            // treeElement.setDataType(this.datatype);
            // treeElement.setScope(this.scope);
            // treeElement.setReadOnly(false);
            // treeElement.setLabel(this.getLabel());
            // treeElement.setAcceptedElements(this.getAcceptedElements());
            return treeElement;
        }

        getScope():string {
            return "";
        }
        //
        // clone():ControlToolboxElement {
        //     return new ControlToolboxElement(this.label, this.datatype, this.scope);
        // }

    }
}