function App() {
    return (
        <section className='container mx-auto box-border font-sans'>
            <div className='w-3/4 flex mx-auto mt-5 flex-row'>
                <h2 className='italic'>noun</h2>
                <hr className='w-10/12 ml-3  mx-auto mt-3' />
            </div>

            <div className=' mx-auto w-3/4'>
                <ul className='' >
                    <li className='text-[gray] mt-10 '>Meaning</li>
                    <ul className='list-disc mt-5 ml-8'>
                        <li>(etc) a set of keys used to operate a typewriter, computer etc.</li>
                        <li> A component of many instruments including the piano, organ, and hapscichord of usually black and white keys that cause different tones to be porduced when struck.</li>
                        <li> A device with keys of a musical keyboard, usded to control electronic sound producing devices which may be built into or separate from the keyboard devixe.</li>
                    </ul>
                </ul>
                <div className='flex flex-row mt-8'>
                    <h3 className='text-[gray]'>Synonym</h3>
                    <p className='ml-4 text-purple font-semibold'>electronic keyboard</p>
                </div>
            </div>
        </section>
    )
}

export default App;