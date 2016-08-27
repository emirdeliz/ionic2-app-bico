export class RatingModel {
    private _notePrice: number;
    private _noteService: number;
    private _noteScore: number;
    private _description: string;

    constructor (
        _notePrice: number,
        _noteService: number,
        _noteScore: number,
        _description: string
    ) {
        this._notePrice = _notePrice;
        this._noteService = _noteService;
        this._noteScore = _noteScore;
        this._description = _description;
    }

    get notePrice(): number {
        return this._notePrice;
    }

    set notePrice(_notePrice: number) {
        this._notePrice = _notePrice;
    }

    get noteService(): number {
        return this._noteService;
    }

    set noteService(_noteService: number) {
        this._noteService = _noteService;
    }

    get noteScore(): number {
        return this._noteScore;
    }

    set noteScore(_noteScore: number) {
        this._noteScore = _noteScore;
    }

    get description(): string {
        return this._description;
    }

    set description(_description: string) {
        this._description = _description;
    }
}
