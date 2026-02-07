
import { OrbitControls } from '@react-three/drei'
import { useHitTest } from '@react-three/xr'
import { useRef, useState } from 'react'
import { Mesh } from 'three'

export function ARScene() {
    const reticleRef = useRef<Mesh>(null)
    const [cubes, setCubes] = useState<Array<{ position: [number, number, number], id: number }>>([])

    useHitTest((hitMatrix) => {
        if (reticleRef.current) {
            hitMatrix.decompose(
                reticleRef.current.position,
                reticleRef.current.quaternion,
                reticleRef.current.scale
            )
            reticleRef.current.rotation.set(-Math.PI / 2, 0, 0)
        }
    })

    const placeCube = () => {
        if (reticleRef.current) {
            const position: [number, number, number] = [
                reticleRef.current.position.x,
                reticleRef.current.position.y,
                reticleRef.current.position.z
            ]
            setCubes([...cubes, { position, id: Date.now() }])
        }
    }

    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Reticle for placement */}
            <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
                <ringGeometry args={[0.1, 0.25, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Placed objects (Maintenance Markers) */}
            {cubes.map((cube) => (
                <mesh key={cube.id} position={cube.position} onClick={() => console.log('Marker clicked')}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            ))}

            {/* Interactive trigger */}
            <mesh onClick={placeCube} visible={false}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>

            <OrbitControls />
        </>
    )
}
