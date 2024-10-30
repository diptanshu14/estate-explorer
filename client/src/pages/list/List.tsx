import { listData } from "../../lib/dummyData"
import "./list.scss"
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map"
import { ListItem } from "../../lib/types"

function ListPage() {
  const data: ListItem[] = listData

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter />
        {data.map((item: ListItem) => (
            <Card key={item.id} item={item} />
          ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={data} />
    </div>
  </div>
}

export default ListPage