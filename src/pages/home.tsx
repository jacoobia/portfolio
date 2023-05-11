import { FC, useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Link } from 'react-router-dom';

interface Action {
    name: string;
    route: string;
}

const actions: Action[] = [
    { name: 'Player Statistics', route: '/stats' },
    { name: 'Quest List', route: '/quests' },
    { name: 'Ability Tree', route: '/abilities' },
    { name: 'Contact Me', route: '/contact' }
];

const Home: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const engine = Matter.Engine.create();
            const { world } = engine;

            const render = Matter.Render.create({
                canvas: canvasRef.current,
                engine,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    background: '#1e1e1e',
                    wireframes: false
                }
            });

            const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
            const boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
            const boxC = Matter.Bodies.rectangle(500, 100, 80, 80);
            const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, {
                isStatic: true
            });

            Matter.World.add(world, [boxA, boxB, boxC, ground]);
            Matter.Engine.run(engine);
            Matter.Render.run(render);

            // Add mouse constraint for dragging objects
            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

            Matter.World.add(world, mouseConstraint);

            // Keep the mouse in sync with rendering
            render.mouse = mouse;

            return () => {
                Matter.Render.stop(render);
                Matter.Engine.clear(engine);
                Matter.World.clear(world, false);
            };
        }
    }, []);

    return (
        <>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
            <div className='h-screen flex items-center justify-center' style={{ pointerEvents: 'none' }}>
                <div className='text-center space-y-8' style={{ pointerEvents: 'auto' }}>
                    {actions.map((action) => (
                        <Link key={action.route} to={action.route} className='block text-5xl hover:text-gray-300'>
                            {action.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
