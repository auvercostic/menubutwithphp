const TELEGRAM_BOT_TOKEN = '8926444206:AAGdnD71dd36n89VJQ_suTnNkkhxQC6LenI';
const TELEGRAM_CHAT_ID = '8926267205';
//8926267205
//8230693625 jules (dev) 
const menuData = [
  {
    id: 'body', categoryEn: 'Body', categoryVi: 'Chăm sóc Cơ thể',
    items: [
      { id: 'aroma', nameEn: 'Aroma Oil Therapy', nameVi: 'Trị liệu tinh dầu Aroma', descEn: 'Essential oil therapy to relax muscles and improve circulation.', descVi: 'Trị liệu tinh dầu giúp thư giãn cơ bắp và cải thiện tuần hoàn.', options: [{id: 'aroma-60', duration: 60, price: 500}, {id: 'aroma-90', duration: 90, price: 700}, {id: 'aroma-120', duration: 120, price: 850}] },
      { id: 'thai', nameEn: 'Thai Therapy', nameVi: 'Trị liệu kiểu Thái', descEn: 'A traditional Thailand therapy using stretching techniques.', descVi: 'Trị liệu truyền thống Thái Lan sử dụng kỹ thuật kéo giãn.', options: [{id: 'thai-60', duration: 60, price: 550}, {id: 'thai-90', duration: 90, price: 750}, {id: 'thai-120', duration: 120, price: 950}] },
      { id: 'viet', nameEn: 'Traditional Vietnamese Therapy', nameVi: 'Trị liệu truyền thống Việt Nam', descEn: 'Traditional therapy to relieve muscle tension and stimulate circulation.', descVi: 'Trị liệu truyền thống giúp giảm căng cơ và kích thích tuần hoàn.', options: [{id: 'viet-60', duration: 60, price: 600}, {id: 'viet-90', duration: 90, price: 800}, {id: 'viet-120', duration: 120, price: 1000}] },
      { id: 'adv', nameEn: 'Advanced Body Treatment', nameVi: 'Trị liệu cơ thể chuyên sâu', descEn: 'Deep therapy for chronic muscle tension and fatigue.', descVi: 'Trị liệu sâu cho căng cơ mãn tính và mệt mỏi.', options: [{id: 'adv-60', duration: 60, price: 700}, {id: 'adv-90', duration: 90, price: 1000}, {id: 'adv-120', duration: 120, price: 1300}] },
      { id: 'herbdex', nameEn: 'Herbal Body Detoxification Massage', nameVi: 'Trị liệu thải độc cơ thể', descEn: '', descVi: '', options: [{id: 'herbdex-60', duration: 60, price: 600}, {id: 'herbdex-90', duration: 90, price: 850}, {id: 'herbdex-120', duration: 120, price: 1100}] },
    ]
  },
  {
    id: 'neck', categoryEn: 'Back & Neck & Shoulder', categoryVi: 'Trị liệu Lưng, Cổ, Vai Gáy',
    items: [
      { id: 'back', nameEn: 'Back Therapy', nameVi: 'Trị liệu lưng', descEn: '', descVi: '', options: [{id: 'back-30', duration: 30, price: 350}, {id: 'back-60', duration: 60, price: 650}] },
      { id: 'hnb', nameEn: 'Head, Neck, Back & Shoulder Therapy', nameVi: 'Trị liệu đầu, cổ, lưng và vai gáy', descEn: '', descVi: '', options: [{id: 'hnb-30', duration: 30, price: 400}, {id: 'hnb-60', duration: 60, price: 700}] },
      { id: 'headache', nameEn: 'Headache & Insomnia Therapy', nameVi: 'Trị liệu đau đầu và mất ngủ', descEn: '', descVi: '', options: [{id: 'headache-30', duration: 30, price: 400}, {id: 'headache-60', duration: 60, price: 700}] }
    ]
  },
  {
    id: 'stone', categoryEn: 'Hot Stone', categoryVi: 'Đá nóng',
    items: [
      { id: 'stone-full', nameEn: 'Full Body Hot Stone', nameVi: 'Đá nóng toàn thân', descEn: '', descVi: '', options: [{id: 'stone-full-700', duration: 60, price: 700}] },
      { id: 'stone-back', nameEn: 'Back Hot Stone', nameVi: 'Đá nóng lưng', descEn: '', descVi: '', options: [{id: 'stone-back-0', duration: null, price: 450}] },
      { id: 'stone-foot', nameEn: 'Foot Hot Stone', nameVi: 'Đá nóng chân', descEn: '', descVi: '', options: [{id: 'stone-foot-0', duration: null, price: 350}] }
    ] 
  },
  {
    id: 'handfoot', categoryEn: 'Hand & Foot', categoryVi: 'Chăm sóc Tay & Chân',
    items: [
      { id: 'hand', nameEn: 'Soft Hand Therapy', nameVi: 'Trị liệu tay nhẹ', descEn: '', descVi: '', options: [{id: 'hand-30', duration: 30, price: 200}, {id: 'hand-60', duration: 60, price: 400}, {id: 'hand-90', duration: 90, price: 600}] },
      { id: 'foot-oil', nameEn: 'Foot Therapy With Oil', nameVi: 'Trị liệu chân với dầu', descEn: '', descVi: '', options: [{id: 'foot-oil-30', duration: 30, price: 250}, {id: 'foot-oil-60', duration: 60, price: 450}, {id: 'foot-oil-90', duration: 90, price: 650}] },
      { id: 'foot-treat', nameEn: 'Therapeutic Foot Treatment', nameVi: 'Trị liệu chân chuyên sâu', descEn: '', descVi: '', options: [{id: 'foot-treat-30', duration: 30, price: 300}, {id: 'foot-treat-60', duration: 60, price: 550}, {id: 'foot-treat-90', duration: 90, price: 750}] },
      { id: 'foot-total', nameEn: 'Foot Dead Skin Remover', nameVi: 'Tẩy, ủ chân', descEn: '', descVi: '', options: [{id: 'foot-total-30', duration: 30, price: 250}] },
      { id: 'foot-total', nameEn: 'Total Foot Therapy', nameVi: 'Tẩy, ủ, chà và massage chân', descEn: 'Massage, Scrub, Wrap', descVi: '', options: [{id: 'foot-total-60', duration: 60, price: 600}] }
    ]
  },
  {
    id: 'hair', categoryEn: 'Hair Wash', categoryVi: 'Gội đầu',
    items: [
      { id: 'hair-wash', nameEn: 'Hair Washing', nameVi: 'Gội thường', descEn: 'Drying only, no styling', descVi: 'Gội thường, không tạo kiểu', options: [{id: 'hair-wash-30', duration: 30, price: 150}] },
      { id: 'hair-nourish', nameEn: 'Nourishing Hair Wash', nameVi: 'Gội dưỡng sinh', descEn: '', descVi: '', options: [{id: 'hair-nourish-30', duration: 30, price: 250}, {id: 'hair-nourish-60', duration: 60, price: 450}] },
      { id: 'hair-herbal', nameEn: 'Herbal Hair Wash', nameVi: 'Gội thảo mộc', descEn: '', descVi: '', options: [{id: 'hair-herbal-60', duration: 60, price: 500}] }
    ]
  },
  {
    id: 'facial', categoryEn: 'Facial', categoryVi: 'Chăm sóc Da mặt',
    items: [
      { id: 'face-basic', nameEn: 'Basic Facial Cleaning', nameVi: 'Chăm sóc da cơ bản', descEn: '', descVi: '', options: [{id: 'face-basic-30', duration: 30, price: 300}] },
      { id: 'face-deep', nameEn: 'Deep Cleansing Facial With Mask', nameVi: 'Chăm sóc da chuyên sâu', descEn: '', descVi: '', options: [{id: 'face-deep-60', duration: 60, price: 500}] },
      { id: 'face-col', nameEn: 'Collagen Facial', nameVi: 'Chăm sóc da mặt bằng collagen', descEn: '', descVi: '', options: [{id: 'face-col-75', duration: 75, price: 700}] },
      { id: 'face-her', nameEn: 'Traditional Dao Herbal  Facial Therapy', nameVi: 'Chăm sóc da mặt bằng thảo dược của người Dao', descEn: '', descVi: '', options: [{id: 'face-col-75', duration: 75, price: 700}] }
    ]
  },
  {
    id: 'nail', categoryEn: 'Nail', categoryVi: 'Làm Nail',
    items: [
      { id: 'nail-rem', nameEn: 'Gel Removal', nameVi: 'Phá Gel', descEn: '', descVi: '', options: [{id: 'nail-rem-0', duration: null, price: 150}] },
      { id: 'nail-man', nameEn: 'Manicure', nameVi: 'Cắt, tẩy, ủ móng tay', descEn: '', descVi: '', options: [{id: 'nail-man-0', duration: null, price: 200}] },
      { id: 'nail-pre', nameEn: 'Predicure', nameVi: 'Cắt, tẩy, ủ móng chân', descEn: '', descVi: '', options: [{id: 'nail-pre-0', duration: null, price: 200}] },
      { id: 'nail-prewrap', nameEn: 'Predicure and Wrap', nameVi: 'Cắt, tẩy, ủ, chà móng chân', descEn: '', descVi: '', options: [{id: 'nail-prewrap-0', duration: null, price: 300}] },
      { id: 'nail-class', nameEn: 'Classic Nail Polish', nameVi: 'Sơn thường', descEn: '', descVi: '', options: [{id: 'nail-class-0', duration: null, price: 300}] },
      { id: 'nail-gel', nameEn: 'Gel Polish', nameVi: 'Sơn Gel', descEn: '', descVi: '', options: [{id: 'nail-gel-0', duration: null, price: 400}] },
      { id: 'nail-des', nameEn: 'Nail Design', nameVi: 'Thiết kế nail', descEn: '', descVi: '', options: [{id: 'nail-des-0', duration: null, price: 800}] },
      { id: 'nail-ext', nameEn: 'Nail Extension Design', nameVi: 'Nối móng thiết kế', descEn: '', descVi: '', options: [{id: 'nail-ext-0', duration: null, price: 900}] }
    ]
  },
  {
    id: 'wax', categoryEn: 'Waxing', categoryVi: 'Waxing (Tẩy lông)',
    items: [
      { id: 'wax-lip', nameEn: 'Upper Lip', nameVi: 'Mép môi', descEn: '', descVi: '', options: [{id: 'wax-lip-0', duration: null, price: 200}] },
      { id: 'wax-chin', nameEn: 'Chin', nameVi: 'Cằm', descEn: '', descVi: '', options: [{id: 'wax-chin-0', duration: null, price: 200}] },
      { id: 'wax-brow', nameEn: 'Eyebrows', nameVi: 'Lông mày', descEn: '', descVi: '', options: [{id: 'wax-brow-0', duration: null, price: 200}] },
      { id: 'wax-under', nameEn: 'Underarms', nameVi: 'Nách', descEn: '', descVi: '', options: [{id: 'wax-under-0', duration: null, price: 300}] },
      { id: 'wax-harm', nameEn: 'Half Arms', nameVi: 'Nửa tay', descEn: '', descVi: '', options: [{id: 'wax-harm-0', duration: null, price: 300}] },
      { id: 'wax-farm', nameEn: 'Full Arms', nameVi: 'Cả tay', descEn: '', descVi: '', options: [{id: 'wax-farm-0', duration: null, price: 400}] },
      { id: 'wax-hleg', nameEn: 'Half Legs', nameVi: 'Nửa chân', descEn: '', descVi: '', options: [{id: 'wax-hleg-0', duration: null, price: 400}] },
      { id: 'wax-fleg', nameEn: 'Full Legs', nameVi: 'Cả chân', descEn: '', descVi: '', options: [{id: 'wax-fleg-0', duration: null, price: 600}] },
      { id: 'wax-bikini', nameEn: 'Full Bikini', nameVi: 'Full Bikini', descEn: '', descVi: '', options: [{id: 'wax-bikini-0', duration: null, price: 500}] }
    ]
  },
  {
    id: 'eye', categoryEn: 'Eyelashes', categoryVi: 'Nối/Uốn Mi',
    items: [
      { id: 'eye-curl', nameEn: 'Eyelash Curling', nameVi: 'Uốn mi', descEn: '', descVi: '', options: [{id: 'eye-curl-0', duration: null, price: 500}] },
      { id: 'eye-ext', nameEn: 'Eyelash Extension', nameVi: 'Nối mi', descEn: '', descVi: '', options: [{id: 'eye-ext-0', duration: null, price: 600}] }
    ]
  },
  {
    id: 'steam', categoryEn: 'Herbal Steam', categoryVi: 'Xông/Ngâm Thảo dược',
    items: [
      { id: 'steam-foot', nameEn: 'Foot Herbal Steambath', nameVi: 'Xông Chân thảo dược', descEn: '', descVi: '', options: [{id: 'steam-foot-0', duration: null, price: 150}] },
      { id: 'steam-body', nameEn: 'Body Herbal Steambath', nameVi: 'Xông thảo dược Toàn thân', descEn: '', descVi: '', options: [{id: 'steam-body-0', duration: null, price: 250}] },
      { id: 'steam-foot', nameEn: 'Foot Herbal Steambath', nameVi: 'Ngâm Chân thảo dược', descEn: '', descVi: '', options: [{id: 'steam-foot-0', duration: null, price: 150}] },
      { id: 'steam-body', nameEn: 'Body Herbal Steambath', nameVi: 'Ngâm thảo dược Toàn thân', descEn: '', descVi: '', options: [{id: 'steam-body-0', duration: null, price: 250}] },
      { id: 'steam-bath', nameEn: 'Herbal Bath', nameVi: 'Ngâm tắm thảo dược', descEn: '', descVi: '', options: [{id: 'steam-bath-0', duration: null, price: 300}] }
    ]
  },
    {
    id: 'scrub', categoryEn: 'Body Skin Care', categoryVi: 'Tẩy da chết toàn thân',
    items: [
      { id: 'scrub-wrap-her', nameEn: 'Herbal Exfoliation And Body Wrap', nameVi: 'Tẩy ủ da body thảo dược', descEn: '', descVi: '', options: [{id: 'scrub-wrap-60', duration: 60, price: 500}] },
      { id: 'scrub-wrap-salt', nameEn: 'Salt Exfoliation And Body Wrap', nameVi: 'Tẩy ủ da body bằng muối', descEn: '', descVi: '', options: [{id: 'scrub-wrap-60', duration: 60, price: 500}] },
      { id: 'scrub-wrap-cof', nameEn: 'Coffee Exfoliation And Body Wrap', nameVi: 'Tẩy ủ da body cà phê', descEn: '', descVi: '', options: [{id: 'scrub-wrap-60', duration: 60, price: 500}] }
    ]
  }
];


