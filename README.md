# LuxeLane Ecommerce Application

LuxeLane is a comprehensive ecommerce application built with the MERN stack (MongoDB, Express, React, Node.js). The project includes separate frontend, backend, and admin interfaces, and supports user authentication, product management, order processing, and payment integration.

![image](https://github.com/user-attachments/assets/7a713304-ae9a-46d5-b088-b8f7155fa738)

Live : https://luxelane-pied.vercel.app/


## Features

### User
* Browse collections (Men, Women, Kids) and subcategories (Topwear, Bottomwear, Winter Wear).
* Sort products by price and relevance
* Place orders with payment options (COD, Stripe)
* View order history and bestseller products.

### Admin
* Manage product collections.
* Add new products to the store.
* Update product details and order status.
* Delete products from the store.

## Technologies Used

* **Frontend**: React, Tailwind CSS, Axios, React Router, React Toastify
* **Backend**: Express, MongoDB, Mongoose, JWT, Multer, Cloudinary, Stripe
* **Admin Panel**: React, Tailwind CSS, Axios, React Router, React Toastify

## Installation

### Prerequisites
* Node.js
* MongoDB (running locally or through a cloud service)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Parthi6/LuxeLane_Ecommerce_Mern.git
```

2. Navigate to the project directory:
```bash
cd LuxeLane_Ecommerce_Mern
```

3. Install dependencies for each module:

   * Frontend:
   ```bash
   cd frontend
   npm install
   ```

   * Backend:
   ```bash
   cd backend
   npm install
   ```

   * Admin:
   ```bash
   cd admin
   npm install
   ```

4. Run the development servers:

   * Frontend:
   ```bash
   npm run dev
   ```

   * Backend:
   ```bash
   npm run server
   ```

   * Admin:
   ```bash
   npm run dev
   ```

## Environment Variables

### Backend `.env`
```
MONGODB_URI="<your_mongodb_uri>"
CLOUDINARY_API_KEY="<your_cloudinary_api_key>"
CLOUDINARY_SECRET_KEY="<your_cloudinary_secret_key>"
CLOUDINARY_NAME="<your_cloudinary_name>"
JWT_SECRET="<your_jwt_secret>"
ADMIN_EMAIL="<your_admin_email>"
ADMIN_PASSWORD="<your_admin_password>"
STRIPE_SECRET_KEY="<your_stripe_secret_key>"
```

### Admin `.env`
```
VITE_BACKEND_URL='http://localhost:4000'
```

### Frontend `.env`
```
VITE_BACKEND_URL=http://localhost:4000
```

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions are greatly appreciated!

## License

This project is licensed under the MIT License. See the LICENSE file for details.
