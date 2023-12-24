import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Golfball from '../models/Golfball'

const Home = () => {
  return (
    <section className="w-full h-screen relative">
        {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            Home
        </div> */}
        <Canvas
            className="w-full h-screen bg-slate-500 relative"
            camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader/>}>
                    {/* <directionLight /> */}
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <Golfball position={[0, 0, 0]} rotation={[0.1, 0.1, 0]}/>
                </Suspense>
            
        </Canvas>
    </section>
  )
}

export default Home