const dict = {
  vi: {
    pageTitle: "MOCVIA Spa - Đặt lịch",
    headerTitle: "MOCVIA Spa",
    headerSubtitle: "Thư giãn & Phục hồi",
    menuTitle: "Dịch vụ của chúng tôi",
    cartTitle: "Giỏ hàng của bạn",
    emptyCart: "Giỏ hàng trống",
    total: "Tổng cộng",
    checkoutBtn: "Tiến hành Đặt lịch",
    formTitle: "Thông tin Đặt lịch",
    nameLabel: "Họ và tên (*)",
    phoneLabel: "Số điện thoại (*)",
    serviceTypeLabel: "Hình thức phục vụ",
    typeNow: "Làm ngay tại quán",
    typeBook: "Đặt lịch trước",
    dateLabel: "Ngày hẹn",
    timeLabel: "Giờ hẹn",
    confirmBtn: "Xác nhận Đặt lịch",
    cancelBtn: "Quay lại",
    thankYouTitle: "Cảm ơn quý khách!",
    thankYouMsg: "Yêu cầu đặt lịch của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
    backHomeBtn: "Trở về trang chủ",
    addBtn: "Thêm",
    mins: "'",
    priceUnit: "k",
    alertEmptyForm: "Vui lòng điền đầy đủ Họ tên và Số điện thoại!",
    alertEmptyDate: "Vui lòng chọn ngày và giờ hẹn!",
    alertError: "Có lỗi xảy ra khi gửi. Vui lòng thử lại!"
  },
  en: {
    pageTitle: "MOCVIA Spa - Booking",
    headerTitle: "MOCVIA Spa",
    headerSubtitle: "Wellness & Herbal Therapy",
    menuTitle: "Our Services",
    cartTitle: "Your Cart",
    emptyCart: "Cart is empty",
    total: "Total",
    checkoutBtn: "Proceed to Checkout",
    formTitle: "Booking Information",
    nameLabel: "Full Name (*)",
    phoneLabel: "Phone Number (*)",
    serviceTypeLabel: "Service Type",
    typeNow: "Walk-in (Serve Now)",
    typeBook: "Book in Advance",
    dateLabel: "Date",
    timeLabel: "Time",
    confirmBtn: "Confirm Booking",
    cancelBtn: "Go Back",
    thankYouTitle: "Thank You!",
    thankYouMsg: "Your booking request has been sent successfully. We will contact you shortly.",
    backHomeBtn: "Back to Home",
    addBtn: "Add",
    mins: "mins",
    priceUnit: "k",
    alertEmptyForm: "Please fill in your Name and Phone number!",
    alertEmptyDate: "Please select a date and time!",
    alertError: "An error occurred. Please try again later!"
  }
};


