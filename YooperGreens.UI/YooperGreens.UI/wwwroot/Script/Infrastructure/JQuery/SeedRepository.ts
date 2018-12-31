namespace GScope {
    export namespace Infrastructure {
        export class SeedRepository implements RepositoryService.ISeedRepository {

            FindByIdInclude(seedId: string): JQueryXHR {
                return $.ajax({
                    url: "/Seeds/Details",
                    data: { seedId: seedId },
                    dataType: "html",
                    type: "GET"
                });
            }
            FindById(seedId: string): Entity.Seed {
                throw new Error("Method not implemented.");
            }
            Create(seed: Entity.Seed): Entity.Seed {
                throw new Error("Method not implemented.");
            }
            ReadAll(): Entity.Seed[] {
                throw new Error("Method not implemented.");
            }
            Update(item: Entity.Seed): Entity.Seed {
                throw new Error("Method not implemented.");
            }
            Delete(item: Entity.Seed): Entity.Seed {
                throw new Error("Method not implemented.");
            }
            Count(): number {
                throw new Error("Method not implemented.");
            }
        }
    }
}