module app{
    class AppController {
        constructor (){
        };
        public schema = {
              "type": "object",
              "properties": {
                "a": {
                  "type": "string"
                },
                "b": {
                  "type": "string"
                }
              }
        };
        // TODO: temporal uischema
        public uischema = {
          "type": "VerticalLayout",
          "elements": [
            {
              "type": "Control",
              "label": "A",
              "scope": {
                "$ref": "#/properties/a"
              },
              "readOnly": false
            },
            {
              "type": "Control",
              "label": "B",
              "scope": {
                "$ref": "#/properties/b"
              },
              "readOnly": false
            }
          ]
        };
    }
    angular.module('app').controller('AppController', AppController);
}