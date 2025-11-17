# 🐾 Cat-alog – Exxeta Coding Challenge 2025

Cat-alog is a mobile web application developed as part of the Exxeta Coding Challenge 2025.
The app uses the public *The Cat API* and allows you to view and compare cat breeds.
It is optimized for mobile use.

🔗 **Live-Version:** https://cat-alog.de

---

## Features

### List view (overview of all cat breeds) and detail view (modal)
For the selection, weighting and presentation of the most important CatAPI properties the results of the **Cat Survey 2027 by markt.de** were used.
🔗 https://www.markt.de/contentId,katzenumfrage-ergebnisse/inhalt.htm


### Future: Voting, Images-Search and Favorites 

---

## Tech Stack

| Use        | Technology |
|----------------|-------------|
| Framework      | Angular 20.3.10 |
| UI Toolkit     | Ionic 7.2.1 |
| Script Language| Typescript 5.8 |
| Style Language | SCSS  |
| API            | The Cat API |
| Hosting        | Firebase Hosting |
| CI/CD          | GitHub Actions |
| Icons          | Ionicons |

🔗 https://thecatapi.com

---

## Architecture
* **`.github/workflows`** → .yml for github actions
* **`src/app/`**
    * **`cat-api-service/`** → API Calls + HttpClient
    * **`interfaces/`** → Typed models (CatBreed)
    * **`shared-components/`** → Reusable UI components
        * `cat-detail-view/`
        * `cat-list-item/`
        * `ranking/`
    * **`tabs/`** → Main navigation (Ionic Tabs)
    * **`tab1/ tab2/ tab3/`** → List view, Search and Favorits
    * **`app.routes.ts`** → Routing

## 🔧 Development Setup

### Requirements
> Node v20.18.2

```bash
npm install -g @ionic/cli @angular/cli
```

```bash
npm i
```

### Run servcer
```bash
ionic serve
```

## Deployment
Deployment is automated via GitHub Actions (via merge or pull request):

1. `npm ci`
2. `npm run build:prod`
3. Upload via `FirebaseExtended/action-hosting-deploy`

**Produktions-Host:**  
➡️ https://cat-alog.de

---

