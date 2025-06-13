import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

/**
 * HeroCamera component for Three.js scenes.
 *
 * Functionality:
 * - Smoothly animates the camera position to [0, 0, 20] every frame.
 * - If not on mobile, smoothly rotates the group based on pointer movement.
 * - Wraps any children in a Three.js <group> for collective transformations.
 *
 * Props:
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - True if device is mobile; disables rotation.
 * @param {React.ReactNode} props.children - Elements to render inside the group.
 *
 * Line-by-line:
 * 1.  Define HeroCamera functional component with isMobile and children props.
 * 2.  Create a ref (group) to access the <group> object for rotation.
 * 3.  useFrame hook runs on every animation frame:
 * 4.    - Smoothly moves the camera position to [0, 0, 20] using easing.damp3.
 * 5.    - If not mobile, smoothly rotates the group based on pointer position using easing.dampE.
 * 6.  Return a <group> element with the ref and children inside.
 */
const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
