export interface Cars {
    count: number;
    cars: [
        {
            id: string;
            description: string;
            price: number;
            km: number;
            year: string;
            source: string;
            exchange: string;
            updated_at: string;
            created_at: string;
        }
    ]
}