module app.core.model {

    export class TreeElement {

        private errors: string[] = [];
        private type:string;
        private dataType:string;
        public label:string;
        private scope:string;
        private readOnly:boolean;
        private rule:{} = {
            "effect": "",
            "condition": {
                "scope": "",
                "expectedValue": ""
            }
        };
        public elements:TreeElement[] = [];
        public metaData:any = {};


        public getType():string {
            return this.type;
        }

        public setType(newType:string):void {
            this.type = newType;
        }

        public getDataType():string {
            return this.dataType;
        }

        public setDataType(newDataType:string):void {
            this.dataType = newDataType;
        }

        public getLongType() {
            if (this.type == 'Control') {
                return this.type + " (" + this.dataType + ")";
            } else {
                return this.type;
            }
        }

        public getLabel():string {
            return this.label;
        }

        public setLabel(newLabel:string):void {
            this.label = newLabel;
        }

        public getScope():string {
            return this.scope;
        }

        public setScope(newScope:string):void {
            this.scope = newScope;
        }

        public getReadOnly():boolean {
            return this.readOnly;
        }

        public setReadOnly(newReadOnly:boolean):void {
            this.readOnly = newReadOnly;
        }

        public initElements():void {
            this.elements = [];
        }

        public getElements():TreeElement[] {
            return this.elements;
        }

        public hasElements():boolean {
            return this.elements && this.elements.length > 0;
        }

        public addElement(element:TreeElement):void {
            this.elements.push(element);
        }

        public acceptsElement(type:string):boolean {
            if (!this.metaData['acceptedElements']) {
                return false;
            }
            return this.metaData.acceptedElements.indexOf(type) >= 0;
        }

        public setAcceptedElements(acceptedElements:string[]):void {
            this.metaData['acceptedElements'] = acceptedElements;
        }

        public getAcceptedElements():string[] {
            return this.metaData['acceptedElements'];
        }

        public isDeletable():boolean {
            return true;
        }

        public clone():TreeElement{
            var result:TreeElement = new TreeElement();

            result.type = _.clone(this.type);
            result.dataType = _.clone(this.dataType);
            result.label = _.clone(this.label);
            result.scope = _.clone(this.scope);
            result.elements = [];
            _.forEach(this.elements, (element:TreeElement) => {
                result.elements.push(element.clone());
            });
            result.metaData = _.clone(this.metaData);

            return result;
        }

        public toJSONStringDepurated():string {
            if (!this.isValid()) {
                return "";
            }
            return this.toJSONString();
        }

        public toJSONString():string {
            var json:any = {};
            json.type = this.type;
            if (this.label && this.label.length > 0) {
                json.label = this.label;
            }
            if (this.scope && this.scope.length > 0) {
                json.scope = {};
                json.scope.$ref = "#/properties/" + this.scope;
            }
            if (this.readOnly != undefined) {
                json.readOnly = this.readOnly;
            }
            if (this.rule['effect'].length > 0) {
                json.rule = {
                    "effect": this.rule['effect']
                };
                if (this.rule['condition']['scope'].length > 0) {
                    json.rule.condition  = {
                        "scope": {
                            "$ref": "#/properties/" + this.rule['condition']['scope']
                        },
                        "expectedValue": this.rule['condition']['expectedValue']
                    };
                }
            }
            if (this.metaData['acceptedElements']) {
                json.elements = [];
                for (var i = 0; i < this.elements.length; i++) {
                    var subElement = this.elements[i].toJSONStringDepurated();
                    if (subElement) {
                        json.elements.push(JSON.parse(subElement));
                    }
                }
            }
            return JSON.stringify(json, (key, value) => {
                return value;
            }, 2);
        }

        resetErrors(){
            this.errors = [];
        }

        addError(error: string){
            if(!~this.errors.indexOf(error)){
                this.errors.push(error);
            }
        }

        getErrors(): string[]{
            return this.errors;
        }

        isValid(): boolean {
            if(this.errors.length <= 0){
                return true;
            }
            return false;
        }
    }
}