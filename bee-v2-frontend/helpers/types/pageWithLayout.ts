import MainLayout from './../../components/layouts/MainLayout';
import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

//import SecondaryLayout from '../layouts/secondarylayout'

export type PageWithMainLayoutType<Props = {}> = NextPage<Props> & {
	getLayout?: (page: ReactElement) => ReactNode
	layout?: ComponentType
}

// type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout }

type PageWithLayoutType = PageWithMainLayoutType  // | PageWithPostLayoutType

export default PageWithLayoutType