import { Seed } from "../../Entity/Seed";

export interface ISeedRepository extends IRepository<Seed, string> {
    FindByIdInclude(seedId:string): Seed
}