import { useAuth } from 'helpers/context/AuthContext';
import { OnlyChildrenType } from 'helpers/types/types';
import { useRouter } from 'next/router';
import { ScreenSpin } from '../ScreenSpin/ScreenSpin';
export const ProtectRoute: any | null = ({children }: OnlyChildrenType) => {
	const router = useRouter()
	const { isAuthenticated, loading } = useAuth();
	if (loading || (!isAuthenticated && router.pathname !== '/login')) {
		router.push('/login')
		return <ScreenSpin />;
	}
	return children
}