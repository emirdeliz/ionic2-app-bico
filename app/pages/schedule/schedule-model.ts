import {WorkModel} from '../work/work-model';

export class ScheduleModel {
    private _offeredJobs: WorkModel[];
    private _workRequested: WorkModel[];

    constructor (
        _offeredJobs: WorkModel[],
        _workRequested: WorkModel[]
    ) {
        this._offeredJobs = _offeredJobs;
        this._workRequested = _workRequested;
    }

    get offeredJobs(): WorkModel[] {
        return this._offeredJobs;
    }

    set offeredJobs(_offeredJobs: WorkModel[]) {
        this._offeredJobs = _offeredJobs;
    }

    get workRequested(): WorkModel[] {
        return this._workRequested;
    }
    
    set workRequested(_workRequested: WorkModel[]) {
        this._workRequested = _workRequested;
    }
}
