module app.detail {

    import MetaSchema = app.core.metaschema.MetaSchema;
    import TreeElement = app.core.model.TreeElement;
    import MetaSchemaService = app.core.metaschema.MetaSchemaService;

    export class DetailService {

        public currentElement : TreeElement;
        public schema: any;
        public uiSchema: any;

        static $inject = ["MetaSchemaService"];

        constructor(private metaschemaService: MetaSchemaService) {

        }

        setElement(element: TreeElement) : void {
            this.metaschemaService.getMetaSchema().then((metaschema:MetaSchema) => {
                this.currentElement = element;
                this.schema = metaschema.getDefinition(element.getType()).getSchema();
                this.uiSchema = metaschema.getDefinition(element.getType()).getUISchema();
            });
        }

        reset() : void {
            this.currentElement = null;
        }

    }

    angular.module('app.detail').service('DetailService', DetailService);
}