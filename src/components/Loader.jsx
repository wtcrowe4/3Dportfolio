import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html center>
        <div className="flex justify-center items-center">
            <div className="w-20 h-20 border-2 border-opacity-20 border-blue-900 border-t-blue-900 rounded-full animate-spin"></div>
        </div>
    </Html>
  )
}

export default Loader