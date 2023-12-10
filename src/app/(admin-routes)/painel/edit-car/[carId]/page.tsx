import UpdateCarForm from "@/app/(admin-routes)/Components/UpdateCarForm";
import { Car } from "@/app/DTO/ICar";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";


async function getCar(id: string): Promise<Car> {
    try {
        const response = await fetch(`${process.env.NEXT_API_NODE}/car/${id}`, { cache: 'no-cache' });

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

export default async function UpdateCarPage({ params }: { params: { carId: string } }) {
    const car = await getCar(params.carId);
    const session = await getServerSession(nextAuthOptions);

    return (
        <main>
            <UpdateCarForm
                id={car.id}
                token={session.user.token}
                description={car.description}
                price={car.price.toString()}
                doors={car.doors.toString()}
                exchange={car.exchange}
                fuelType={car.fuelType}
                km={car.km.toString()}
                imageCars={car.ImageCars}
                year={car.year}
            />
        </main>
    )
}