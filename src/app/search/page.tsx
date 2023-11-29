import { SearchVehicles } from "@/app/Components/SearchVehicles";
import { Footer } from "../Components/Footer";

export default async function Search() {

    return (
        <>
            <div className="flex flex-col items-start justify-start px-2 md:px-10 w-full scroll-smooth focus:scroll-auto">
                <SearchVehicles />
                <div className="lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 sm:flex sm:flex-col w-full gap-8 py-10 border-b-top-sm border-opacity-30 border-red-700">
                </div>
            </div>
            <Footer />
        </>
    )
}