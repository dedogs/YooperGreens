namespace GScope {
    export namespace ApplicationService {
        export abstract class SeedPageService<T> implements ISeedPageService<T> {
            abstract Details(seedId: string): T;
            abstract Index(): T;
        }
    }
}