const intro = document.getElementById("intro");
const aboutDialog = document.getElementById("aboutDialog");
const introName = document.getElementById("introName");
const brandName = document.getElementById("brandName");
const languageButtons = document.querySelectorAll(".language-button");
const discountTab = document.getElementById("discountTab");
const targetTab = document.getElementById("targetTab");
const profitTab = document.getElementById("profitTab");
const discountPanel = document.getElementById("discountPanel");
const targetPanel = document.getElementById("targetPanel");
const profitPanel = document.getElementById("profitPanel");
const originalPrice = document.getElementById("originalPrice");
const discountRate = document.getElementById("discountRate");
const discountedPrice = document.getElementById("discountedPrice");
const discountDetail = document.getElementById("discountDetail");
const discountCalculation = document.getElementById("discountCalculation");
const salesTarget = document.getElementById("salesTarget");
const actualSales = document.getElementById("actualSales");
const targetPercent = document.getElementById("targetPercent");
const targetProgress = document.getElementById("targetProgress");
const progressTrack = document.querySelector(".progress-track");
const targetDetail = document.getElementById("targetDetail");
const targetCalculation = document.getElementById("targetCalculation");
const purchasePrice = document.getElementById("purchasePrice");
const salePrice = document.getElementById("salePrice");
const profitDiscountRate = document.getElementById("profitDiscountRate");
const profitDiscountAmount = document.getElementById("profitDiscountAmount");
const profitPercentField = document.getElementById("profitPercentField");
const profitAmountField = document.getElementById("profitAmountField");
const profitDiscountModes = document.querySelectorAll('input[name="profitDiscountType"]');
const profitLossResult = document.getElementById("profitLossResult");
const profitSalePrice = document.getElementById("profitSalePrice");
const profitCalculation = document.getElementById("profitCalculation");

