import { useRef, useEffect } from 'react';

const InteractiveShape = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let rotation = { x: 0, y: 0 };
        let targetRotation = { x: 0, y: 0 };
        let nodes = [];
        let animationId;

        // 3D Icosahedron Vertices
        const t = 1.618;
        const baseNodes = [
            [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
            [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
            [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
        ];

        // Connections (Edges)
        const edges = [
            [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
            [1, 5], [1, 9], [1, 8], [1, 7],
            [2, 11], [2, 10], [2, 6], [2, 3], [2, 4],
            [3, 4], [3, 9], [3, 8], [3, 6],
            [4, 5], [4, 9], [4, 11],
            [5, 11],
            [6, 7], [6, 8], [6, 10],
            [7, 8], [7, 10],
            [8, 9],
            [9, 11],
            [10, 11]
        ];

        const resize = () => {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
        };

        const project = (p) => {
            // Simple perspective projection
            const scale = Math.min(width, height) / 4;
            const z = 5; // Camera distance
            const x2d = p[0] * scale + width / 2;
            const y2d = p[1] * scale + height / 2;
            return [x2d, y2d];
        };

        const rotateX = (p, angle) => {
            const y = p[1] * Math.cos(angle) - p[2] * Math.sin(angle);
            const z = p[1] * Math.sin(angle) + p[2] * Math.cos(angle);
            return [p[0], y, z];
        };

        const rotateY = (p, angle) => {
            const x = p[0] * Math.cos(angle) + p[2] * Math.sin(angle);
            const z = -p[0] * Math.sin(angle) + p[2] * Math.cos(angle);
            return [x, p[1], z];
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Smooth interpolation for rotation
            rotation.x += (targetRotation.x - rotation.x) * 0.1;
            rotation.y += (targetRotation.y - rotation.y) * 0.1;

            // Auto-rotation when idle
            rotation.y += 0.005;

            // Transform nodes
            const transformedNodes = baseNodes.map(node => {
                let p = rotateY(node, rotation.y);
                p = rotateX(p, rotation.x);
                return p;
            });

            // Draw Edges
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            edges.forEach(edge => {
                const p1 = project(transformedNodes[edge[0]]);
                const p2 = project(transformedNodes[edge[1]]);

                // Dynamic color based on position
                const depth = transformedNodes[edge[0]][2];
                const alpha = (depth + 2) / 4;

                // Gradient stroke
                const grad = ctx.createLinearGradient(p1[0], p1[1], p2[0], p2[1]);
                grad.addColorStop(0, `rgba(125, 207, 255, ${alpha})`); // Cyan
                grad.addColorStop(1, `rgba(187, 154, 247, ${alpha})`); // Purple

                ctx.strokeStyle = grad;
                ctx.beginPath();
                ctx.moveTo(p1[0], p1[1]);
                ctx.lineTo(p2[0], p2[1]);
                ctx.stroke();
            });

            // Draw Nodes (Joints)
            transformedNodes.forEach(node => {
                const p = project(node);
                const depth = node[2];
                const size = (depth + 2) * 2;

                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(p[0], p[1], Math.max(0, size), 0, Math.PI * 2);
                ctx.fill();

                // Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(125, 207, 255, 0.8)';
            });
            ctx.shadowBlur = 0; // Reset

            animationId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / width;
            const y = (e.clientY - rect.top) / height;

            targetRotation.y = (x - 0.5) * 4; // Map mouse X to Y rotation
            targetRotation.x = (y - 0.5) * 4; // Map mouse Y to X rotation
        };

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                cursor: 'grab',
                touchAction: 'none'
            }}
        />
    );
};

export default InteractiveShape;
