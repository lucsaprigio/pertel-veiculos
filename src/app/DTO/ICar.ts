export interface Car {
    id: string;
    description: string;
    price: number,
    km: number,
    source: string;
    exchange: string;
    year: string,
    created_at: string;
    updated_at: string;
    ImageCars: [
        {
            source: string;
        }
    ]
}
