import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src="/placepal-images/Beach-1.jpeg"
                    className="object-cover w-full h-full"
                    alt="Beach home"
                />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl"> Property Name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/placepal-images/profPicture-1.jpeg"
                            alt="profile picture"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        lorem ipsum ahdbbakbdfbafd havjfvau adf lafbhbefurbf abajbdyfyhfef abahbdfbshfb
                    </p>


                </div>
                <div className="">
                    <ReservationSidebar />
                </div>
            </div>
        </main>
    )
}

export default PropertyDetailPage;