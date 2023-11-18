export default function Loading() {
    return (
        <div className=" position relative animate-pulse grid grid-cols-2 gap-2 w-full h-screen px-10 rounded-lg bg-gray-100 shadow-lg">
            <div className="mb-14 flex flex-col gap-10 items-start justify-center rounded-md">
                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <div className="mb-2 justify-center w-full h-12 bg-gray-200 rounded-lg"></div>
                <div className="mb-2 justify-center w-80 h-12 bg-gray-200 rounded-lg"></div>
                <div className="mb-2 justify-center w-full h-7 bg-gray-200 rounded-lg"></div>
                <div className="mb-2 justify-center w-80 h-7 bg-gray-200 rounded-lg"></div>
                <div className="mb-2 justify-center w-64 h-7 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    )
}