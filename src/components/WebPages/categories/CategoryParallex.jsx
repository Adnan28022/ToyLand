import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CategoryParallax = ({ text, speed }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [speed * -10, speed * 10]);

    return (
        <div ref={targetRef} className="py-8 overflow-hidden bg-white">
            <motion.div style={{ x }} className="flex gap-8 whitespace-nowrap">
                {[...Array(8)].map((_, i) => (
                    <span key={i} className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-gray-50 stroke-light italic">
                        {text}
                    </span>
                ))}
            </motion.div>

            <style jsx>{`
                .stroke-light {
                    -webkit-text-stroke: 1px #f1f5f9;
                }
            `}</style>
        </div>
    );
};

export default CategoryParallax;