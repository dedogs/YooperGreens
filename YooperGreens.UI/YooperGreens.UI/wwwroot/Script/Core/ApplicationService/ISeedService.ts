namespace GScope {
    export namespace ApplicationService {
        export interface ISeedService {
            Count(): number;
            CreateSeed(seed: Entity.Seed): Entity.Seed;
            FindSeedById(seedId: string): Entity.Seed;
            FindSeedByIdInclude(seedId: string): Entity.Seed;
            GetAllSeeds(): Entity.Seed[];
            UpdateSeed(seed: Entity.Seed): Entity.Seed;
            DeleteSeed(seed: Entity.Seed): Entity.Seed;
        }
    }
}