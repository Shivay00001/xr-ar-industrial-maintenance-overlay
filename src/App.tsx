

import { Canvas } from '@react-three/fiber'
import { XR, ARButton, Controllers } from '@react-three/xr'
import { ARScene } from './components/ARScene'
import { Overlay } from './components/Overlay'

function App() {
    return (
        <>
            <ARButton />
            <Canvas>
                <XR>
                    <Controllers />
                    <ARScene />
                </XR>
            </Canvas>
            <Overlay />
        </>
    )
}

export default App
