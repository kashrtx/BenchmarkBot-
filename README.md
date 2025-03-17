# BenchmarkBot

BenchmarkBot is a modern, responsive website that provides up-to-date information about the best AI models available in the market. It tracks and compares AI models based on benchmarks, usage metrics, features, and pricing plans.

## Features

- **Real-time AI Model Comparison**: View and compare top AI models based on various benchmarks and metrics.
- **Comprehensive Leaderboards**: Detailed leaderboards for overall performance, reasoning, coding, math, and vision capabilities.
- **Feature Comparison**: Compare features like context length, vision capabilities, tool usage, and more across different AI models.
- **Pricing Information**: Access detailed pricing information for the top AI models.
- **Dark Mode**: Toggle between light and dark mode for comfortable viewing.
- **Responsive Design**: Fully responsive design works on desktop, tablet, and mobile devices.
- **Modern UI with 3D Effects**: Beautiful modern interface with 3D cube animation and visual effects.

## Technology Stack

- HTML5, CSS3, JavaScript
- Bootstrap 5 for responsive layout
- Font Awesome for icons
- AOS library for scroll animations
- Google Fonts

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/BenchmarkBot.git
```

2. Open `index.html` in your browser to view the website locally.

3. No build steps required! The website can be directly deployed to hosting services like GitHub Pages or Netlify.

## Data Sources

The benchmark data is sourced from various platforms including:
- [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
- [LMSYS Chatbot Arena](https://chat.lmsys.org/)
- Official documentation from AI providers

## Customization

You can easily update the data by modifying the `data.js` file in the `js` directory. This allows you to keep the benchmark information current and accurate.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

To deploy this site on Netlify:

1. Sign up for a Netlify account
2. Connect your GitHub repository
3. Set the build command to blank (not required)
4. Set the publish directory to the root of the project
5. Click "Deploy"

No build steps are required since this is a static site using CDN-linked libraries.

## Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for the icon set
- AOS library for the scroll animations
- Google Fonts for the typography
