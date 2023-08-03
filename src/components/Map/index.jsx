import { useEffect } from "react";

const { kakao } = window;

export default function Map({latitude, longitude, testSite, testSiteList}) {
    useEffect(() => {
        const container = document.getElementById('map'); 
        const options = { 
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
            
        };
        const map = new kakao.maps.Map(container, options);

        var moveLatLon = new kakao.maps.LatLng(latitude, longitude);
        map.panTo(moveLatLon); 
        
        if (testSite) {
            let markerPosition  = new kakao.maps.LatLng(latitude, longitude); 
    
            let marker = new kakao.maps.Marker({
                position: markerPosition,
                text: "qwe"
            });
    
            marker.setMap(map);
        }

    }, [latitude, longitude, testSite]);
    
    let realData = testSiteList[0];
    return (
        <div className="map-box">
            <div id="map" style={{
                width : '100%',
                height : "calc(100% - 100px)"
            }}></div>
            <p className="title">{realData && realData['자격증']}</p>
            <p>{realData && realData['시험장']}</p>
        </div>
    );
}