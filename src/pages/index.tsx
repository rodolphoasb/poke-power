import type { NextPage } from 'next'
import { trpc } from 'utils/trpc';


const Home: NextPage = () => {

  const { data } = trpc.useQuery(['hello', { text: 'client' }]);


  if (data) {
    return <div>{data.greeting}</div>
  }

  return (
    <div>
      <h1>Olá</h1>
    </div>
  )
}

export default Home
