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
        price: 24,
        imageUrl: 'https://i.imgur.com/Mu3eoJm.png',
      },
      {
        id: 103,
        name: 'Quibe de forno',
        description: '4 unidades quibe de carne assado no forno, temperado suavemente com hortelã para agradar o paladar dos pequenos.',
        price: 24,
        imageUrl: 'https://i.imgur.com/h9pIMPY.png',
      },
      {
        id: 104,
        name: 'Nuggets caseiros',
        description: '7 unidades de nuggets de frango feitos em casa. Assados na airfryer, sem industrializados.',
        price: 24,
        imageUrl: 'https://i.imgur.com/HfyYCwn.png',
      },
      {
        id: 105,
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
          { size: '220ml', price: 14 },
          { size: '460ml', price: 25 },
        ],
        imageUrl: 'https://i.imgur.com/9NxFRfY.png',
      },
      {
        id: 202,
        name: 'Sopa de ervilha',
        description: 'Sopa cremosa de ervilha com carne, cenoura, batata inglesa e vagem.',
        sizes: [
          { size: '220ml', price: 14 },
          { size: '460ml', price: 25 },
        ],
        imageUrl: 'https://i.imgur.com/mchEq5z.png',
      },
      {
        id: 203,
        name: 'Sopa de baroa com frango',
        description: 'Sopa cremosa de batata baroa com frango desfiado, alho poró e brócolis.',
        sizes: [
          { size: '220ml', price: 14 },
          { size: '460ml', price: 25 },
        ],
        imageUrl: 'https://i.imgur.com/1QBTR8V.png',
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
            price: 22,
            imageUrl: 'https://i.imgur.com/GaPvOiG.png',
        },
        {
            id: 302,
            name: 'Cupcake de chocolate',
            description: '4 unidades do clássico cupcake de chocolate em versão sem açúcar.',
            price: 18,
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
    name: 'Sorvetes (100ml)',
    subtitle: 'Naturais, cremosos e na medida certa',
    items: [
        {
            id: 401,
            name: 'Chocolate',
            description: 'Sorvete cremoso de cacau, adoçado com banana.',
            price: 8,
            imageUrl: 'https://i.imgur.com/AZoRF1F.jpeg',
        },
        {
            id: 402,
            name: 'Chocolate com Amendoim',
            description: 'A união perfeita do cacau com o amendoim.',
            price: 9,
            imageUrl: 'https://i.imgur.com/AZoRF1F.jpeg',
        },
        {
            id: 403,
            name: 'Morango',
            description: 'Sabor suave e natural do morango, adoçado com banana.',
            price: 9,
            imageUrl: 'https://i.imgur.com/nXzXeTy.jpeg',
        },
        {
            id: 405,
            name: 'Açaí',
            description: 'Cremoso e cheio de energia: açaí batido com banana, naturalmente doce e refrescante.',
            price: 9,
            imageUrl: 'https://i.imgur.com/y7ZRu3C.jpeg',
        },
    ]
  },
  {
    id: 5,
    name: 'Festa',
    subtitle: 'Leve o sabor do Lebre para suas celebrações',
    items: [
                {
            id: 501,
            name: 'Bolo para festa',
            description: 'Bolo de chocolate fofinho e delicioso, perfeito para festas. Consulte opções de tamanho e cobertura.',
            price: 'A combinar',
            imageUrl: 'https://i.imgur.com/I37Jdk1.png',
        },
        {
            id: 502,
            name: 'Lanches para festa',
            description: 'Kit festa de salgados.',
            price: 'A combinar',
            imageUrl: 'https://i.imgur.com/guNluWx.png',
        },
        {
            id: 503,
            name: 'Cupcakes para festa',
            description: 'Kit de cupcakes para festa.',
            price: 'A combinar',
            imageUrl: 'https://i.imgur.com/PlYVwTN.png',
        },
    ]
  }
];