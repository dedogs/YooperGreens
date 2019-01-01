module GScope {
    export module ApplicationService {
        export abstract class SeedPageService<T> implements ISeedPageService<T> {
            abstract Details(seedId: string): T;
            abstract Index(): T;
        }
    }
}