const moneyFormat = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
const percentFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const translations = {
  km: {
    pageTitle: "កម្មវិធីគណនាតម្លៃ និងការលក់ | វ៉ន ដារ៉ា",
    creatorName: "វ៉ន ដារ៉ា",
    welcome: "ស្វាគមន៍",
    introCredit: "អ្នកបង្កើត · Dragon Calculator",
    skipIntro: "ចូលប្រើម៉ាស៊ីនគិតលេខ",
    mainLabel: "កម្មវិធីគណនាតម្លៃ និងការលក់",
    brandTagline: "ភាពអាចទៅរួច",
    languageSelect: "ជ្រើសរើសភាសា",
    aboutButton: "អំពីកម្មវិធី",
    workspaceEyebrow: "ផ្ទាំងគ្រប់គ្រងសម្រាប់ការលក់",
    workspaceTitle: "ឧបករណ៍គណនាសម្រាប់អាជីវកម្ម",
    workspaceDescription: "គណនាតម្លៃលក់ ការបញ្ចុះ និងលទ្ធផលប្រចាំថ្ងៃរបស់អ្នក",
    toolTabList: "ប្រភេទមុខងារ",
    discountTab: "បញ្ចុះតម្លៃ",
    discountTabNote: "Discount price",
    targetTab: "គោលដៅលក់",
    targetTabNote: "Sales target",
    profitTab: "ចំណេញ/ខាត",
    profitTabNote: "Profit & loss",
    discountHeading: "គណនាតម្លៃក្រោយបញ្ចុះ",
    discountDescription: "បញ្ចូលតម្លៃដើម និងភាគរយបញ្ចុះតម្លៃ",
    originalPrice: "តម្លៃដើម ($)",
    discountRate: "បញ្ចុះតម្លៃ (%)",
    discountResultLabel: "តម្លៃក្រោយបញ្ចុះ",
    calculationLabel: "របៀបគណនា",
    targetHeading: "គណនាភាគរយសម្រេចគោលដៅលក់",
    targetDescription: "ប្រៀបធៀបការលក់ជាក់ស្តែងជាមួយគោលដៅ",
    salesTarget: "គោលដៅលក់ ($)",
    actualSales: "លក់បាន ($)",
    targetResultLabel: "សម្រេចបាន",
    progressLabel: "សម្រេចគោលដៅ",
    profitHeading: "គណនាចំណេញ ឬខាតក្រោយបញ្ចុះ",
    profitDescription: "ប្រៀបធៀបតម្លៃលក់ក្រោយបញ្ចុះនឹងតម្លៃទិញចូល",
    purchasePrice: "តម្លៃទិញចូល ($)",
    salePrice: "តម្លៃលក់ចេញ ($)",
    discountMode: "ជ្រើសរើសរបៀបបញ្ចុះ",
    percentMode: "ភាគរយ",
    percentModeExample: "ឧ. បញ្ចុះ 50%",
    amountMode: "ចំនួនដុល្លារ",
    amountModeExample: "ឧ. បញ្ចុះ $30",
    profitPercentLabel: "បញ្ចុះតម្លៃ (%)",
    profitAmountLabel: "បញ្ចុះតម្លៃ ($)",
    profitResultLabel: "លទ្ធផលក្រោយបញ្ចុះ",
    aboutEyebrow: "អំពីកម្មវិធីនេះ",
    aboutTitle: "អំពីកម្មវិធី",
    close: "បិទ",
    aboutParagraph1: "ខ្ញុំបាទឈ្មោះ វ៉ន ដារ៉ា មិនមែនជាអ្នកជំនាញផ្នែក IT ឬជាអ្នកអភិវឌ្ឍន៍គេហទំព័រអាជីពនោះទេ។ គេហទំព័រតូចមួយនេះ ត្រូវបានបង្កើតឡើងដោយផ្អែកលើចំណង់ចំណូលចិត្ត ការចង់ចេះចង់ដឹង និងបំណងប្រាថ្នាចង់ស្វែងយល់អ្វីថ្មីៗរបស់ខ្ញុំប៉ុណ្ណោះ។",
    aboutParagraph2: "ខ្ញុំជឿថា ការរៀនសូត្រមិនចាំបាច់ចាប់ផ្ដើមពីភាពជាអ្នកជំនាញនោះទេ ប៉ុន្តែអាចចាប់ផ្ដើមពីការចង់ដឹង ការហ៊ានសាកល្បង និងការមិនបោះបង់នៅពេលជួបបញ្ហា។",
    aboutParagraph3: "ទោះបីជាគេហទំព័រនេះមិនទាន់ល្អឥតខ្ចោះក៏ដោយ ក៏វាជាស្នាដៃតូចមួយដែលកើតចេញពីការខិតខំប្រឹងប្រែង និងការរៀនសូត្ររបស់ខ្ញុំផ្ទាល់។",
    aboutParagraph4: "សូមអរគុណចំពោះអ្នកដែលបានចំណាយពេលចូលមកទស្សនា និងគាំទ្រស្នាដៃតូចមួយនេះ។",
    aboutSignature: "ដោយក្តីគោរព និងអរគុណពីខ្ញុំបាទ វ៉ន ដារ៉ា។",
    invalidDiscount: "បញ្ចូលតម្លៃ និងភាគរយ 0–100% ឱ្យបានត្រឹមត្រូវ",
    discountSavings: "បញ្ចុះតម្លៃបាន {amount}",
    discountSuffix: "បញ្ចុះ",
    invalidTarget: "បញ្ចូលគោលដៅ និងចំនួនលក់ឱ្យបានត្រឹមត្រូវ",
    targetRemaining: "នៅសល់ {amount} ដើម្បីដល់គោលដៅ",
    targetAbove: "លើសគោលដៅ {amount}",
    targetMet: "សម្រេចបានគោលដៅពេញលេញ",
    invalidProfit: "បញ្ចូលតម្លៃឱ្យបានត្រឹមត្រូវ",
    amountExceedsSale: "ចំនួនបញ្ចុះមិនអាចលើសតម្លៃលក់បានទេ",
    saleAfterDiscount: "តម្លៃលក់ក្រោយបញ្ចុះ៖ {amount}",
    loss: "ខាត {amount}",
    profit: "ចំណេញ {amount}",
    breakEven: "ស្មើដើម $0"
  },
  en: {
    pageTitle: "Sales & Discount Calculator | Vorn Dara",
    creatorName: "Vorn Dara",
    welcome: "Welcome",
    introCredit: "Created by Vorn Dara · Dragon Calculator",
    skipIntro: "Open the calculator",
    mainLabel: "Sales and discount calculator",
    brandTagline: "Possibility",
    languageSelect: "Select language",
    aboutButton: "About",
    workspaceEyebrow: "SALES PERFORMANCE WORKSPACE",
    workspaceTitle: "Business Sales Calculator",
    workspaceDescription: "Calculate selling prices, discounts, and daily sales performance.",
    toolTabList: "Calculator functions",
    discountTab: "Discount",
    discountTabNote: "Discount price",
    targetTab: "Sales target",
    targetTabNote: "Target progress",
    profitTab: "Profit / loss",
    profitTabNote: "Profit & loss",
    discountHeading: "Discounted price",
    discountDescription: "Enter the original price and discount percentage.",
    originalPrice: "Original price ($)",
    discountRate: "Discount (%)",
    discountResultLabel: "Price after discount",
    calculationLabel: "How it's calculated",
    targetHeading: "Sales target completion",
    targetDescription: "Compare actual sales with your target.",
    salesTarget: "Sales target ($)",
    actualSales: "Actual sales ($)",
    targetResultLabel: "Target achieved",
    progressLabel: "Target progress",
    profitHeading: "Profit or loss after discount",
    profitDescription: "Compare the discounted selling price with your purchase cost.",
    purchasePrice: "Purchase cost ($)",
    salePrice: "Selling price ($)",
    discountMode: "Choose a discount type",
    percentMode: "Percentage",
    percentModeExample: "e.g. 50% off",
    amountMode: "Fixed amount",
    amountModeExample: "e.g. $30 off",
    profitPercentLabel: "Discount (%)",
    profitAmountLabel: "Discount amount ($)",
    profitResultLabel: "Result after discount",
    aboutEyebrow: "ABOUT THIS PROJECT",
    aboutTitle: "About this app",
    close: "Close",
    aboutParagraph1: "My name is Vorn Dara. I am not an IT expert or a professional web developer. I created this small website out of personal interest, curiosity, and a desire to explore new things.",
    aboutParagraph2: "I believe learning does not have to begin with being an expert. It can start with curiosity, the courage to try, and not giving up when challenges arise.",
    aboutParagraph3: "Although this website is not perfect yet, it is a small project made through my own effort and learning.",
    aboutParagraph4: "Thank you to everyone who has taken the time to visit and support this small project.",
    aboutSignature: "With respect and gratitude, Vorn Dara.",
    invalidDiscount: "Enter a valid price and a discount from 0% to 100%.",
    discountSavings: "Discount amount: {amount}",
    discountSuffix: "discount",
    invalidTarget: "Enter a valid target and actual sales amount.",
    targetRemaining: "{amount} remaining to reach the target",
    targetAbove: "{amount} above target",
    targetMet: "Target achieved",
    invalidProfit: "Enter valid prices and a valid discount.",
    amountExceedsSale: "The discount cannot exceed the selling price.",
    saleAfterDiscount: "Selling price after discount: {amount}",
    loss: "Loss: {amount}",
    profit: "Profit: {amount}",
    breakEven: "Break-even: $0"
  }
};

