import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Players from '../components/Players/Players'
import './index.css'
import { Suspense, useState } from 'react'
import type { IPlayer } from './types/playerType'



const playerFetch = async():Promise<IPlayer[]>=>{
  const res = await fetch('./data.json');
  const data=await res.json();
  return data;

}
function App() {
// console.log(playersPromise())
const [playersPromise]=useState(()=>playerFetch())
   const [coin,setCoin]= useState(500)


  return (
    <>

    <Nav coin={coin}></Nav>
    <Banner></Banner>
    <Suspense fallback='<p>loading...</p>'>
      <Players playersPromise={playersPromise}  coin={coin} setCoin={setCoin}></Players>
    </Suspense>

    </>
  )
}

export default App
