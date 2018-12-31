import { Seed } from "../../Entity/Seed";

export interface ISeedService {
    Count(): number;
    CreateSeed(seed: Seed): Seed;
    FindSeedById(seedId:string): Seed;
    FindSeedByIdInclude(seedId: string): Seed;
    GetAllSeeds(): Seed[];
    UpdateSeed(seed: Seed): Seed;
    DeleteSeed(seed: Seed): Seed;
}