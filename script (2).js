// ============================================================
// NAV — solidify on scroll
// ============================================================
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ============================================================
// HERO LANTERNS — a few warm particles drifting up past the
// silhouette, echoing paper lanterns / floating embers.
// ============================================================
(function () {
  const field = document.getElementById('lanterns');
  if (!field) return;
  const COUNT = 16;
  for (let i = 0; i < COUNT; i++) {
    const el = document.createElement('span');
    el.className = 'lantern';
    const left = Math.random() * 100;
    const size = 2 + Math.random() * 3;
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * 14;
    el.style.left = left + '%';
    el.style.bottom = '-10px';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';
    field.appendChild(el);
  }
})();

// ============================================================
// SCROLL REVEAL
// ============================================================
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
})();

// ============================================================
// PHOTO SLOTS — try to load the real photo behind the sliding
// doors. If it resolves, show it and mark the slot so the
// placeholder text is hidden; if it 404s, the placeholder
// (with its filename hint) stays exactly where it is.
// ============================================================
(function () {
  const slots = document.querySelectorAll('.photo-slot img[data-src]');
  slots.forEach((img) => {
    const src = img.getAttribute('data-src');
    const probe = new Image();
    probe.onload = () => {
      img.src = src;
      img.closest('.photo-slot').classList.add('has-photo');
    };
    probe.onerror = () => {
      // keep placeholder state — nothing to do
    };
    probe.src = src;
  });
})();

// ============================================================
// DISH MODAL
// ============================================================
(function () {
  const DATA = {
    tteokbokki: {
      origin: 'Korea',
      title: 'Tteokbokki',
      desc: 'Chewy cylinders of rice cake, simmered slowly in a gochujang broth until the sauce clings thick and glossy. A staple comfort dish for homesick guests, and a curious first taste for everyone else.'
    },
    gimbap: {
      origin: 'Korea',
      title: 'Gimbap',
      desc: 'Seasoned rice rolled in seaweed with egg, pickled radish, carrot, and spinach, sliced into neat rounds. Packed fresh each morning — good for a room-service breakfast or a packed lunch on the road.'
    },
    dumplings: {
      origin: 'Korea',
      title: 'Mandu Dumplings',
      desc: 'Pleated dumplings filled with seasoned meat and vegetables, served either soft-steamed or pan-seared until the base turns deep gold and crisp.'
    },
    friedchicken: {
      origin: 'Korea',
      title: 'Korean Fried Chicken',
      desc: 'Double-fried for a shell that stays crisp under the glaze, then coated sticky-sweet-and-spicy and finished with sesame. Best ordered while it is still audibly crackling.'
    },
    bibimbap: {
      origin: 'Korea',
      title: 'Bibimbap',
      desc: 'A bowl of warm rice topped with a spread of seasoned vegetables, mushrooms, and a raw or fried egg — a spoon of gochujang stirred through right at the table.'
    },
    grilledprawns: {
      origin: 'Coastal Andhra',
      title: 'Grilled Prawns',
      desc: 'Whole prawns marinated in garlic and chilli, char-grilled to order and finished with sesame, spring onion, and a side of the kitchen\u2019s own dipping sauces.'
    }
  };

  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDesc');
  const originEl = document.getElementById('modalOrigin');
  if (!backdrop) return;

  function openModal(key) {
    const d = DATA[key];
    if (!d) return;
    titleEl.textContent = d.title;
    descEl.textContent = d.desc;
    originEl.textContent = d.origin;
    backdrop.classList.add('is-open');
  }
  function closeModal() {
    backdrop.classList.remove('is-open');
  }

  document.querySelectorAll('.dish-card').forEach((card) => {
    card.addEventListener('click', () => openModal(card.getAttribute('data-dish')));
  });
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();
