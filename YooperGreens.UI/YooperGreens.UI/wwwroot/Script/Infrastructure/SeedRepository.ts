import { ISeedRepository } from "../Core/RepositoryService/ISeedRepository";
import { Seed } from "../Entity/Seed";

export class SeedRepository implements ISeedRepository {
    FindByIdInclude(seedId: string): Seed {
        throw new Error("Method not implemented.");
    }
    FindById(seedId: string): Seed {
        $.ajax({});
        throw new Error("Method not implemented.");
    }
    Create(seed: Seed): Seed {
        throw new Error("Method not implemented.");
    }
    ReadAll(): Seed[] {
        throw new Error("Method not implemented.");
    }
    Update(item: Seed): Seed {
        throw new Error("Method not implemented.");
    }
    Delete(item: Seed): Seed {
        throw new Error("Method not implemented.");
    }
    Count(): number {
        throw new Error("Method not implemented.");
    }


}