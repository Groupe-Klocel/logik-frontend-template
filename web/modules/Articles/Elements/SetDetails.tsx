import { DetailsList } from '@components';

export interface IArticleSetDetailsProps {
    details?: any;
}

const ArticleSetDetails = ({ details }: IArticleSetDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name,
        associatedArticle: details.article.name,
        articleDescription: details.article.additionalDescription
    };
    delete refurbDetails['id'];
    delete refurbDetails['articleId'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['stockOwner'];
    delete refurbDetails['extras'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { ArticleSetDetails };
