import MENU_DATA from "./menu-data";

const TEST = [
    {
        id: 'B0202001',
        addedTime: new Date("2023-7-31"),
        productImg: [
            '/img/彩妝/innisfree Grace Gift 九宮格眼影限量聯名組(眼影+唇萃).jpg',
            '/img/彩妝/innisfree Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)法式馬卡龍.jpg'
        ],
        productCategories: [
            {
                name: '彩妝',
                id: MENU_DATA[2].id,
                subCategory: {
                    name: '眼部彩妝',
                    id: MENU_DATA[2].subMenus[1].id,
                    subCategory: {
                        name: '眼影',
                        id: MENU_DATA[2].subMenus[1].subMenus[1].id
                    }
                }
            },
            {
                name: '臉部保養',
                id: MENU_DATA[1].id,
                subCategory: {
                    name: '精華/精華液',
                    id: MENU_DATA[1].subMenus[0].id
                }
            },
        ],
        productName: 'innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)',
        productDesc: 'innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)',
        productSpecs: [
            {
                id: 'B0202001001',
                specName: '眼影盤#1+唇萃#2+法式可頌支架',
                SKUNumber: 1,
                specColor: null,
                stock: 1
            },
            {
                id: 'B0202001002',
                specName: '眼影盤#3+唇萃#5+法式馬卡龍支架',
                SKUNumber: 1,
                specColor: null,
                stock: 0
            },
            {
                id: 'B0202001003',
                specName: '眼影盤#3+唇萃#5+法式可頌支架',
                SKUNumber: 1,
                specColor: null,
                stock: 8
            }
        ],
        productOriPrice: 1720,
        productPrice: 980,
        productTag: {
            hotTag: false,
            newTag: true,
            saleTag: false
        }
    },
    {
        id: 'A0400001',
        addedTime: new Date("2023-5-31"),
        productImg: [
            '/img/彩妝/晨露無色潤唇膏.jpg',
            '/img/彩妝/晨露無色潤唇膏(2).jpg'
        ],
        productCategories: [
            {
                name: '身體髮品',
                id: MENU_DATA[3].id,
                subCategory: {
                    name: '身體保養',
                    id: MENU_DATA[3].subMenus[0].id,
                }
            },
            {
                name: '臉部保養',
                id: MENU_DATA[1].id,
                subCategory: {
                    name: '護唇/護唇膏',
                    id: MENU_DATA[1].subMenus[3].id
                }
            },
        ],
        productName: '晨露無色潤唇膏',
        productDesc: '蘊含萃取自濟州山茶花的保濕成分及玻尿酸，深度滋潤並賦予保濕光澤感的無色潤唇膏！',
        productSpecs: [
            {
                specName: '晨露無色潤唇膏',
                SKUNumber: 1,
                specColor: null,
                stock: 8
            }
        ],
        productOriPrice: null,
        productPrice: 450,
        productTag: {
            hotTag: false,
            newTag: true,
            saleTag: false
        }
    },
];

export default TEST;