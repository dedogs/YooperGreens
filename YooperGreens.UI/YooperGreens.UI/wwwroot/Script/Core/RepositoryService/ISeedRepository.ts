namespace GScope {
    export namespace RepositoryService {
        export interface ISeedRepository extends IRepository<Entity.Seed, string> {
            FindByIdInclude(seedId: string): JQueryXHR
        }
    }
}