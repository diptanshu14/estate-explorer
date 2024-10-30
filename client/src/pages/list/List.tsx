import Card from "../../components/card/Card"
import Filter from "../../components/filter/Filter"
import { listData } from "../../lib/dummyData"
import "./list.scss"

const List = () => {
  const data = listData
  return (
    <div className="listPage">
      <div className="listContainer">
        <Filter />
        {data.map(item => (
          //<Card key={item.id} item={item} />
          <Card />
        ))}
      </div>
    </div>
  )
}

export default List