let currentLanguage = "km";

function translate(key, values) {
  let text = translations[currentLanguage][key];
  if (values) {
    Object.entries(values).forEach(([name, value]) => {
      text = text.split(`{${name}}`).join(value);
    });
  }
  return text;
}

function setLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(translations, language)) {
    throw new Error(`Unsupported language: ${language}`);
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translate("pageTitle");
  introName.textContent = translate("creatorName");
  brandName.textContent = translate("creatorName");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  updateDiscount();
  updateTarget();
  updateProfitLoss();
}

function formatMoney(value) {
  return `$${moneyFormat.format(value)}`;
}

function roundCurrency(value) {
  return Math.round((value + Math.sign(value) * Number.EPSILON) * 100) / 100;
}

function readValidNumber(input) {
  if (!input.value.trim() || !input.validity.valid) return null;
  const value = Number(input.value);
  return Number.isFinite(value) ? value : null;
}

function updateDiscount() {
  const price = readValidNumber(originalPrice);
  const rate = readValidNumber(discountRate);
  if (price === null || rate === null) {
    discountedPrice.textContent = "—";
    discountDetail.textContent = translate("invalidDiscount");
    discountCalculation.textContent = "—";
    return;
  }

  const savings = price * rate / 100;
  const finalPrice = price - savings;
  discountedPrice.textContent = formatMoney(finalPrice);
  discountDetail.textContent = translate("discountSavings", { amount: formatMoney(savings) });
  discountCalculation.textContent = `${formatMoney(price)} × ${percentFormat.format(rate)}% = ${formatMoney(savings)} ${translate("discountSuffix")}; ${formatMoney(price)} − ${formatMoney(savings)} = ${formatMoney(finalPrice)}`;
}