let currentLang = 'vi';
let cart = []; 

const langToggleBtn = document.getElementById('lang-toggle');
const currentLangText = document.getElementById('current-lang');
const menuContainer = document.getElementById('menu-container');

const cartItemsContainer = document.getElementById('cart-items');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const floatingCartBtn = document.getElementById('floating-cart');
const floatingCartCount = document.getElementById('floating-cart-count');
const cartContainer = document.getElementById('cart-container');
const cartPanel = document.getElementById('cart-panel');
const closeCartBtn = document.getElementById('close-cart-btn');

const checkoutModal = document.getElementById('checkout-modal');
const cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');
const bookingForm = document.getElementById('booking-form');
const serveTypeRadios = document.getElementsByName('serve_type');
const datetimeFields = document.getElementById('datetime-fields');
const dateInput = document.getElementById('cust-date');
const timeInput = document.getElementById('cust-time');
const submitBtn = document.getElementById('submit-btn');
const loadingSpinner = document.getElementById('loading-spinner');

const thankYouScreen = document.getElementById('thank-you-screen');
const backHomeBtn = document.getElementById('back-home-btn');

function init() {
  renderMenu();
  updateLanguage(currentLang);
  setupEventListeners();
}


function toggleLanguage() {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  currentLangText.textContent = currentLang.toUpperCase();
  
  updateLanguage(currentLang);
  
  renderMenu();
  renderCart();
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[lang][key]) {
      el.textContent = dict[lang][key];
    }
  });
  document.title = dict[lang].pageTitle;
}


