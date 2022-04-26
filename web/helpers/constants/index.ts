export const PermissionTable = [
    {
        tableName: 'ARTICLE',
        writeModeUrls: ['/article/edit/', '/add-article', '/edit-article'],
        nonePermissionUrls: ['/article/edit/[id]', '/add-article', '/edit-article', '/articles']
    },
    {
        tableName: 'BARCODE',
        mode: 'READ',
        writeModeUrls: ['/barcode/edit/', '/add-barcode', '/edit-barcode'],
        nonePermissionUrls: ['/barcode/edit/', '/add-barcode', '/edit-barcode', '/barcodes']
    }
];
