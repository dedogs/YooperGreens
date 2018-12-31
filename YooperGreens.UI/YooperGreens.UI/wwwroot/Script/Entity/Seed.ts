
namespace GScope {
    export namespace Entity {
        export class Seed {
            _seedId: string;
            _name: string;
            _description: string;
            _maximum: number;
            _minimum: number;
            _seedLink: string;
            _seedSupplierLink: string;
            _costs: Cost[];
            _growingInfo: GrowingInfo;

            SeedId(): string;
            SeedId(seedId?: string): string {
                if (!Utility.is(seedId).nul().ok()) {
                    this._seedId = seedId;
                }
                return seedId;
            }

            Name(): string;
            Name(name?: string): string {
                if (!Utility.is(name).nul().ok()) {
                    this._name = name;
                }
                return name;
            }

            Description(): string;
            Description(description?: string): string {
                if (!Utility.is(description).nul().ok()) {
                    this._description = description;
                }
                return description;
            }

            Maximum(): number;
            Maximum(maximum?: number): number {
                if (!Utility.is(maximum).nul().ok()) {
                    this._maximum = maximum;
                }
                return;
            }

            Minimum(): number;
            Minimum(minimum?: number): number {
                if (!Utility.is(minimum).nul().ok()) {
                    this._minimum = minimum;
                }
                return;
            }

            SeedLink(): string;
            SeedLink(seedLink?: string): string {
                if (!Utility.is(seedLink).nul().ok()) {
                    this._seedLink = seedLink;
                }
                return;
            }

            SeedSupplierLink(): string;
            SeedSupplierLink(seedSupplierLink?: string): string {
                if (!Utility.is(seedSupplierLink).nul().ok()) {
                    this._seedSupplierLink = seedSupplierLink;
                }
                return;
            }

            Costs(): Cost[];
            Costs(costs?: Cost[]);
            Costs(costs?: Cost[], cost?: Cost): Cost[] {
                if (!Utility.is(costs).nul().ok()) {
                    this._costs.concat(costs);
                } else if (!Utility.is(cost).nul().ok()) {
                    this._costs.push(cost);
                }
                return this._costs;
            }

            GrowingInfo(growingInfo?: GrowingInfo): GrowingInfo {
                if (growingInfo !== null) {
                    this._growingInfo = growingInfo;
                }
                return growingInfo;
            }
        }
    }
}
