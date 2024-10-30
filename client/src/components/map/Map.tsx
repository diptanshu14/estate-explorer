import "./map.scss"
import "leaflet/dist/leaflet.css"
import { ListItem } from "../../lib/types"
import { MapContainer, TileLayer } from "react-leaflet"
import Pin from "../pin/Pin"
import { LatLngExpression } from "leaflet"

interface MapProps {
    items: ListItem[]
}

const Map: React.FC<MapProps> = ({ items }) => {
  const center: LatLngExpression = [52.4797, -1.90269]
  
  return (
    <MapContainer center={center} zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item=>(
        <Pin item={item} key={item.id}/>
      ))}
    </MapContainer>
  )
}

export default Map