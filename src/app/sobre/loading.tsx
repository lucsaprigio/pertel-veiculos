export default function Loading() {
    return (
        <main className="flex flex-col w-ful animate-pulse">
            <section className="h-72 flex items-center justify-center flex-col position relative gap-2 object-cover py-10 w-full px-10 bg-gray-50">
                <div className="h-8 w-72 flex items-center justify-center font-inter rounded-2xl bg-gray-100">

                </div>
                <div className="h-6 w-96 flex items-center justify-center font-inter rounded-2xl bg-gray-100">

                </div>
            </section>
            <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 my-32 bg-gray-50 shadow-sm">
                <div className="flex flex-col items-center justify-center p-20 gap-10">
                    <div className="flex flex-col items-center h-6 w-1/3 justify-center rounded-2xl bg-gray-100"></div>
                    <div className="flex flex-col items-center h-6 w-full justify-center rounded-2xl bg-gray-100"></div>
                    <div className="flex flex-col items-center h-6 w-full justify-center rounded-2xl bg-gray-100"></div>
                    <div className="flex flex-col items-center h-6 w-full justify-center rounded-2xl bg-gray-100"></div>
                </div>
                <div className="flex flex-col items-center h-full w-full justify-center rounded-2xl px-36">
                    <div className="flex flex-col items-center h-full w-full justify-center rounded-2xl bg-gray-100"></div>
                </div>
            </section>
        </main>
    )
}