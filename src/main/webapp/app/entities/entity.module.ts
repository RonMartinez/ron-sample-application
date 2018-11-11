import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RonSampleApplicationRegionModule } from './region/region.module';
import { RonSampleApplicationCountryModule } from './country/country.module';
import { RonSampleApplicationLocationModule } from './location/location.module';
import { RonSampleApplicationDepartmentModule } from './department/department.module';
import { RonSampleApplicationTaskModule } from './task/task.module';
import { RonSampleApplicationEmployeeModule } from './employee/employee.module';
import { RonSampleApplicationJobModule } from './job/job.module';
import { RonSampleApplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        RonSampleApplicationRegionModule,
        RonSampleApplicationCountryModule,
        RonSampleApplicationLocationModule,
        RonSampleApplicationDepartmentModule,
        RonSampleApplicationTaskModule,
        RonSampleApplicationEmployeeModule,
        RonSampleApplicationJobModule,
        RonSampleApplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RonSampleApplicationEntityModule {}
