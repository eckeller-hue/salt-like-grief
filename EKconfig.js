var config = {
     style: 'mapbox://styles/mapbox/satellite-streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZWNrZWxsZXIiLCJhIjoiY21vZ2IwcW53MHNmODJxcHd3NmVybGMwbCJ9.Fsq_dYKIvkAEApWn30dwLw',
    showMarkers: false,
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'salt like grief',
    subtitle: 'visualizing salt labor in the West Indies from the 17th century to today',
    byline: 'By Emma Keller',
    footer: 'Sources: <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    
    chapters: [     
        
        {
            id: 'intro',
            alignment: 'full',
            hidden: false,
            title: '',
            image: './assets/intro.jpg',
            description: '',
            location: {
                center: [-76.99,18.1],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'middle-passage',
            alignment: 'right',
            hidden: false,
            title: '"And passage the passage across the sea"',
            image: './assets/middlepassage.jpg',
            description: 'Description placeholder',
            location: {
                center: [-30.0, 15.0],
                zoom: 2.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'startSlaveTradeAnimation',
            onChapterEnter: [
                {
                    layer: 'slave-trade-lines',
                    opacity: 0.7,
                    duration: 2000
                },
                {
                    layer: 'slave-trade-arrows',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'slave-trade-moving-arrows',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'uk-europe-lines',
                    opacity: 0.7,
                    duration: 2000
                },
                {
                    layer: 'uk-europe-arrows',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'uk-europe-moving-arrows',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'slave-trade-lines',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'slave-trade-arrows',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'slave-trade-moving-arrows',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'uk-europe-lines',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'uk-europe-arrows',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'uk-europe-moving-arrows',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'salt-work-interlude',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './assets/saltworkers.gif',
            description: 'Image description',
            location: {
                center: [-76.99,18.1],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'west-indies',
            alignment: 'left',
            hidden: false,
            title: '"that salt like grief"',
            image: './assets/westindiesberryman.jpg',
            description: 'Placeholder Text.',
            location: {
                center: [-76.99389, 18.11510],
                zoom: 6,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'salt-1960s-interlude',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './assets/saltworker1960s.gif',
            description: 'Image description',
            location: {
                center: [-76.99,18.1],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jamaica-salt-ponds',
            alignment: 'left',
            hidden: false,
            title: 'the salt ponds',
            image: './assets/landofsalt.jpeg',
            description: 'Placeholder Text.',
            location: {
                center: [-76.55021, 17.87127],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '' ,              
            onChapterEnter: [],
            onChapterExit: [
             ] 
        },

        {
            id: 'salt-today-interlude',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './assets/rakingsalt.gif',
            description: 'Image description',
            location: {
                center: [-76.99,18.1],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'modern-salt-production',
            alignment: 'right',
            hidden: false,
            title: 'modern-day production and tourism',
            image: './assets/saltpanscargill.jpg',
            description: 'Placeholder Text.',
            location: {
                center: [-68.25608, 12.06098],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'collapse-salt-production',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './assets/turksrakingsalt.gif',
            description: '',
            location: {
                center: [-75.07061, 21.68545],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

         {
            id: 'chronic-disease',
            alignment: 'left',
            hidden: false,
            title: 'sodium consumption and chronic disease',
            image: './assets/hypertension.jpg',
            description: 'Placeholder Text', 
            location: {
                center: [-75.07061, 21.68545],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'startCityBlink',
            onChapterEnter: [
                {
                    layer: 'highlighted-cities-layer',
                    opacity: 0.7,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'highlighted-cities-layer',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        
        {id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'a past that is not yet past',
            image: './assets/saltflicker.gif',
             description: 'Placeholder Text',
            location: {
                center: [-66.11150, 14.73047],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};