function renderMenu() {
  menuContainer.innerHTML = ''; 
  
  menuData.forEach((category, index) => {
    const catName = currentLang === 'vi' ? category.categoryVi : category.categoryEn;
    
    const catDiv = document.createElement('div');
    catDiv.className = 'bg-white rounded-xl shadow-sm border border-spa-goldLight overflow-hidden';
    
    const catHeader = document.createElement('button');
    catHeader.className = 'accordion-header w-full flex justify-between items-center p-5 bg-white hover:bg-spa-goldLight/30 transition-colors text-left border-b border-transparent';
    catHeader.innerHTML = `
      <span class="font-serif font-bold text-lg text-spa-brown tracking-wide">${catName}</span>
      <i class="fa-solid fa-chevron-down accordion-icon text-spa-gold text-sm bg-spa-goldLight/50 p-2 rounded-full"></i>
    `;
    
    const catContent = document.createElement('div');
    catContent.className = 'accordion-content bg-white';
    
    if (index === 0) {
      catHeader.classList.add('open');
      catHeader.classList.replace('border-transparent', 'border-gray-100');
      catContent.classList.add('open');
    }

    catHeader.addEventListener('click', () => {
      catHeader.classList.toggle('open');
      catContent.classList.toggle('open');
      catHeader.classList.toggle('border-transparent');
      catHeader.classList.toggle('border-gray-100');
    });

    const itemsList = document.createElement('div');
    itemsList.className = 'divide-y divide-gray-100 px-5';

    category.items.forEach(item => {
      const itemName = currentLang === 'vi' ? item.nameVi : item.nameEn;
      const itemDesc = currentLang === 'vi' ? item.descVi : item.descEn;
      
      const itemDiv = document.createElement('div');
      itemDiv.className = 'py-4 first:pt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4';
      
      const infoDiv = document.createElement('div');
      infoDiv.className = 'flex-1 pr-4';
      infoDiv.innerHTML = `
        <h4 class="font-semibold text-spa-brown text-base">${itemName}</h4>
        ${itemDesc ? `<p class="text-sm text-gray-500 mt-1 leading-relaxed">${itemDesc}</p>` : ''}
      `;
      
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'flex flex-col gap-2 shrink-0 md:w-[220px]';

      item.options.forEach(opt => {
        const durationText = opt.duration ? `${opt.duration}${dict[currentLang].mins}` : '';
        const priceText = `${opt.price}${dict[currentLang].priceUnit}`;
        
        const optRow = document.createElement('div');
        optRow.className = 'flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100';
        
        optRow.innerHTML = `
          <div class="text-sm font-medium whitespace-nowrap flex items-center min-w-[70px]">
            ${durationText ? `<span class="text-spa-green mr-2 flex items-center gap-1"><i class="fa-regular fa-clock text-xs"></i>${durationText}</span>` : ''}
            <span class="text-spa-gold font-bold text-base">${priceText}</span>
          </div>
          <button onclick="addToCart('${opt.id}', '${item.id}')" class="bg-spa-gold/10 text-spa-gold border border-spa-gold px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-spa-gold hover:text-white transition-colors shadow-sm shrink-0">
            ${dict[currentLang].addBtn} <i class="fa-solid fa-plus ml-1 text-xs"></i>
          </button>
        `;
        optionsDiv.appendChild(optRow);
      });

      itemDiv.appendChild(infoDiv);
      itemDiv.appendChild(optionsDiv);
      itemsList.appendChild(itemDiv);
    });

    catContent.appendChild(itemsList);
    catDiv.appendChild(catHeader);
    catDiv.appendChild(catContent);
    menuContainer.appendChild(catDiv);
  });
}


