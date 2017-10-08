import { Injectable } from '@angular/core';
import { UserTemplate } from './usertemplate'
import {USERTEMPLATES} from './mock-user-templates'

@Injectable()
export class UserTemplateService {

    getUserTemplates(): Promise<UserTemplate[]> {

        return Promise.resolve(USERTEMPLATES);

    } 

    getUserTemplatesSlowly(): Promise<UserTemplate[]> {
        //return Promise.resolve(USERTEMPLATES);
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getUserTemplates()), 2000);
          });
    }

    getUserTemplate(id: number): Promise<UserTemplate> {
        
                return this.getUserTemplates()
                .then(valueTemplates => valueTemplates.find(valueTemplate => valueTemplate.id === id));
        
            } 

}