import { ISeedService } from "../ISeedService";
import { Seed } from "../../../Entity/Seed";

export class SeedService implements ISeedService {
    Count(): number {
        return 0;
    }
    CreateSeed(seed: Seed): Seed {
        return new Seed();
    }
    DeleteSeed(seed: Seed): Seed {
        return new Seed();
    }
    FindSeedById(seedId: string): Seed {
        return new Seed();
    }
    FindSeedByIdInclude(seedId: string): Seed {
        return new Seed();
    }
    GetAllSeeds(): Seed[] {
        return [];
    }
    UpdateSeed(seed: Seed): Seed {
        return new Seed();
    }
}