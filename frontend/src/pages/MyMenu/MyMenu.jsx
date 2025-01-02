import  { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import VegType from '../../components/VegType/VegType'

const MyMenuPage = () => {

  const [category,setCategory] = useState("All")
  const [Ftype,setFType] = useState("All")

  return (
    <main>
      <ExploreMenu setCategory={setCategory} category={category} />
      <VegType setFType={setFType} Ftype={Ftype}/>
      <FoodDisplay category={category} Ftype={Ftype}/>
    </main>
  )
}

export default MyMenuPage
