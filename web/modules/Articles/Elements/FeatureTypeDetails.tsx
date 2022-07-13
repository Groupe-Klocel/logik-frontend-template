import { DetailsList } from '@components';
import { useAppState } from 'context/AppContext';

export interface IFeatureTypeDetailsProps {
    details?: any;
}

const FeatureTypeDetails = ({ details }: IFeatureTypeDetailsProps) => {
    const { globalLocale } = useAppState();
    const searchedLanguage = globalLocale == 'en-US' ? 'en' : globalLocale;
    const refurbDetails = {
        ...details,
        value: globalLocale ? details.translation[searchedLanguage] : details.value
    };
    delete refurbDetails['translation'];
    delete refurbDetails['scope'];
    delete refurbDetails['extras'];
    delete refurbDetails['id'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { FeatureTypeDetails };
