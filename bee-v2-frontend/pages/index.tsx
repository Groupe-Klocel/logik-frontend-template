import { AppHead, AppLayout, Welcome } from '@components'
import { NextPage } from 'next'
export interface IHomePageProps { }

export const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <>
      <AppHead title="Bee V2" />
      <AppLayout>
        <Welcome />
      </AppLayout>
    </>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage