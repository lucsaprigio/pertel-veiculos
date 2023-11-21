'use client'
import { IoLocationOutline } from 'react-icons/io5';

import { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

export function OlMap({ }) {

    useEffect(() => {
        const map = new Map({
            target: 'map', // ID do elemento HTML onde o mapa será renderizado
            layers: [
                new TileLayer({
                    source: new OSM() // Fonte do mapa (OpenStreetMap)
                })
            ],
            view: new View({
                center: fromLonLat([-40.655362857837666, -19.517389128836395]), // Coordenadas de centro do mapa [longitude, latitude]
                zoom: 17, // Nível de zoom
            }),
        });

        // Adicionar um marcador
        const marker = new Feature({
            geometry: new Point(fromLonLat([-40.655362857837666, -19.517389128836395])) //-19.517389128836395, -40.655362857837666
        });

        const markerStyle = new Style({
            image: new Icon({
                src: '/images/marker.png', // Caminho para o ícone do marcador
                anchor: [0.5, 1], // Ponto de ancoragem do ícone (centro inferior)
                height: 35,
                width: 35,
            })
        });

        marker.setStyle(markerStyle);

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [marker]
            })
        });

        map.addLayer(vectorLayer);

        return () => {
            map.setTarget(undefined);
        };
    }, []);

    return (
        <div className="flex flex-col gap-10 items-center justify-center w-full h-5/6 mt-32 px-32">
            <span className="flex flex-row gap-2 text-lg"><IoLocationOutline size={24} />Localização</span>
            <div id="map" tabIndex={1} style={{ width: '100%', height: '400px' }} />
            <span>Av. Silvio Avidos, 3025 - São Silvano, Colatina - ES, 29703-100</span>
        </div>
    )
}