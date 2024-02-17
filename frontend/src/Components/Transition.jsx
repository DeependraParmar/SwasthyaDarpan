import React from 'react'
import { motion } from 'framer-motion'

const TransitionWrapper = ({ children, direction }) => {
    return (
        <>
            {
                direction === 'up' ? 
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {children}
                    </motion.div>

                    :

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {children}
                    </motion.div>
            }
        </>
    )
}

export default TransitionWrapper