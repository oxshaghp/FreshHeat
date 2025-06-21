# FreshHeat - Restaurant Website

A modern, responsive restaurant website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Beautiful animations and smooth interactions
- **Fast Loading**: Optimized with lazy loading and image optimization
- **Interactive Components**: GSAP animations, carousels, and more
- **Contact Forms**: Integrated with EmailJS
- **Firebase Integration**: For authentication and data management

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP, Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Image Loading**: React Lazy Load Image Component
- **Maps**: React Leaflet
- **Carousel**: React Slick, Swiper
- **Notifications**: React Toastify

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd FreshHeat-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment on Vercel

### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

### Important Notes for Vercel Deployment

✅ **Fixed Issues:**

- Removed `/public/` prefix from all image paths
- Added `vercel.json` configuration for proper routing
- All static assets are now properly served

✅ **Image Paths:**

- All images should use relative paths from the public directory
- Example: `/About/chefs/chefeThumb2_1.jpg` instead of `/public/About/chefs/chefeThumb2_1.jpg`

✅ **Configuration:**

- The `vercel.json` file ensures proper SPA routing
- Static assets are cached for optimal performance

## 📁 Project Structure

```
FreshHeat-main/
├── public/                 # Static assets
│   ├── About/             # About page images
│   ├── Chefs/             # Chef images
│   ├── Contact/           # Contact page images
│   ├── Home/              # Home page images
│   └── ...                # Other image directories
├── src/
│   ├── component/         # React components
│   │   ├── pages/         # Page components
│   │   └── static/        # Static components
│   ├── Config/            # Configuration files
│   └── main.jsx           # Entry point
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### Firebase Configuration

Update `src/Config/Firebase.js` with your Firebase credentials.

## 🎨 Customization

### Colors

The project uses CSS custom properties for colors. Update them in `src/index.css`:

```css
:root {
  --orange: #ff6b35;
  --red: #dc2626;
  --title: #1f2937;
  --white: #ffffff;
}
```

### Images

- Place new images in the appropriate directory under `public/`
- Use relative paths starting with `/` (e.g., `/new-image.jpg`)

## 🐛 Troubleshooting

### Images Not Loading on Vercel

- ✅ **Fixed**: Removed `/public/` prefix from all image paths
- Ensure images are in the correct directory under `public/`
- Check that image paths are relative to the public directory

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for missing dependencies in `package.json`

### Routing Issues

- The `vercel.json` file handles SPA routing
- All routes should redirect to `index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the troubleshooting section
2. Review the deployment notes
3. Ensure all dependencies are installed
4. Verify environment variables are set correctly

---

**Note**: This project has been optimized for Vercel deployment with proper image path handling and SPA routing configuration.
