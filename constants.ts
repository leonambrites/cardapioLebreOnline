import type { MenuCategoryType } from './types';

export const CONTACT_PHONE_NUMBER = '(21) 98211-2061';
export const CONTACT_PHONE_NUMBER_WHATSAPP = '5521982112061'; // Formato internacional: Código do país + DDD + Número

export const DELIVERY_FEE = 5;
export const FREE_DELIVERY_THRESHOLD = 100;

export const MENU_DATA: MenuCategoryType[] = [
  {
    id: 1,
    name: 'Salgados',
    subtitle: 'Praticidade e sabor em cada mordida',
    items: [
      {
        id: 101,
        name: 'Bolinho de frango com queijo',
        description: '4 unidades do delicioso bolinho com massa de batata doce e frango, recheado com queijo.',
        price: 21,
        imageUrl: 'https://i.imgur.com/Mu3eoJm.png',
        hasSaltOption: true,
      },
      {
        id: 103,
        name: 'Quibe de forno',
        description: '4 unidades quibe de carne assado no forno, temperado suavemente com hortelã para agradar o paladar dos pequenos.',
        price: 21,
        imageUrl: 'https://i.imgur.com/h9pIMPY.png',
        hasSaltOption: true,
      },
      {
        id: 104,
        name: 'Nuggets caseiros',
        description: '7 unidades de nuggets de frango feitos em casa. Assados na airfryer, sem industrializados.',
        price: 21,
        imageUrl: 'https://i.imgur.com/HfyYCwn.png',
        hasSaltOption: true,
      },
      {
        id: 105,
        name: 'Feijão',
        description: 'Ingredientes: Feijão preto com tempero caseiro.',
        price: 13,
        imageUrl: 'https://i.imgur.com/o3xZiZY.png',
      },
      {
        id: 106,
        name: 'Quinoa com cenoura, brócolis e pimentões',
        description: 'Ingredientes: Quioa, cenoura, brócolis, pimentão amarelo, pimentão vermelho, alho, azeite e sal.',
        price: 13,
        imageUrl: 'https://i.imgur.com/45GEvjw.png',
      },
      {
        id: 107,
        name: 'Molho de tomate caseiro [200g]',
        description: 'Ingredientes: tomates, manjericão, cebola roxa, cenoura, beterraba, pimentão vermelho, alho, azeite e sal.',
        price: 13,
        imageUrl: 'https://i.imgur.com/B6mo5yF.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Sopas',
    subtitle: 'Nutrição que aquece o coração',
    items: [
      {
        id: 201,
        name: 'Sopa Tem tudo',
        description: 'Sopa com Frango, abóbora, grão de bico, macarrão de letrinhas, abobrinha, cenoura, vagem, batata doce e agrião.',
        sizes: [
          { size: '220ml', price: 10 },
          { size: '460ml', price: 18 },
        ],
        imageUrl: 'https://i.imgur.com/9NxFRfY.png',
        hasSaltOption: true,
      },
      {
        id: 202,
        name: 'Sopa de ervilha',
        description: 'Sopa cremosa de ervilha com carne, cenoura, batata inglesa e vagem.',
        sizes: [
          { size: '220ml', price: 10 },
          { size: '460ml', price: 18 },
        ],
        imageUrl: 'https://i.imgur.com/mchEq5z.png',
        hasSaltOption: true,
      },
      {
        id: 203,
        name: 'Sopa de baroa com frango',
        description: 'Sopa cremosa de batata baroa com frango desfiado, alho poró e brócolis.',
        sizes: [
          { size: '220ml', price: 14 },
          { size: '460ml', price: 22 },
        ],
        imageUrl: 'https://i.imgur.com/1QBTR8V.png',
        hasSaltOption: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Doces',
    subtitle: 'Pequenas delícias, grandes sorrisos',
    items: [
        {
            id: 301,
            name: 'Cupcake de morango',
            description: '4 unidades de bolinhos fofinhos de aveia e banana com pedacinhos de morango natural.',
            price: 20,
            imageUrl: 'https://i.imgur.com/GaPvOiG.png',
        },
        {
            id: 302,
            name: 'Cupcake de chocolate',
            description: '4 unidades do clássico cupcake de chocolate em versão sem açúcar.',
            price: 16,
            imageUrl: 'https://i.imgur.com/MoyDbjW.png',
        },
        {
            id: 303,
            name: 'Brigadeiro de colher',
            description: 'Cremoso, feito com cacau e adoçado com tâmaras. Pode ser usado como cobertura para o cupcake!',
            price: 14,
            imageUrl: 'https://i.imgur.com/VJLH37K.png',
        },
    ],
  },
  {
    id: 4,
    name: 'Bebidas',
    subtitle: 'Naturais e sem adição de açúcar',
    items: [
        {
            id: 401,
            name: 'Summer Vibes - Suco Misto de Manga Maracujá Abacaxi e Maçã. 1l',
            description: 'Suco Misto de Manga Maracujá Abacaxi e Maçã.',
            price: 25,
            imageUrl: 'https://casaspedro.vteximg.com.br/arquivos/ids/203327-550-550/suco-misto-de-manga-maracuja-abacaxi-e-maca-summer-vibes-1l.png?v=638908854656070000',
        },
        {
            id: 402,
            name: 'Greenpeople - Suco de abacaxi com hortelã 1L',
            description: 'Um suco refrescante para qualquer ocasião. Abacaxi com hortelã é cítrico, doce e muito equilibrado. Traz o sabor inconfundível da fruta, com a fragrância inigualável do hortelã.',
            price: 25,
            imageUrl: 'https://trela.com.br/_next/image?url=https%3A%2F%2Fprod-zapt-images.s3.sa-east-1.amazonaws.com%2Fproducts%2Fc95668ad-9c57-44ff-b5c3-8273b26935da.png&w=3840&q=75',
        },
        {
            id: 403,
            name: 'Natural One - Suco Maçã. 180ml',
            description: 'Sabor suave e natural do morango, adoçado com banana.',
            price: 7.90,
            imageUrl: 'https://prezunic.vtexassets.com/arquivos/ids/185161-1200-auto?v=638368822525430000&width=1200&height=auto&aspect=true',
        },
        {
            id: 405,
            name: 'Maguary - Suco Maçã. 150ml',
            description: 'O Maguary Fruit Shoot é feito com suco de fruta de verdade, não possui corantes e aromas artificiais e é fonte de vitaminas B6, D, B12 e Zinco, fundamentais para uma boa nutrição infantil.',
            price: 7.90,
            imageUrl: 'https://casaspedro.vteximg.com.br/arquivos/ids/202769-550-550/fruit-shoot-100--suco-maca-maguary-150ml.png?v=638908775984400000',
        },
    ]
  },
  {
    id: 5,
    name: 'Sorvetes (100ml)',
    subtitle: 'Naturais, cremosos e na medida certa',
    items: [
        {
            id: 501,
            name: 'Chocolate',
            description: 'Sorvete cremoso de cacau, adoçado com banana.',
            price: 8,
            imageUrl: 'https://i.imgur.com/AZoRF1F.jpeg',
        },
        {
            id: 502,
            name: 'Chocolate com Amendoim',
            description: 'A união perfeita do cacau com o amendoim.',
            price: 9,
            imageUrl: 'https://i.imgur.com/AZoRF1F.jpeg',
        },
        {
            id: 503,
            name: 'Morango',
            description: 'Sabor suave e natural do morango, adoçado com banana.',
            price: 9,
            imageUrl: 'https://i.imgur.com/nXzXeTy.jpeg',
        },
        {
            id: 505,
            name: 'Açaí',
            description: 'Cremoso e cheio de energia: açaí batido com banana, naturalmente doce e refrescante.',
            price: 9,
            imageUrl: 'https://i.imgur.com/y7ZRu3C.jpeg',
        },
    ]
  },
  {
    id: 6,
    name: 'Festa',
    subtitle: 'Leve o sabor do Lebre para suas celebrações',
    items: [
                {
            id: 601,
            name: 'Bolo para festa',
            description: 'Bolo de chocolate fofinho e delicioso, perfeito para festas. Consulte opções de tamanho e cobertura.',
            price: 'A combinar',
            imageUrl: 'https://i.imgur.com/I37Jdk1.png',
        },
        {
            id: 602,
            name: 'Lanches para festa',
            description: 'Kit festa de salgados.',
            price: 'A combinar',
            imageUrl: 'https://i.imgur.com/guNluWx.png',
        },
        {
            id: 603,
            name: 'Cupcakes para festa',
            description: 'Kit de cupcakes para festa.',
            price: 'A combinar',
            imageUrl: 'https://i.imgur.com/PlYVwTN.png',
        },
    ]
  }
];