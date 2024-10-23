import { Canvas, useLoader } from '@react-three/fiber';
import { AccumulativeShadows, Center, OrbitControls, RandomizedLight } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import "./about.scss";

const RotatingGlobe = () => {
  const texture = useLoader(TextureLoader, 'public/24.jpg'); // Замените на путь к вашему изображению
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
    </Center>
  );
}



const About = () => {

  return (
    <div className='about'>
      <video width="100vw" className='about__video' autoPlay muted loop>
        <source src="public/video/2792967-uhd_2160_1440_25fps.mp4" type="" />
      </video>
      <div className="container">
        <div className="about__box">
          <p className="about__txt">About Me</p>
          <h2 className="about__title">I'm Wamwod</h2>
          <p className="about__text"> <span>Year:</span> 2007</p>
          <p className="about__text"> <span>Region:</span> Tashkent</p>
          <p className="about__text"> <span>Job:</span> Web-Developer</p>
          <p className="about__text"> <span>Study:</span> Proweb</p>
          <p className="about__text"> <span>Languages:</span> Uzbek, English</p>
          <p className="about__text"> <span>Hobbies:</span> Coding, Learning new technologies, Gaming</p>
          <p className="about__text"> <span>Experience:</span> Completed a 10 month web development course in <span className='about__span'>"Proweb"</span></p>
        </div>


        <div className='about__img'>
          <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }} >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <group position={[0, -0.65, 0]}>
              <RotatingGlobe />
              <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
                <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
              </AccumulativeShadows>
            </group>
            <OrbitControls
              autoRotate
              autoRotateSpeed={4}
              enablePan
              enableZoom
              minDistance={2.5}
              maxDistance={3}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Infinity}
              maxAzimuthAngle={Infinity}
            />
          </Canvas>
        </div>


        {/* <img className='about__img' src="20.jpg" alt="" /> */}
      </div>
    </div>
  )
}

// intensity={0.5}

export default About