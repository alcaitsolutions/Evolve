import { ObservableProperty } from "../observable-property-decorator";
import { Observable } from 'data/observable';


export class BenefitsViewModel extends Observable {

    locations: { imageSrc: string }[] = [
        { imageSrc: "https://placem.at/places?random=33&w=500&txt=0" },
        { imageSrc: "https://placem.at/places?random=33&w=500&txt=0" }       
    ];
    
    constructor() {
        super();
    }
}