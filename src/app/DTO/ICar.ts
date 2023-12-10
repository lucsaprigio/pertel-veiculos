export interface Car {
    id: string;
    description: string;
    price: number,
    km: number,
    source: string;
    exchange: string;
    year: string,
    brand: string;
    fuelType: string;
    doors: number;
    created_at: string;
    updated_at: string;
    token?: string;
    ImageCars: [
        {
            source: string;
        }
    ]
}
