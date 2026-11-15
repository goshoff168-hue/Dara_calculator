# Sales Calculator

គេហទំព័រនេះជាគម្រោង HTML, CSS និង JavaScript សុទ្ធ។ មិនចាំបាច់ដំឡើង server ឬ build tool ទេ។

## បង្ហោះលើ GitHub Pages

1. បង្កើត GitHub repository ថ្មីមួយ (ជ្រើសរើស **Public** ប្រសិនបើប្រើ GitHub Free)។
2. បញ្ចូលឯកសារគម្រោងទាំងអស់ទៅក្នុង branch `main` រួមទាំង `.github/workflows/deploy.yml`។
3. នៅក្នុង repository ចូល **Settings → Pages** ហើយកំណត់ **Source** ទៅជា **GitHub Actions**។
4. រង់ចាំ workflow “Deploy website to GitHub Pages” បញ្ចប់។ GitHub នឹងបង្ហាញតំណគេហទំព័រនៅក្នុង **Settings → Pages**។

## កែប្រែ និងបច្ចុប្បន្នភាព

កែ `index.html`, `styles.css` ឬ `script.js` រួច push ការផ្លាស់ប្តូរទៅ branch `main`។ GitHub Actions នឹងបង្ហោះកំណែថ្មីដោយស្វ័យប្រវត្តិ។
