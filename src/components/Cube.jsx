import React from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'

function Cube() {


    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#dc9dcd"]} />
                    <Text fontSize={3} color="#555">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube
