import { PageContentWrapper } from '@components';
import { Space } from 'antd';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { UsersList } from 'modules/Users/Elements/UsersList';
import { usersRoutes } from 'modules/Users/Static/usersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent';



export interface IUsersProps {

}

export const Users: FC<IUsersProps> = ({ }: IUsersProps) => {
	let { t } = useTranslation()



	// //	SEARCH DRAWER 
	// const [search, setSearch] = useState('');
	// const searchDrawerProps = {
	// 	context: search,
	// 	title:"Search",
	// 	placement:'right',
	// 	cancelButtonTitle:t('actions:cancel') ,
	// 	confirmButtonTitle:t('actions:search'),
	// 	content: <div>Search</div>,
	// 	onConfirm: (_:any, context:any) => setSearch(context),
	// 	onClose: () => setDrawerOptions({ isOpen: false })
	// }

	return (
		<>
			<HeaderContent title={t('common:users')} routes={usersRoutes} actions={
				<Space>
					{/* <DrawerButton icon={< SearchOutlined />} onClick={() => setDrawerOptions({ isOpen: true, drawerProps: searchDrawerProps })} title={t('actions:search')} /> */}
					<LinkButton title={t('actions:add2', { name: t('common:user') })} path='/add-user' type="primary" />
				</Space>
			} />
			<PageContentWrapper>
				<UsersList />
			</PageContentWrapper>
		</>
	);
}