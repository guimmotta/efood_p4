export const restaurants = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    destaque: true,
    capa: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=472&h=217&fit=crop',
    avaliacao: 4.9,
    descricao: 'Peça já o seu produto favorito agora mesmo! Com o efood, você tem sempre uma ótima opção para qualquer ocasião.',
    cardapio: [
      { id: 1, nome: 'Combinado Especial', descricao: 'Uma seleção dos melhores sushis e sashimis da casa, preparados com ingredientes frescos.', foto: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=280&h=167&fit=crop', preco: 89.90 },
      { id: 2, nome: 'Temaki Salmão', descricao: 'Temaki recheado com salmão fresco, cream cheese e pepino crocante.', foto: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=280&h=167&fit=crop', preco: 32.90 },
      { id: 3, nome: 'Uramaki Filadélfia', descricao: 'Clássico uramaki com salmão, cream cheese e pepino.', foto: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=280&h=167&fit=crop', preco: 42.90 }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    capa: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=472&h=217&fit=crop',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria é uma autêntica cozinha italiana. Pratos frescos e saborosos, feitos com amor.',
    cardapio: [
      { id: 1, nome: 'Pizza Margherita', descricao: 'A clássica Pizza Margherita: molho de tomate suculento, muçarela de búfala e manjericão fresco.', foto: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=280&h=167&fit=crop', preco: 56.90 },
      { id: 2, nome: 'Fettuccine Alfredo', descricao: 'Macarrão fettuccine ao molho Alfredo cremoso com parmesão e manteiga.', foto: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=280&h=167&fit=crop', preco: 48.90 },
      { id: 3, nome: 'Tiramisu', descricao: 'Sobremesa italiana clássica com biscoito champanhe, café e mascarpone.', foto: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=280&h=167&fit=crop', preco: 28.90 }
    ]
  },
  {
    id: 3,
    titulo: 'Burger House',
    tipo: 'Americana',
    capa: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=472&h=217&fit=crop',
    avaliacao: 4.8,
    descricao: 'Os melhores burgers artesanais da cidade, com ingredientes frescos e pão brioche.',
    cardapio: [
      { id: 1, nome: 'Classic Smash Burger', descricao: 'Pão brioche, carne smash 180g, queijo cheddar, alface, tomate e molho especial.', foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=280&h=167&fit=crop', preco: 38.90 },
      { id: 2, nome: 'BBQ Bacon Burger', descricao: 'Pão brioche, carne 200g, queijo, bacon crocante, cebola caramelizada e molho BBQ.', foto: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=280&h=167&fit=crop', preco: 44.90 },
      { id: 3, nome: 'Batata Frita Rústica', descricao: 'Batatas rústicas temperadas com alecrim e sal grosso, acompanha molho aioli.', foto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=280&h=167&fit=crop', preco: 22.90 }
    ]
  },
  {
    id: 4,
    titulo: 'Thai Garden',
    tipo: 'Tailandesa',
    capa: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=472&h=217&fit=crop',
    avaliacao: 4.7,
    descricao: 'Sabores autênticos da Tailândia, com ervas frescas e temperos exóticos.',
    cardapio: [
      { id: 1, nome: 'Pad Thai', descricao: 'Macarrão de arroz com camarão, ovos, broto de feijão e amendoim.', foto: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=280&h=167&fit=crop', preco: 52.90 },
      { id: 2, nome: 'Tom Yum Soup', descricao: 'Sopa tailandesa picante com camarão, cogumelos e capim-limão.', foto: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=280&h=167&fit=crop', preco: 36.90 }
    ]
  },
  {
    id: 5,
    titulo: 'Churrascaria Gaúcha',
    tipo: 'Brasileira',
    capa: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=472&h=217&fit=crop',
    avaliacao: 4.5,
    descricao: 'Carnes nobres grelhadas na brasa com o autêntico tempero gaúcho.',
    cardapio: [
      { id: 1, nome: 'Picanha na Brasa', descricao: 'Picanha premium grelhada na brasa com sal grosso, acompanha farofa e vinagrete.', foto: 'https://images.unsplash.com/photo-1558030006-450675393462?w=280&h=167&fit=crop', preco: 89.90 },
      { id: 2, nome: 'Costela no Bafo', descricao: 'Costela bovina cozida lentamente, extremamente macia e saborosa.', foto: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=280&h=167&fit=crop', preco: 72.90 }
    ]
  },
  {
    id: 6,
    titulo: 'Cantina do Pedro',
    tipo: 'Italiana',
    capa: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=472&h=217&fit=crop',
    avaliacao: 4.4,
    descricao: 'Comida italiana caseira com receitas tradicionais passadas de geração em geração.',
    cardapio: [
      { id: 1, nome: 'Lasanha Bolonhesa', descricao: 'Lasanha tradicional com molho bolonhesa, bechamel e queijo gratinado.', foto: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=280&h=167&fit=crop', preco: 46.90 },
      { id: 2, nome: 'Risoto de Funghi', descricao: 'Risoto cremoso com mix de funghi, vinho branco e parmesão.', foto: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=280&h=167&fit=crop', preco: 54.90 }
    ]
  }
]
