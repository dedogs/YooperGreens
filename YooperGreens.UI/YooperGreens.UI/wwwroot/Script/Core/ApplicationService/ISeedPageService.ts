module GScope {
    export module ApplicationService {
        export interface ISeedPageService<T> {
            Details(seedId: string): T;
            Index(): T;
        }
    }
}