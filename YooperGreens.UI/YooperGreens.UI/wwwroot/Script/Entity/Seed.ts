import { Cost } from "./Cost";
import { Utility } from "../Application/Utility";
import { GrowingInfo } from "./GrowingInfo";

export class Seed {
    _seedId: string;
    _name: string;
    _description: string;
    _maximum: number;
    _minimum: number;
    _seedLink: string;
    _seedSupplierLink: string;
    _costs: Cost[];
    _growingInfo:GrowingInfo;

    SeedId(): string;
    SeedId(seedId?: string): string {
        if (seedId !== null) {
            this._seedId = seedId;
        }
        return seedId;
    }

    Name(): string;
    Name(name?: string): string {
        if (name !== null) {
            this._name = name;
        }
        return name;
    }

    Description(): string;
    Description(description?: string): string {
        if (description !== null) {
            this._description = description;
        }
        return description;
    }

    Maximum(): number;
    Maximum(maximum?: number): number {
        if (maximum !== null) {
            this._maximum = maximum;
        }
        return;
    }

    Minimum(): number;
    Minimum(minimum?: number): number {
        if (minimum !== null) {
            this._minimum = minimum;
        }
        return;
    }

    SeedLink(): string;
    SeedLink(seedLink?: string): string {
        if (seedLink !== null) {
            this._seedLink = seedLink;
        }
        return;
    }

    SeedSupplierLink(): string;
    SeedSupplierLink(seedSupplierLink?: string): string {
        if (seedSupplierLink !== null) {
            this._seedSupplierLink = seedSupplierLink;
        }
        return;
    }

    Costs(): Cost[];
    Costs(costs: Cost);
    Costs(costs?: Cost[]): Cost[] {
        if (costs !== null) {
            if (Utility.is(costs).arry().ok()) {
                this._costs.concat(costs);
            } else {
                this._costs.push(costs);
            }
        }
        return;
    }

    GrowingInfo(growingInfo?: GrowingInfo):GrowingInfo {
        if (growingInfo !== null) {
            this._growingInfo = growingInfo;
        }
        return growingInfo;
    }
} 