import { ScreenSpin } from '@components';
import { OnlyChildrenType } from '@helpers';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

const ProtectRoute: unknown | null = ({ children }: OnlyChildrenType) => {
    const router = useRouter();
    const { isAuthenticated, loading } = useAuth();
    if (loading || (!isAuthenticated && router.pathname !== '/login')) {
        router.push('/login');
        return <ScreenSpin />;
    }
    return children;
};

ProtectRoute.displayName = 'ProtectRoute';

export { ProtectRoute };
