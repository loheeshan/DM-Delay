# 🚀 DM Delay - Message Scheduling App

A React-based message scheduling application that allows users to compose messages and send them after a specified delay. Built with modern React hooks, TypeScript, and beautiful toast notifications.

## ✨ Features

- **📝 Message Composition**: Write your message in a user-friendly textarea
- **⏰ Custom Delay**: Set custom delay time in seconds
- **🔄 Cancel Functionality**: Cancel scheduled messages before they're sent
- **🎉 Toast Notifications**: Beautiful toast notifications for all actions
- **📱 Responsive Design**: Clean, centered layout with Tailwind CSS
- **🎨 Modern UI**: Built with shadcn/ui components

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Sonner** for toast notifications

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/loheeshan/DM-Delay.git
   cd DM-Delay
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

1. **Write your message** in the textarea
2. **Set delay time** in seconds (default: 10 seconds)
3. **Click "Send With Delay"** to schedule the message
4. **Cancel anytime** by clicking "Cancel Sending" before the timer expires
5. **Get notified** with toast messages for all actions:
   - ℹ️ Message scheduled
   - ✅ Message sent successfully
   - ⚠️ Message cancelled
   - ❌ Validation errors

## 📁 Project Structure

```
src/
├── components/
│   ├── MessageForm.tsx     # Main component
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── App.tsx
└── main.tsx
```

## 🔧 Key Components

### MessageForm Component

- Manages message state and scheduling logic
- Handles form validation
- Integrates toast notifications
- Provides cancel functionality

### Custom Toaster

- Styled wrapper around Sonner toast library
- Consistent theming and CSS classes
- Support for different toast types (info, success, error, warning)

## 🎨 Toast Notifications

The app uses **Sonner** for beautiful toast notifications:

```tsx
// Success notification
toast.success("Message sent successfully! 🎉", {
  description: `"${message}" has been delivered`,
});

// Info notification
toast.info(`Message scheduled to send in ${delay} seconds`, {
  description: "You can cancel it before it sends",
});

// Warning notification
toast.warning("Message sending cancelled");

// Error notification
toast.error("Please enter a message first!");
```

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] **Persistent Storage**: Save scheduled messages in localStorage
- [ ] **Multiple Messages**: Queue multiple messages
- [ ] **Email Integration**: Send actual emails
- [ ] **Time Picker**: More intuitive time selection
- [ ] **Message Templates**: Pre-defined message templates
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Progress Bar**: Visual countdown timer

## 🐛 Known Issues

- Timer continues if page is refreshed (will be fixed with localStorage)
- No actual message delivery (currently just UI simulation)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@loheeshan](https://github.com/loheeshan)
- LinkedIn: [loheeshan](https://www.linkedin.com/in/loheeshan/)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Sonner](https://sonner.emilkowal.ski/) for toast notifications
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for lightning-fast development

---

⭐ **Star this repository if you found it helpful!**
