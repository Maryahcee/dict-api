import iconPlay from './assets/images/icon-play.svg'

function App() {
    return (
        <div className='container mx-auto box-border flex mt-10'>
            <div className='w-3/4 inline-flex flex-row mx-auto relative'>
                <div className='w-1/2'>
                    <h1 className='font-bold text-xl'>Keyboard</h1>
                    <p className='text-purple'>/ki:bo:d/</p>
                </div>
                <div className='flex justify-end container w-5/12'>
                    <img className='w-10 h-10 mt-1.5 flex hover:fill-purple' src={iconPlay} alt="" />
                </div>
            </div>
        </div>
    )
}

export default App;