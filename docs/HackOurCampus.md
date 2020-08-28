---
id: HackOurCampus
title: Full Stack Integration Workshop
---

## Prerequisites

For this workshop you will need the following programs installed:

- **Node.js**: Install Node LTS from [here](https://nodejs.org/en/download/)
- **Yarn**: Follow the instructions [here](https://classic.yarnpkg.com/en/docs/install) (we will use yarn over npm)
- **Flask**: in terminal run `pip install flask`
- **Google Cloud CLI**: Select your operating system [here](https://cloud.google.com/sdk/docs/quickstarts) and follow directions in `Before you begin`.
- **Firebase**: Create an account on [Firebase](https://firebase.google.com/)

## Deployment

To deploy your web application means to put it on a Web server so others can access it via the internet. We will be demonstrating how to deploy your projects (both frontend and backend) using [Firebase](https://firebase.google.com/).

:::note

### Wait, what is Firebase?

Firebase is a platform built by Google which consists of authentication, hosting, file storage, cloud functions, a realtime NoSQL database, and more. You can learn more about its features at [firebase.google.com](https://firebase.google.com/)
:::

### Backend Deployment

We will be deploying our backend Flask app on Google Cloud Run. For the backend, we will be using the following sample Flask endpoint (refer to the [backend workshop](https://backend-course.cornellappdev.com/hackourcampus) for more info):

```python title="app.py"
from flask import Flask, request, jsonify

app = Flask(__name__)

# All the products we are selling
PRODUCTS = [
  { 'category': 'Sporting Goods', 'price': '$49.99', 'stocked': True, 'name': 'Football' },
  { 'category': 'Sporting Goods', 'price': '$9.99', 'stocked': True, 'name': 'Baseball' },
  { 'category': 'Sporting Goods', 'price': '$29.99', 'stocked': False, 'name': 'Basketball' },
  { 'category': 'Electronics', 'price': '$999.99', 'stocked': True, 'name': 'iPad Pro' },
  { 'category': 'Electronics', 'price': '$399.99', 'stocked': False, 'name': 'iPhone 5' },
  { 'category': 'Electronics', 'price': '$199.99', 'stocked': True, 'name': 'Nexus 7' }
]

# endpoint to handle GET requests at /products, we will return all the entries in PRODUCTS
@app.route('/products')
def get_all_products():
    return jsonify({'products': PRODUCTS})

if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=8080)
```

#### Firebase Setup

1. Navigate to [Firebase](https://firebase.google.com/) and create a new project
2. Initialize cloud storage and firestore
3. Enable billing – it won’t actually charge you
4. Navigate to [Google Cloud Platform](https://console.cloud.google.com/) search for `Cloud Run API`, and enable it
5. Go to `IAM` on the navigation bar on the left, and add the `cloud build` and `cloud run` permissions to the `<project-number>-compute@developer.gserviceaccount.com`
6. Go to service accounts and under `actions` create a new key for the same account – move this file to your project directory and name it `key.json`

#### Deployment Process

1. First, you should have downloaded the gcloud command line interface (CLI) as per the pre-requisites
2. In your project directory, type `gcloud auth login` and login with the same account used to create the project
3. Type `gcloud config set project <project-id>`
4. Then, modify the provided `cloudbuild.yaml` file to use your project name in place of ours, and your developer account email instead of ours
5. Run `gcloud builds submit --tag gcr.io/PROJECT_ID/products`. On success you should see a _SUCCESS_ message containing image name `gcr.io/PROJECT_ID/products`
6. Run `gcloud beta run deploy --image gcr.io/PROJECT_ID/products`. Select region `us-central1`, confirm the service name `products`, respond `y` to **allow unauthenticated invocations**. On success, you should see a service URL like **https://products-RANDOM_HASH-uc.a.run.app**.

### Frontend Deployment

#### Example Code

For the frontend, we used the example code [here](./lecture7#filterable-product-table-example) taken from React docs [here](https://reactjs.org/docs/thinking-in-react.html), but instead of declaring all the products in the `App` component, we made a GET call to our backend `/products` endpoint in the `FilterableProductTable` to fetch the products list. The relevant changes are below:

:::note
If you want to learn more about setting up a frontend React application, checkout lecture [5](./lecture5), [6](./lecture6), [7](./lecture7), [8](./lecture8).
:::

```jsx title="App.js"
import React from 'react';
import FilterableProductTable from './FilterableProductTable';

const App = () => (
  <div className="App">
    <FilterableProductTable />
  </div>
);

export default App;
```

```jsx title="FilterableProductTable.jsx"
const FilterableProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (e) => setFilterText(e.target.value);
  const handleCheckBoxChange = (e) => setInStockOnly(e.target.checked);

  // this function fetches the products data from our backend endpoint
  useEffect(() => {
    fetch('<BACKEND DEPLOYED URL>/products')
      .then((resp) => resp.json())
      .then(({ products }) => setProducts(products));
  }, []);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        handleFilterTextChange={handleFilterTextChange}
        handleCheckBoxChange={handleCheckBoxChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};
```

In testing, we can add this line to `package.json` to proxy our requests to a locally deployed backend:

```json title="package.json"
  "proxy": "http://localhost:5000",
```

The port is 5000 because our backend is running on port 5000 of localhost (equivalently, 0.0.0.0).

#### Deployment Process

To deploy frontend to Firebase enter the following commands into terminal:

```bash
yarn global add firebase-tools
yarn build
firebase login
firebase init
<answer the questions>
firebase deploy
```

`yarn build` will create a `build` directory containing a production build of your application.

`firebase login` will prompt you to log in by opening up a web browser if you're not already signed it.

`firebase init` will ask you the following questions:

1. Which Firebase CLI features do you want to set up for this folder? Select **Hosting**.
2. Associate with a Firebase project. **Select your Firebase project**
3. What do you want as your public directory? **build**
4. Configure as a single-page app (rewrite all urls to /index.html)? **No**
5. Overwrite `index.html`? **No**

To direct requests from your deployed frontend to backend, add this to `firebase.json`:

```json title="firebase.json"
"rewrites": [
  {
    "source": "**",
    "run": {
      "serviceId": "products",
      "region": "us-central1"
    }
  }
]
```

Running `firebase deploy` will push your build assets to Firebase remote server and give you a URL to your live Firebase app site! Now you can share this site and access it over the internet.
