import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const mousePos = { x: 0, y: 0 };

function FloatingMesh({
  geometry,
  position,
  color,
  speed = 1,
  scale = 1,
  wireframe = false,
}: {
  geometry: "icosahedron" | "torusknot" | "octahedron";
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
  wireframe?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.32 * speed;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.0}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
        {geometry === "torusknot" && <torusKnotGeometry args={[0.7, 0.25, 120, 16]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {wireframe ? (
          <meshBasicMaterial color={color} wireframe opacity={0.12} transparent />
        ) : (
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.7}
          />
        )}
      </mesh>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mousePos.x * 0.18 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (mousePos.y * 0.1 - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Olive/forest colored meshes — visible on cream */}
      <FloatingMesh geometry="torusknot" position={[3.2, -0.5, -1]} color="#4A5E3A" speed={0.9} scale={1.1} />
      <FloatingMesh geometry="icosahedron" position={[-3.5, 1.2, -0.8]} color="#2E3B25" speed={0.65} scale={1.0} />
      <FloatingMesh geometry="octahedron" position={[1, 2.8, -2]} color="#7A9063" speed={0.5} scale={0.85} />

      {/* Wireframe accents */}
      <FloatingMesh geometry="icosahedron" position={[-1.5, -1.8, -2]} color="#4A5E3A" speed={0.4} scale={1.4} wireframe />
      <FloatingMesh geometry="octahedron" position={[4, 2.5, -3.5]} color="#2E3B25" speed={0.3} scale={1.2} wireframe />

      {/* Small accents */}
      <FloatingMesh geometry="octahedron" position={[-2, -0.8, -0.5]} color="#7A9063" speed={1.3} scale={0.35} />
      <FloatingMesh geometry="icosahedron" position={[2.2, 1.5, -0.3]} color="#4A5E3A" speed={0.8} scale={0.3} />

      <ambientLight intensity={0.8} color="#F2EDE4" />
      <directionalLight position={[5, 5, 5]} color="#ffffff" intensity={1.2} />
      <pointLight position={[-4, 3, 3]} color="#4A5E3A" intensity={2} />
      <pointLight position={[4, -3, 3]} color="#7A9063" intensity={1.5} />
    </group>
  );
}

export const HeroScene = () => {
  const hasWebGL = typeof window !== "undefined" && !!window.WebGLRenderingContext;
  if (!hasWebGL) return null;

  return (
    <div className="absolute inset-0 -z-10" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
          <EffectComposer>
            <Bloom intensity={0.4} luminanceThreshold={0.6} luminanceSmoothing={0.9} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};
