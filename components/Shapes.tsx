import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import {  Stage } from "@react-three/drei";

const Model = dynamic(() => import("./Model"), {
  ssr: false,
});

export type ShapesProps = {
  colorMode: string
}

export default function Shapes({colorMode }: ShapesProps) {
  const ref = useRef<any>()

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        {/* @ts-ignore */}
        <Suspense fallback={null} r3f>
          <Stage controls={ref} preset="portrait" environment="studio" adjustCamera={false}>
            <Model colorMode={colorMode} />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}
