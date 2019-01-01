module GScope {
    export module RepositoryService {
        export interface ISeedRepository extends IRepository<Entity.Seed, string> {
            FindByIdInclude(seedId: string): Entity.Seed;
        }
    }
}