module app.dialogs.dataschemaimport {
    import AbstractWizardStep = app.dialogs.AbstractWizardStep;
    import IPromise = angular.IPromise;

    export class ChooseUploadStepController extends AbstractWizardStep {

        hasNavigation():boolean {
            return false;
        }


        getTitle():string {
            return "Menu";
        }

        getTemplate():string {
            return "app/src/components/dialogs/dataschemaImport/chooseUploadStep/chooseUploadStep.html";
        }

        shallSubmit():boolean {
            return false;
        }

        submit():IPromise<any> {
            return undefined;
        }

    }
}