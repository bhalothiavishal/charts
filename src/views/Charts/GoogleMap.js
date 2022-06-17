import React, { useEffect, useState, useRef } from 'react'

export default function GoogleMapReact({ options, onMount, className, onMountProps }) {
    const ref = useRef()
    const [map, setMap] = useState()

    useEffect(() => {
        const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
        if (!window.google) {
            const script = document.createElement(`script`)
            script.src = `https://maps.googleapis.com/maps/api/js?key=` + 'AIzaSyCnHXmtGqz7eOZg2rW9U20KDit1tRF6rhU'
            document.head.append(script)
            script.addEventListener(`load`, onLoad)
            return () => script.removeEventListener(`load`, onLoad)
        } else onLoad()
    }, [options])

    if (map && typeof onMount === `function`) onMount(map, onMountProps)

    return (
        <div
            style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
            {...{ ref, className }}
        />
    )
}
GoogleMapReact.defaultProps = {
    options: {
        center: { lat: 51.4835741, lng: -0.1252037 },
        zoom: 15,
    },
}