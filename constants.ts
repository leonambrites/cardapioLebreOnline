import type { MenuCategoryType } from './types';

export const MENU_DATA: MenuCategoryType[] = [
  {
    id: 1,
    name: 'Salgados',
    items: [
      {
        id: 101,
        name: 'Bolinho de frango com queijo [4 un.]',
        description: 'Delicioso bolinho com massa de batata doce e frango, recheado com queijo. Assado e saudável!',
        price: 24,
        imageUrl: 'https://i.imgur.com/Mu3eoJm.png',
      },
      {
        id: 103,
        name: 'Quibe de forno [4 un.]',
        description: 'Quibe assado no forno, temperado suavemente com hortelã.',
        price: 24,
        imageUrl: 'https://i.imgur.com/h9pIMPY.png',
      },
      {
        id: 104,
        name: 'Nuggets caseiros [8 un.]',
        description: 'Nuggets de frango feitos em casa. Assados na airfryer, sem industrializados.',
        price: 24,
        imageUrl: 'https://i.imgur.com/HfyYCwn.png',
      },
      {
        id: 105,
        name: 'Molho de tomate caseiro [200g]',
        description: 'Ingredientes: tomates, manjericão, cebola roxa, cenoura, beterraba, pimentão vermelho, alho, azeite e sal.',
        price: 13,
        imageUrl: 'https://picsum.photos/seed/molho-tomate/400/300',
      },
    ],
  },
  {
    id: 2,
    name: 'Sopas',
    items: [
      {
        id: 201,
        name: 'Sopa Tem tudo [400ml]',
        description: 'Frango, abóbora, grão de bico, macarrão de letrinhas, abobrinha, cenoura, vagem, batata doce e agrião.',
        price: 29,
        imageUrl: 'https://picsum.photos/seed/sopa-tem-tudo/400/300',
      },
      {
        id: 202,
        name: 'Sopa de ervilha [400ml]',
        description: 'Sopa cremosa de ervilha com carne, cenoura, batata inglesa e vagem. Um clássico que aquece o coração.',
        price: 27,
        imageUrl: 'https://picsum.photos/seed/sopa-ervilha-carne/400/300',
      },
      {
        id: 203,
        name: 'Sopa de baroa com frango [400ml]',
        description: 'Sopa cremosa de batata baroa com frango desfiado, alho poró e brócolis. Sabor suave e nutritivo.',
        price: 28,
        imageUrl: 'https://picsum.photos/seed/sopa-baroa-frango/400/300',
      },
    ],
  },
  {
    id: 3,
    name: 'Doces',
    items: [
        {
            id: 301,
            name: 'Cupcake de morango [4 un.]',
            description: 'Bolinhos fofinhos de aveia e banana com pedacinhos de morango natural. Um docinho divertido e saudável.',
            price: 24,
            imageUrl: 'https://picsum.photos/seed/cupcake-morango/400/300',
        },
        {
            id: 302,
            name: 'Cupcake Prestígio [4 un.]',
            description: 'O clássico cacau + coco em versão sem açúcar. Macios, saborosos e pensados para matar a vontade de doce sem culpa.',
            price: 24,
            imageUrl: 'https://picsum.photos/seed/cupcake-prestigio/400/300',
        },
        {
            id: 303,
            name: 'Brigadeiro de colher [200g]',
            description: 'Cremoso, feito com cacau e adoçado com tâmaras. Pode ser usado como cobertura para o cupcake!',
            price: 13,
            imageUrl: 'https://picsum.photos/seed/brigadeiro-colher/400/300',
        },
    ],
  },
  {
    id: 4,
    name: 'Sorvetes (100ml)',
    items: [
        {
            id: 401,
            name: 'Chocolate',
            description: 'Sorvete cremoso de cacau, adoçado com banana. Refrescante, nutritivo e irresistível.',
            price: 8,
            imageUrl: 'https://picsum.photos/seed/sorvete-chocolate/400/300',
        },
        {
            id: 402,
            name: 'Chocolate com Amendoim',
            description: 'A união perfeita do cacau com o amendoim. Cremoso, divertido e cheio de energia boa para os pequenos.',
            price: 9,
            imageUrl: 'https://picsum.photos/seed/sorvete-chocomendoim/400/300',
        },
        {
            id: 403,
            name: 'Morango',
            description: 'Sabor suave e natural do morango, adoçado com banana. Geladinho leve e saudável que refresca e conquista.',
            price: 9,
            imageUrl: 'https://picsum.photos/seed/sorvete-morango/400/300',
        },
        {
            id: 405,
            name: 'Açaí',
            description: 'Cremoso e cheio de energia: açaí batido com banana, naturalmente doce e refrescante.',
            price: 8,
            imageUrl: 'https://picsum.photos/seed/sorvete-acai/400/300',
        },
    ]
  }
];
