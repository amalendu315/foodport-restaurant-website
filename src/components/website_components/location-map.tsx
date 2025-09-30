"use client";

import { useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Skeleton } from '../ui/skeleton';

const LocationMap = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "200px" });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsLoaded(true);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative aspect-video w-full overflow-hidden rounded-lg border">
            {!isLoaded && <Skeleton className="h-full w-full" />}
            {isLoaded && (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.937966779427!2d86.23078867597116!3d22.76750302705139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3f360155555%3A0x8b5c401328994a5!2sGiri%20Namkeen!5e0!3m2!1sen!2sin!4v1759404284542!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FoodPort Restaurant Location"
                ></iframe>
            )}
        </div>
    );
}

export default LocationMap;
