import React from 'react'
import Cube from './Cube'
import { OrbitControls, } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Who() {
  return (
    <main className='who-container component-container'>
      <section className='who'>

        <article className='who__left'>
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
        </article>

        <article className='who__right'>
          <h1 className='who__right__h1'>Think. Make. Solve.</h1>
          <p className='who__right__p'>-- what we do</p>
          <p className='who__right__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam quae a laboriosam error. Atque, non laborum?</p>
          <button className='who__right__btn'>learn more</button>
        </article>

      </section>
    </main>
  )
}

export default Who
