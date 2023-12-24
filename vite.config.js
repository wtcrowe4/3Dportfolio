import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.glb', '**/*.gltf', '**/*.mp3', '**/*.ogg', '**/*.wav', '**/*.mp4', '**/*.webm', '**/*.json', '**/*.bin', '**/*.dae', '**/*.fbx', '**/*.babylon', '**/*.babylonmeshdata', '**/*.vrm', '**/*.hdr', '**/*.env', '**/*.dds', '**/*.tga', '**/*.svg', '**/*.hdr', '**/*.glb', '**/*.gltf', '**/*.mp3', '**/*.ogg', '**/*.wav', '**/*.mp4', '**/*.webm', '**/*.json', '**/*.bin', '**/*.dae', '**/*.fbx', '**/*.babylon', '**/*.babylonmeshdata', '**/*.vrm', '**/*.hdr', '**/*.env', '**/*.dds', '**/*.tga'],
})