window.addToCart = function(optionId, itemId) {
  let foundItem = null;
  let foundOption = null;
  
  for (let cat of menuData) {
    for (let item of cat.items) {
      if (item.id === itemId) {
        foundItem = item;
        foundOption = item.options.find(o => o.id === optionId);
        break;
      }
    }
    if (foundItem) break;
  }

  if (!foundOption) return;

  // Kiểm tra giỏ hàng
  const existing = cart.find(c => c.optionId === optionId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      optionId: optionId,
      itemId: itemId,
      nameVi: foundItem.nameVi,
      nameEn: foundItem.nameEn,
      price: foundOption.price,
      duration: foundOption.duration,
      qty: 1
    });
  }
  
  renderCart();
  
  const cartBtnIcon = floatingCartBtn.querySelector('i');
  cartBtnIcon.classList.add('fa-bounce');
  setTimeout(() => cartBtnIcon.classList.remove('fa-bounce'), 800);
};

/**
 * Tăng/giảm số lượng món, hoặc xoá khi về 0
 */
window.changeQty = function(optionId, delta) {
  const item = cart.find(c => c.optionId === optionId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.optionId !== optionId);
    }
    renderCart();
  }
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  
  // State: Trống
  if (cart.length === 0) {
    emptyCartMsg.style.display = 'block';
    checkoutBtn.disabled = true;
    cartTotalEl.textContent = '0';
    floatingCartCount.textContent = '0';
    return;
  }
  
  // State: Có hàng
  emptyCartMsg.style.display = 'none';
  checkoutBtn.disabled = false;
  
  let total = 0;
  let totalQty = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    totalQty += item.qty;
    
    const itemName = currentLang === 'vi' ? item.nameVi : item.nameEn;
    const durationText = item.duration ? `${item.duration}${dict[currentLang].mins}` : '';
    
    const cartEl = document.createElement('div');
    cartEl.className = 'flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100 shadow-sm';
    cartEl.innerHTML = `
      <div class="flex-1 pr-3">
        <p class="text-sm font-semibold text-spa-brown leading-snug">${itemName}</p>
        <div class="text-xs text-gray-500 mt-1 flex items-center">
          ${durationText ? `<span class="mr-2 text-spa-green font-medium"><i class="fa-regular fa-clock text-[10px] mr-1"></i>${durationText}</span>` : ''}
          <span class="text-spa-gold font-bold text-sm">${item.price}k</span>
        </div>
      </div>
      
      <!-- Increase & Decrease -->
      <div class="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-2 py-1 shrink-0">
        <button onclick="changeQty('${item.optionId}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-spa-gold hover:bg-white rounded-full transition-colors"><i class="fa-solid fa-minus text-xs"></i></button>
        <span class="text-sm font-bold w-4 text-center">${item.qty}</span>
        <button onclick="changeQty('${item.optionId}', 1)" class="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-spa-gold hover:bg-white rounded-full transition-colors"><i class="fa-solid fa-plus text-xs"></i></button>
      </div>
    `;
    cartItemsContainer.appendChild(cartEl);
  });
  
  // Bill
  cartTotalEl.textContent = total;
  floatingCartCount.textContent = totalQty;
}


