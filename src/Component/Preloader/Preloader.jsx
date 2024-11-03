import React, { useEffect, useRef } from 'react';
// import React from 'react';

export default function Preloader() {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorInner = cursorInnerRef.current;
        const links = document.querySelectorAll('a');

        const handleMouseMove = (e) => {
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            cursorInner.style.left = `${e.clientX}px`;
            cursorInner.style.top = `${e.clientY}px`;
        };

        const handleMouseDown = () => {
            cursor.classList.add('click');
            cursorInner.classList.add('cursorinnerhover');
        };

        const handleMouseUp = () => {
            cursor.classList.remove('click');
            cursorInner.classList.remove('cursorinnerhover');
        };

        const handleMouseOver = () => {
            cursor.classList.add('hover');
        };

        const handleMouseLeave = () => {
            cursor.classList.remove('hover');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        links.forEach(link => {
            link.addEventListener('mouseover', handleMouseOver);
            link.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);

            links.forEach(link => {
                link.removeEventListener('mouseover', handleMouseOver);
                link.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* preloader starts */}
            <div id="preloader">
                <div id="loader"></div>
            </div>

            <div className="procus-cursor" ref={cursorRef}></div>
            <div className="procus-cursor2" ref={cursorInnerRef}></div>
        </>
    )
}