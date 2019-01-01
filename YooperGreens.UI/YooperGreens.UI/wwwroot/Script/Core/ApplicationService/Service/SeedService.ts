
namespace GScope {
    export namespace ApplicationService {
        export class SeedService implements ISeedService {
            private readonly _repository: RepositoryService.ISeedRepository;

            constructor(repository: RepositoryService.ISeedRepository) {
                this._repository = repository;
            }

            Count(): number {
                return 0;
            }
            CreateSeed(seed: Entity.Seed): Entity.Seed {
                return new Entity.Seed();
            }
            DeleteSeed(seed: Entity.Seed): Entity.Seed {
                return new Entity.Seed();
            }
            FindSeedById(seedId: string): Entity.Seed {
                return new Entity.Seed();
            }
            FindSeedByIdInclude(seedId: string): JQuery.jqXHR<Entity.Seed> {
                return this._repository.FindByIdInclude(seedId);
            }
            GetAllSeeds(): Entity.Seed[] {
                return [];
            }
            UpdateSeed(seed: Entity.Seed): Entity.Seed {
                return new Entity.Seed();
            }
        }
    }
}