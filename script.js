const menuItems = [
  {
    id: 1,
    name: " Lasanha de Caranguejo Marlonista",
    description:
      "Uma releitura tropical da clássica lasanha, feita com camadas delicadas de massa intercaladas com um recheio cremoso de carne de caranguejo fresca, refogada com ervas aromáticas e leve toque de pimenta. Finalizada com queijo gratinado dourado e decorada com garras de caranguejo, folhas de manjericão e pimentões vermelhos, essa exclusividade do Marlonista é uma verdadeira celebração dos sabores do litoral.",
    price: "R$ 28,90",
    category: "entradas",
    image: "/img-marlonista/lasanha-carangueijo.jpg",
  },
  {
    id: 2,
    name: "Camarão ao Molho Marlonista",
    description:
      "Uma explosão de sabores do litoral: camarões suculentos mergulhados em um molho cremoso e aromático, enriquecido com pimentões coloridos e ervas frescas. Servido sobre massa delicadamente cozida, esse prato combina textura, cor e sabor em uma apresentação irresistível. Uma criação exclusiva do Marlonista que homenageia a brisa do mar e a generosidade da cozinha praiana",
    price: "R$ 42,50",
    category: "entradas",
    image: "/img-marlonista/camarao-molho.jpg",
  },
  {
    id: 3,
    name: " Peixe Frito Marlonista",
    description:
      "Filés de peixe frescos, pescados nas águas do litoral potiguar, temperados com especiarias da casa e fritos até atingirem o ponto perfeito de crocância dourada. Servidos sobre uma cama de folhas verdes e acompanhados por rodelas de cebola, tomate e limão, esse prato é uma homenagem à simplicidade sofisticada da cozinha praiana — onde o sabor do mar encontra o toque artesanal do chef.",
    price: "R$ 56,90",
    category: "principais",
    image: "img-marlonista/peixe-frito.jpg",
  },
  {
    id: 4,
    name: "Macarrão com Frutos do Mar Marlonista",
    description:
      "Uma sinfonia de sabores marinhos: camarões, lulas e polvo cuidadosamente selecionados, salteados com ervas frescas e pimentões coloridos, envoltos em um molho cremoso e aromático. Servido sobre massa al dente, esse prato combina a leveza do mar com a intensidade da cozinha artesanal. Uma experiência transcendental — exclusiva do Marlonista — que transforma cada garfada em uma viagem sensorial à beira-mar.",
    price: "R$ 78,90",
    category: "principais",
    image: "img-marlonista/macarrao-frutos-mar.jpg",
  },
  {
    id: 5,
    name: "Lagosta com Arroz Refogado Marlonista",
    description:
      "Duas generosas lagostas grelhadas com manteiga de ervas, servidas sobre um arroz refogado com açafrão, camarões e temperos frescos da costa. O prato é finalizado com folhas aromáticas e pimentões salteados, criando uma explosão de cores e sabores. Servido em travessa temática, essa criação exclusiva do Marlonista é uma verdadeira ode à sofisticação da culinária litorânea",
    price: "R$ 72,50",
    category: "entradas",
    image: "img-marlonista/largosta-arroz.jpg",
  },
  {
    id: 6,
    name: " Polvo ao Molho Verde Marlonista",
    description:
      "Tentáculos de polvo grelhados com maestria, servidos sobre um cremoso molho verde à base de ervas frescas e azeite extravirgem. A textura macia e o sabor marcante do polvo se harmonizam com o frescor do molho, criando uma experiência gastronômica única. Finalizado com folhas aromáticas e toque de alecrim, esse prato especial é uma verdadeira obra-prima da culinária praiana — exclusivo do Marlonista.",
    price: "R$ 24,90",
    category: "principais",
    image: "img-marlonista/polvo-molho.jpg",
  },
  {
    id: 7,
    name: "Peixe e Camarão com Arroz Marlonist",
    description:
      "Uma combinação clássica e irresistível da culinária litorânea: filés de peixe dourados e camarões suculentos, servidos sobre arroz refogado com temperos frescos, pimentões e ervas aromáticas. Acompanhado por guarnições especiais e molhos da casa, esse prato celebra a generosidade do mar com cores vibrantes e sabores intensos. Uma experiência completa — perfeita para quem busca sabor, frescor e tradição à beira-mar.",
    price: "R$ 22,50",
    category: "principais",
    image: "img-marlonista/peixe-camarao.jpg",
  },
  {
    id: 8,
    name: "Camarão Grelhado com Batata Frita Marlonista",
    description:
      "Espetinhos de camarão grelhado no ponto ideal, com leve toque de limão e ervas frescas, servidos sobre filés de peixe dourados e acompanhados por batatas fritas crocantes. Uma combinação clássica com alma praiana, perfeita para quem busca sabor, leveza e aquele clima descontraído à beira-mar. Ideal para harmonizar com uma água de coco gelada ou uma caipirinha refrescante.",
    price: "R$ 22,50",
    category: "principais",
    image: "img-marlonista/batatafrita-frutos-mar.jpg",
  },
  {
    id: 9,
    name: " Frutos do Mar com Arroz Refogado Marlonissta",
    description:
      "Uma celebração dos sabores oceânicos: camarões, lagosta, polvo e outros frutos do mar selecionados, preparados com temperos frescos e servidos sobre um arroz refogado com açafrão, pimentões e ervas da casa. Acompanhado por molhos especiais e guarnições tropicais, esse prato é uma verdadeira festa praiana — vibrante, aromática e exclusiva do Marlonista. Ideal para quem busca uma experiência gastronômica completa à beira-mar.",
    price: "R$ 22,50",
    category: "principais",
    image: "img-marlonista/frutos-mar.jpg",
  },
  {
    id: 10,
    name: "Vieiras Peruanas Marlonista",
    description:
      "Delicadas vieiras servidas em suas conchas naturais, com toque cítrico de limão fresco e folhas de hortelã para realçar o sabor do mar. Com apresentação vibrante e textura suave, esse prato traz a sofisticação da culinária peruana para o litoral potiguar. Uma entrada leve, refrescante e memorável — exclusiva do Marlonista.",
    price: "R$ 22,50",
    category: "entradas",
    image: "img-marlonista/vieras-peruanas.jpg",
  },
  {
    id: 11,
    name: " Camarão Grelhado com Batatas Fritas Marlonista",
    description:
      "Espetinhos de camarão grelhado com tempero leve e toque de limão, servidos sobre filés de peixe dourados e acompanhados por batatas fritas crocantes e douradas. Uma combinação irresistível que une o sabor marcante do mar com o conforto das batatas fritas — perfeita para quem busca uma refeição descontraída, vibrante e cheia de personalidade à beira-mar.",
    price: "R$ 22,50",
    category: "entradas",
    image: "img-marlonista/fritas-camarao.jpg",
  },
  {
    id: 12,
    name: "Polvo com Lagosta Marlonista",
    description:
      "Uma combinação exuberante dos sabores mais nobres do mar: tentáculos de polvo grelhados com textura macia e sabor intenso, acompanhados por caudas de lagosta suculentas, douradas na manteiga de ervas. Servidos com guarnições tropicais e toque cítrico de limão fresco, esse prato especial é uma verdadeira joia da culinária praiana — sofisticado, vibrante e exclusivo do Marlonista",
    price: "R$ 22,50",
    category: "principais",
    image: "img-marlonista/polvo-lagosta.jpg",
  },
  {
    id: 13,
    name: "Camarão com Arroz Refogado Marlonista",
    description:
      "Camarões frescos salteados com alho, cebola e ervas aromáticas, envolvidos em um arroz refogado com açafrão, pimentões e temperos da casa. O prato é finalizado com folhas de manjericão e toque de tomate fresco, criando uma combinação leve, colorida e cheia de sabor. Uma receita clássica com alma praiana — perfeita para quem busca conforto e frescor à beira-mar.",
    price: "R$ 22,50",
    category: "principais",
    image: "img-marlonista/camarao-arroz-refogado.jpg",
  },
];