function updateTarget() {
  const target = readValidNumber(salesTarget);
  const actual = readValidNumber(actualSales);
  if (target === null || target <= 0 || actual === null) {
    targetPercent.textContent = "—";
    targetProgress.style.width = "0%";
    progressTrack.setAttribute("aria-valuenow", "0");
    targetDetail.textContent = translate("invalidTarget");
    targetCalculation.textContent = "—";
    return;
  }

  const completion = actual / target * 100;
  const progress = Math.min(completion, 100);
  targetPercent.textContent = `${percentFormat.format(completion)}%`;
  targetProgress.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", String(progress));
  targetCalculation.textContent = `${formatMoney(actual)} ÷ ${formatMoney(target)} × 100 = ${percentFormat.format(completion)}%`;

  if (actual < target) {
    targetDetail.textContent = translate("targetRemaining", { amount: formatMoney(target - actual) });
  } else if (actual > target) {
    targetDetail.textContent = translate("targetAbove", { amount: formatMoney(actual - target) });
  } else {
    targetDetail.textContent = translate("targetMet");
  }
}

function updateProfitLoss() {
  const cost = readValidNumber(purchasePrice);
  const price = readValidNumber(salePrice);
  const selectedMode = document.querySelector('input[name="profitDiscountType"]:checked').value;
  const discountInput = selectedMode === "percent" ? profitDiscountRate : profitDiscountAmount;
  if (price === null) {
    profitDiscountAmount.removeAttribute("max");
  } else {
    profitDiscountAmount.max = String(price);
  }
  const discountValue = readValidNumber(discountInput);
  if (cost === null || price === null || discountValue === null) {
    profitLossResult.textContent = "—";
    profitLossResult.classList.remove("loss", "profit", "break-even");
    const discountExceedsPrice = selectedMode === "amount"
      && price !== null
      && profitDiscountAmount.value !== ""
      && Number(profitDiscountAmount.value) > price;
    profitSalePrice.textContent = discountExceedsPrice
      ? translate("amountExceedsSale")
      : translate("invalidProfit");
    profitCalculation.textContent = "—";
    return;
  }

  const discountAmount = roundCurrency(selectedMode === "percent"
    ? price * discountValue / 100
    : discountValue);
  const discountedSalePrice = roundCurrency(price - discountAmount);
  const profit = roundCurrency(discountedSalePrice - cost);
  profitSalePrice.textContent = translate("saleAfterDiscount", { amount: formatMoney(discountedSalePrice) });
  profitLossResult.classList.remove("loss", "profit", "break-even");

  if (profit < 0) {
    profitLossResult.textContent = translate("loss", { amount: formatMoney(Math.abs(profit)) });
    profitLossResult.classList.add("loss");
  } else if (profit > 0) {
    profitLossResult.textContent = translate("profit", { amount: formatMoney(profit) });
    profitLossResult.classList.add("profit");
  } else {
    profitLossResult.textContent = translate("breakEven");
    profitLossResult.classList.add("break-even");
  }

  const difference = profit < 0 ? `−${formatMoney(Math.abs(profit))}` : formatMoney(profit);
  const resultLabel = profit < 0
    ? translate("loss", { amount: formatMoney(Math.abs(profit)) })
    : profit > 0
      ? translate("profit", { amount: formatMoney(profit) })
      : translate("breakEven");
  const discountCalculation = selectedMode === "percent"
    ? `${formatMoney(price)} × (1 − ${percentFormat.format(discountValue)}%) = ${formatMoney(discountedSalePrice)}`
    : `${formatMoney(price)} − ${formatMoney(discountAmount)} = ${formatMoney(discountedSalePrice)}`;
  profitCalculation.textContent = `${discountCalculation}; ${formatMoney(discountedSalePrice)} − ${formatMoney(cost)} = ${difference} (${resultLabel})`;
}

