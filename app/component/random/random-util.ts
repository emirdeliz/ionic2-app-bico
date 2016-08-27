export class RandomUtil {
    public static nextInt(min?: number, max?: number): number {
        return Math.floor(Math.random() * (max? max: 99999999) + (min? min: 1));
    }

    public static pick(collection:any[]): any {
        return collection[this.nextInt(0, collection.length - 1)];
    }
}