// const drinkItems = [
//   {
//     id: 1,
//     name: "Caipirinha de Limão",
//     description:
//       "Tradicional caipirinha brasileira com cachaça premium, limão e açúcar.",
//     price: "R$ 18,90",
//     category: "coquetéis",
//     image:
//       "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 2,
//     name: "Mojito Cubano",
//     description: "Rum branco, hortelã fresca, limão, açúcar e água com gás.",
//     price: "R$ 22,50",
//     category: "coquetéis",
//     image:
//       "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1302&q=80",
//   },
//   {
//     id: 3,
//     name: "Vinho Tinto Reserva",
//     description:
//       "Vinho tinto reserva da região do Douro, Portugal. Cor rubi intensa, aromas de frutas vermelhas.",
//     price: "R$ 89,90",
//     category: "vinhos",
//     image:
//       "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 4,
//     name: "Cerveja Artesanal IPA",
//     description:
//       "Cerveja artesanal estilo IPA com notas cítricas e amargor equilibrado.",
//     price: "R$ 16,90",
//     category: "cervejas",
//     image:
//       "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 5,
//     name: "Suco Natural de Laranja",
//     description: "Suco de laranja fresco espremido na hora.",
//     price: "R$ 12,90",
//     category: "sucos",
//     image:
//       "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
//   },
//   {
//     id: 6,
//     name: "Água com Gás",
//     description: "Água mineral com gás, servida com limão.",
//     price: "R$ 8,90",
//     category: "água",
//     image:
//       "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//   },
// ];

// Função para renderizar os itens do menu
function renderMenuItems(items, container, showCategory = false) {
  container.innerHTML = "";

  // <span class="menu-item-price">${item.price}</span>;
  items.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item fade-in";
    menuItem.dataset.category = item.category;

    menuItem.innerHTML = `
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                        </div>
                        <p>${item.description}</p>
                        ${
                          showCategory
                            ? `<span class="menu-category-tag">${item.category}</span>`
                            : ""
                        }
                    </div>
                `;

    container.appendChild(menuItem);
  });

  // Ativar animação de fade-in
  setTimeout(() => {
    const menuItems = container.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
      item.classList.add("show");
    });
  }, 100);
}

// Inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Filtro do cardápio
  const categoryButtons = document.querySelectorAll(".category-btn");
  const menuContainer = document.querySelector(".menu .menu-items");

  // Renderizar itens do menu principal
  renderMenuItems(menuItems, menuContainer);

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Ativar botão clicado
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.dataset.category;

      // Filtrar itens
      if (category === "all") {
        renderMenuItems(menuItems, menuContainer);
      } else {
        const filteredItems = menuItems.filter(
          (item) => item.category === category
        );
        renderMenuItems(filteredItems, menuContainer);
      }
    });
  });

  // Renderizar bebidas
  // const drinksContainer = document.querySelector(".drinks .menu-items");
  // renderMenuItems(drinkItems, drinksContainer, true);

  // Slider de depoimentos
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  function showSlide(n) {
    testimonialSlides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;

    testimonialSlides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Auto-avançar slides
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);

  // Animação de scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  // Verificar scroll na inicialização
  checkScroll();

  // Verificar scroll ao rolar a página
  window.addEventListener("scroll", checkScroll);

  // Formulário de contato
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    contactForm.reset();
  });

  // Newsletter
  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Obrigado por se inscrever em nossa newsletter!");
    newsletterForm.reset();
  });
});
