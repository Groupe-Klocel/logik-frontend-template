import { DetailsList } from '@components';

export interface IArticleSetDetailDetailsProps {
    details?: any;
}

const ArticleSetDetailDetails = ({ details }: IArticleSetDetailDetailsProps) => {
    const refurbDetails = {
        ...details,
        associatedArticle: details.article.name,
        associatedArticleSet: details.articleSet.name,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['id'];
    delete refurbDetails['featureType'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['stockOwner'];
    delete refurbDetails['articleId'];
    delete refurbDetails['article'];
    delete refurbDetails['articleSetId'];
    delete refurbDetails['articleSet'];
    delete refurbDetails['extras'];

    return (
        <>
            <DetailsList details={refurbDetails} />
        </>
    );
};

export { ArticleSetDetailDetails };
