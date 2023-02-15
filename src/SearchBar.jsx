function App() {
    return (
        <div className="flex justify-center container mx-auto  box-border mt-5">
            <div className="flex justify-start w-3/4">
                <div className=" input-group relative flex w-11/12 mb-4 justify-center">
                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-[#F4F4F4] bg-clip-padding  rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" placeholder="Keyboard" aria-label="Search" aria-describedby="button-addon2" />
                    <svg
                        className="absolute right-6 mt-2.5 z-10 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18" height="18" viewBox="0 0 18 18">
                        <path
                            fill="none"
                            stroke="#A445ED"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default App;