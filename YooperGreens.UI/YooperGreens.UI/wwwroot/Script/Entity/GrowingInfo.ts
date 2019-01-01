module GScope {
    export module Entity {
        export class GrowingInfo {
            _culture: string;
            _watering: string;
            _temperature: string;
            _lighting: string;
            _fertilizer: string;
            _diseases: string;
            _harvest: string;
            _storgage: string;

            Culture(): string;
            Culture(culture?: string): string {
                if (Utility.is(culture).str().ok()) {
                    this._culture = culture;
                }

                return this._culture;
            }
            Watering(): string;
            Watering(watering?: string): string {
                if (Utility.is(watering).str().ok()) {
                    this._watering = watering;
                }

                return this._watering;
            }
            Temperature(): string;
            Temperature(temperature?: string): string {
                if (Utility.is(temperature).str().ok()) {
                    this._temperature = temperature;
                }

                return this._temperature;
            }
            Lighting(): string;
            Lighting(lighting?: string): string {
                if (Utility.is(lighting).str().ok()) {
                    this._lighting = lighting;
                }

                return this._lighting;
            }
            Fertilizer(): string;
            Fertilizer(fertilizer?: string): string {
                if (Utility.is(fertilizer).str().ok()) {
                    this._fertilizer = fertilizer;
                }

                return this._fertilizer;
            }
            Diseases(): string;
            Diseases(diseases?: string): string {
                if (Utility.is(diseases).str().ok()) {
                    this._diseases = diseases;
                }

                return this._diseases;
            }
            Harvest(): string;
            Harvest(harvest?: string): string {
                if (Utility.is(harvest).str().ok()) {
                    this._harvest = harvest;
                }

                return this._harvest;
            }
            Storgage(): string;
            Storgage(storgage?: string): string {
                if (Utility.is(storgage).str().ok()) {
                    this._storgage = storgage;
                }

                return this._storgage;
            }
        }
    }
}
