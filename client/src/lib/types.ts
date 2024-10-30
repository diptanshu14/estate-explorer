export type QueryState = {
  type: string
  location: string
  minPrice: number
  maxPrice: number
}

export type ListItem = {
    id: number 
    title: string
    img: string
    bedroom: number
    bathroom: number
    price: number
    address: string
    latitude: number
    longitude: number
}