function setupEventListeners() {
  
  // Language Toggle Button
  langToggleBtn.addEventListener('click', toggleLanguage);
  
  // Bật Modal Giỏ hàng trên Mobile
  floatingCartBtn.addEventListener('click', () => {
    cartContainer.classList.remove('hidden');
    setTimeout(() => {
      cartPanel.classList.remove('translate-y-full');
    }, 10);
  });

  // Tắt Modal Giỏ hàng
  closeCartBtn.addEventListener('click', closeCartMobile);
  cartContainer.addEventListener('click', (e) => {
    if (e.target === cartContainer) closeCartMobile();
  });

  function closeCartMobile() {
    cartPanel.classList.add('translate-y-full');
    setTimeout(() => {
      cartContainer.classList.add('hidden');
    }, 300);
  }

  // Checkout
  checkoutBtn.addEventListener('click', () => {
    if(window.innerWidth < 1024) closeCartMobile(); 
    checkoutModal.classList.remove('hidden');
    checkoutModal.classList.add('flex', 'modal-enter');
  });

  cancelCheckoutBtn.addEventListener('click', () => {
    checkoutModal.classList.remove('modal-enter');
    checkoutModal.classList.add('modal-leave');
    setTimeout(() => {
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex', 'modal-leave');
    }, 300);
  });

  serveTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'book') {
        datetimeFields.classList.remove('hidden');
        datetimeFields.classList.add('grid');
        dateInput.required = true;
        timeInput.required = true;
      } else {
        datetimeFields.classList.add('hidden');
        datetimeFields.classList.remove('grid');
        dateInput.required = false;
        timeInput.required = false;
        dateInput.value = '';
        timeInput.value = '';
      }
    });
  });

  // Xử lý Submit Form lên Telegram
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // No reload
    
    // Lấy dữ liệu form
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const isNow = document.querySelector('input[name="serve_type"]:checked').value === 'now';
    const date = dateInput.value;
    const time = timeInput.value;

    if (!name || !phone) {
      alert(dict[currentLang].alertEmptyForm);
      return;
    }
    if (!isNow && (!date || !time)) {
      alert(dict[currentLang].alertEmptyDate);
      return;
    }

    let total = 0;
    const cartTextArr = cart.map(item => {
      total += (item.price * item.qty);
      const dur = item.duration ? `(${item.duration}p)` : '';
      return `- ${item.nameVi} ${dur}: ${item.qty} x ${item.price}k`;
    });
    
    const cartText = cartTextArr.join('\n');

    const msg = `
🛎 <b>CÓ ĐƠN ĐẶT LỊCH MỚI</b> 🛎

👤 <b>Khách hàng:</b> ${name}
📞 <b>SĐT:</b> ${phone}
📅 <b>Hình thức:</b> ${isNow ? 'Làm ngay tại quán' : 'Đặt lịch trước'}
${!isNow ? `🗓 <b>Ngày:</b> ${date}\n⏰ <b>Giờ:</b> ${time}` : ''}

📋 <b>Dịch vụ đã chọn:</b>
${cartText}

💰 <b>Tổng tiền:</b> <b>${total}k</b>
`;

    // Gọi API Telegram qua fetch
    submitBtn.disabled = true;
    loadingSpinner.classList.remove('hidden');

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: msg,
          parse_mode: 'HTML' // Yêu cầu Telegram dịch thẻ <b> <i>
        })
      });

      if (response.ok) {
        // Tắt Modal Form
        checkoutModal.classList.add('hidden');
        checkoutModal.classList.remove('flex', 'modal-leave', 'modal-enter');
        
        // Thank You
        thankYouScreen.classList.remove('hidden');
        thankYouScreen.classList.add('flex', 'modal-enter');
        
        // Dọn dẹp giỏ hàng & Form
        cart = [];
        renderCart();
        bookingForm.reset();
        
        // Reset state của ngày giờ
        dateInput.required = false;
        timeInput.required = false;
        datetimeFields.classList.add('hidden');
        datetimeFields.classList.remove('grid');
        
      } else {
        alert(dict[currentLang].alertError);
      }
    } catch (error) {
      console.error(error);
      alert(dict[currentLang].alertError);
    } finally {
      submitBtn.disabled = false;
      loadingSpinner.classList.add('hidden');
    }
  });

  // Nút Về trang chủ (đóng Thank You)
  backHomeBtn.addEventListener('click', () => {
    thankYouScreen.classList.remove('modal-enter');
    thankYouScreen.classList.add('modal-leave');
    setTimeout(() => {
      thankYouScreen.classList.add('hidden');
      thankYouScreen.classList.remove('flex', 'modal-leave');
    }, 300); // 300ms
  });
}

init();
