﻿module GScope {
    export module Entity {
        export enum SeedTypes {
            MicroGreens,
            Garden
        }

        export enum Unit {
            oz,
            lbs
        }

        export class Cost {
            private _costId: string;
            private _unit: Unit;
            private _size: number;
            private _price: number;

            CostId(): string;
            CostId(costId?: string): string {
                if (Utility.is(costId).str().ok()) {
                    this._costId = costId;
                }

                return this._costId;
            }

            Size(): number;
            Size(size?: number): number {
                if (Utility.is(size).num().ok()) {
                    this._size = size;
                }

                return this._size;
            }

            Price(): number;
            Price(price?: number): number {
                if (Utility.is(price).num().ok()) {
                    this._price = price;
                }

                return this._price;
            }

            Unit(): Unit;
            Unit(unit?: Unit): Unit {
                if (unit !== null) {
                    this._unit = unit;
                }

                return this._unit;
            }

        }
    }
}
