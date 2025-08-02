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

## 🏆 Special Thanks - 30 Days Challenge

This project was built as part of **Jagan's 30 Days, 30 Apps Challenge** - an incredible journey of consistent coding and learning!

### 🎯 Challenge Completed

- ✅ **Day 1 of 30**: DM Delay App
- 🔥 **Streak**: Building apps consistently for 30 days
- 💪 **Growth**: Learning new technologies and improving skills daily

### 🙏 Special Thanks to Jagan (@jaganjavid)

Huge gratitude to **[Jagan](https://github.com/jaganjavid)** for:

- 🚀 **Creating the 30 Days Challenge** and inspiring daily coding habits
- 📚 **Providing clear tutorials** and project guidance
- 👥 **Building an amazing community** of developers
- 🎨 **Encouraging hands-on learning** through real projects
- 🎥 **Detailed YouTube tutorials** that make complex concepts simple

### 🔗 Challenge Resources

- **Jagan's GitHub**: [jaganjavid](https://github.com/jaganjavid)
- **Day 1 Tutorial**: [DM Delay Challenge Video](https://www.youtube.com/watch?v=X8SiFDa-EFs&t=126s&ab_channel=codejavid)
- **Channel**: [CodeJavid YouTube](https://www.youtube.com/channel/codejavid)

This challenge taught me:

- **Consistency beats perfection** - Building something every day
- **Learning by doing** - Hands-on experience with React, TypeScript, and modern tools
- **Following tutorials effectively** - Understanding concepts while building
- **Community learning** - Growing together with fellow developers

---

> _"Thanks to Jagan's 30 Days Challenge, I'm building my way to becoming a better developer, one app at a time!"_ 🚀

## 🙏 Acknowledgments

- **[Jagan (@jaganjavid)](https://github.com/jaganjavid)** for the amazing 30 Days Challenge and tutorial 🏆
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Sonner](https://sonner.emilkowal.ski/) for toast notifications
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for lightning-fast development

### 🔥 Built during Jagan's 30 Days, 30 Apps Challenge

_Day 1 of 30 - Learning, building, and growing one app at a time!_

---

⭐ **Star this repository if you found it helpful!**
