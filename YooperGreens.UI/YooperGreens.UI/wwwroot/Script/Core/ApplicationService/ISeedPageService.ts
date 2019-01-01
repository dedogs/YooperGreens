namespace GScope {
    export namespace ApplicationService {
        export interface ISeedPageService<T> {
            Details(seedId: string): T;
            Index(): T;
        }
    }
}