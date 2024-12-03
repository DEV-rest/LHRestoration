/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 vanff.gltf --transform 
Files: vanff.gltf [896.51KB] > /Users/bishaladhikari/Documents/blenderimg/vanf/vanff-transformed.glb [97.82KB] (89%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/vanff-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.textured} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_2.geometry} material={materials.firstcolor} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/vanff-transformed.glb')