function updateProfitDiscountMode() {
  const selectedMode = document.querySelector('input[name="profitDiscountType"]:checked').value;
  const usePercent = selectedMode === "percent";
  profitPercentField.hidden = !usePercent;
  profitAmountField.hidden = usePercent;
  profitDiscountRate.disabled = !usePercent;
  profitDiscountAmount.disabled = usePercent;
  profitDiscountModes.forEach((input) => {
    input.closest(".mode-option").classList.toggle("selected", input.checked);
  });
  updateProfitLoss();
}

function selectTool(selectedTab) {
  [
    { tab: discountTab, panel: discountPanel },
    { tab: targetTab, panel: targetPanel },
    { tab: profitTab, panel: profitPanel }
  ].forEach(({ tab, panel }) => {
    const selected = tab === selectedTab;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    panel.hidden = !selected;
  });
}

document.getElementById("discountForm").addEventListener("submit", (event) => {
  event.preventDefault();
});
document.getElementById("targetForm").addEventListener("submit", (event) => {
  event.preventDefault();
});
document.getElementById("profitForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

[originalPrice, discountRate].forEach((input) => {
  input.addEventListener("input", updateDiscount);
});
[salesTarget, actualSales].forEach((input) => {
  input.addEventListener("input", updateTarget);
});
[purchasePrice, salePrice, profitDiscountRate, profitDiscountAmount].forEach((input) => {
  input.addEventListener("input", updateProfitLoss);
});
profitDiscountModes.forEach((input) => {
  input.addEventListener("change", updateProfitDiscountMode);
});
languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

discountTab.addEventListener("click", () => selectTool(discountTab));
targetTab.addEventListener("click", () => selectTool(targetTab));
profitTab.addEventListener("click", () => selectTool(profitTab));
document.getElementById("aboutButton").addEventListener("click", () => {
  aboutDialog.showModal();
});
document.getElementById("closeAbout").addEventListener("click", () => {
  aboutDialog.close();
});
aboutDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") aboutDialog.close();
});
aboutDialog.addEventListener("click", (event) => {
  if (event.target === aboutDialog) aboutDialog.close();
});
document.getElementById("skipIntro").addEventListener("click", () => {
  intro.classList.add("dismissed");
});

window.setTimeout(() => {
  intro.classList.add("dismissed");
}, 3600);

setLanguage("km");
