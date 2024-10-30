import Card from "../../components/card/Card"
import Filter from "../../components/filter/Filter"
import { listData } from "../../lib/dummyData"
import { ListItem } from "../../lib/types"
import "./list.scss"

const List = () => {
  const data: ListItem[] = listData
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item: ListItem) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default List