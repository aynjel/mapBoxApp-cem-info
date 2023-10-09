import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class MapSearchForm{

    private formBuilder: FormBuilder;
    private form: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }

    createForm(){
        return this.formBuilder.group({
            search: ['', Validators.required]
        });
    }

    getForm(){
        return this.form;
    }
}