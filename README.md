# 🚀 A Dev’s Dream Portfolio — Built with Next.js 15, MagicUI & AceternityUI

A modern, responsive developer portfolio showcasing skills, projects, and professional experience. Built with cutting-edge web technologies and optimized for performance.

![Portfolio Preview]()

## 🚀 Live Demo

<!-- [View Live Portfolio](https:) -->

## ✨ Features

- **Light/Dark**: Switch between light and dark themes with smooth transitions
- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times with optimized assets
- **Interactive Elements**: Engaging user experience with smooth transitions
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: Built with accessibility best practices
- **Project Showcase**: Dynamic project gallery with detailed descriptions
- **Skills Visualization**: Interactive skills and technology display

## 🛠️ Tech Stack

### Frontend

- ⚛️ **Framework**: [Next.js 15+](https://nextjs.org/)
- 🎨 **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- 🌀 **Animations**: [Framer Motion](https://motion.dev/)
- 🧩 **UI Components**: [shadcn/ui](https://ui.shadcn.com/) • [MagicUI](https://magicui.design/) • [AceternityUI](https://ui.aceternity.com/)
- 🔣 **Icons**: [Lucide React](https://lucide.dev/) • [Tabler Icons](https://tabler.io/icons)
- 🔤 **Typography**: Custom [Google Fonts](https://fonts.google.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** / **yarn** / **pnpm**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/vobaolong/vobaolong-portfolio.git
cd vobaolong-portfolio
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

### Personal Information

Edit the following files to customize with your information:

1. **My Social Networks**: `src/data/my-networks.ts`
2. **Role Titles**: `src/data/role-titles.ts`
3. **Resume File**: `public/file/vobaolong_cv.ts`
4. **Experience**: `src/data/experience.tsx`
5. **Projects**: `src/data/projects.ts`
6. **Tech Stacks**: `src/data/tech-stack.ts`
7. **Learning Resource**: `src/data/learning-resource.ts`

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Components**: Customize components in `src/components/`

### Content Structure

```

src/
├── components/ # Reusable UI components
│ ├── ui/ # Basic UI components
│ ├── sections/ # Page sections (Hero, About, Projects, etc.)
│ └── layout/ # Layout components (Header, Footer)
├── data/ # Static data files
├── lib/ # Utility functions
├── styles/ # Global styles
└── app/ # Next.js app directory

```

## 📁 Project Structure

```

vobaolong-portfolio/
├── public/ # Static assets
│ ├── images/ # Images and media
│ ├── icons/ # Favicon and icons
│ └── resume.pdf # Downloadable resume
├── src/
│ ├── app/ # Next.js app router
│ ├── components/ # React components
│ ├── data/ # Static data
│ ├── lib/ # Utilities
│ └── styles/ # CSS files
├── .env.local # Environment variables
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json # Dependencies and scripts

```

## 🚢 Deployment

### Vercel (Recommended)

1. Fork this repository
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import your forked repository
4. Configure environment variables
5. Deploy!

### Other Platforms

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Use `npm run build` and `npm run export`
- **Custom Server**: Build with `npm run build` and serve the `out/` directory

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pre-rendered pages for faster loading
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Bug Reports

If you find a bug, please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and device information

## 👨‍💻 Author

**[Vo Bao Long]**

- GitHub: [@vobaolong](https://github.com/vobaolong)
- LinkedIn: [@vobaolong](https://www.linkedin.com/in/vobaolong)
- Email: [works.vobaolong@gmail.com](mailto:works.vobaolong@gmail.com)
- Website: []()

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform
- [Lucide](https://lucide.dev/) - Icon library
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [MagicUI](https://magicui.design/) - Animation presets
- [AceternityUI](https://ui.aceternity.com/) - Animated UI components

## 🔧 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear cache and reinstall dependencies

# Using npm
rm -rf .next node_modules package-lock.json
npm install

# Using yarn
rm -rf .next node_modules yarn.lock
yarn cache clean
yarn install

# Using pnpm
rm -rf .next node_modules pnpm-lock.yaml
pnpm store prune
pnpm install

**Styling Issues**

- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify responsive breakpoints

## 📈 Roadmap

- [ ] Implement blog functionality
- [ ] Add project filtering and search
- [ ] Add multi-language support
- [ ] Implement advanced animations
- [ ] Add project case studies
- [ ] Integrate testimonials section

---

⭐ If you found this project useful, please consider giving it a star on GitHub!

Made with ❤️ by vobaolong
```
