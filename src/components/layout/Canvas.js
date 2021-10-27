import React, { useEffect, useRef } from 'react';
import FlowFieldEffect from './FlowFieldEffect';

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');
    const flowField = () => {
      new FlowFieldEffect(
        ctx,
        canvasRef.current.width,
        canvasRef.current.height
      );
    };
    flowField();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <div></div>
    </canvas>
  );
};

export default Canvas;
