/**
 * BenchmarkBot - AI Model Data
 * This file contains all the data about AI models used in the website
 * The data is updated regularly from various sources
 */

// Last update date
const lastUpdateDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Overall Model Data
const overallLeaderboardData = [
    {
        rank: 1,
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        overallScore: 9.7,
        reasoning: 9.8,
        coding: 9.6,
        math: 9.5,
        lastUpdated: "2 hours ago"
    },
    {
        rank: 2,
        model: "GPT-4o",
        provider: "OpenAI",
        overallScore: 9.5,
        reasoning: 9.6,
        coding: 9.5,
        math: 9.7,
        lastUpdated: "5 hours ago"
    },
    {
        rank: 3,
        model: "Claude 3 Opus",
        provider: "Anthropic",
        overallScore: 9.3,
        reasoning: 9.5,
        coding: 9.2,
        math: 9.3,
        lastUpdated: "1 day ago"
    },
    {
        rank: 4,
        model: "Gemini 1.5 Pro",
        provider: "Google",
        overallScore: 9.2,
        reasoning: 9.2,
        coding: 9.1,
        math: 9.4,
        lastUpdated: "6 hours ago"
    },
    {
        rank: 5,
        model: "Llama 3 70B",
        provider: "Meta",
        overallScore: 9.0,
        reasoning: 9.2,
        coding: 8.9,
        math: 8.7,
        lastUpdated: "1 day ago"
    },
    {
        rank: 6,
        model: "Mixtral 8x22B",
        provider: "Mistral AI",
        overallScore: 8.9,
        reasoning: 9.0,
        coding: 8.8,
        math: 8.6,
        lastUpdated: "2 days ago"
    },
    {
        rank: 7,
        model: "GPT-4 Turbo",
        provider: "OpenAI",
        overallScore: 8.8,
        reasoning: 9.0,
        coding: 8.7,
        math: 8.9,
        lastUpdated: "3 days ago"
    },
    {
        rank: 8,
        model: "Gemini 1.0 Ultra",
        provider: "Google",
        overallScore: 8.7,
        reasoning: 8.8,
        coding: 8.6,
        math: 8.8,
        lastUpdated: "5 days ago"
    },
    {
        rank: 9,
        model: "Claude 3 Haiku",
        provider: "Anthropic",
        overallScore: 8.6,
        reasoning: 8.7,
        coding: 8.5,
        math: 8.5,
        lastUpdated: "1 day ago"
    },
    {
        rank: 10,
        model: "Llama 3 8B",
        provider: "Meta",
        overallScore: 8.5,
        reasoning: 8.4,
        coding: 8.3,
        math: 8.0,
        lastUpdated: "1 day ago"
    }
];

// Reasoning Leaderboard Data
const reasoningLeaderboardData = [
    {
        rank: 1,
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        reasoningScore: 9.8,
        mmlu: 96.2,
        hellaswag: 95.7,
        truthfulqa: 94.5,
        lastUpdated: "2 hours ago"
    },
    {
        rank: 2,
        model: "GPT-4o",
        provider: "OpenAI",
        reasoningScore: 9.6,
        mmlu: 95.7,
        hellaswag: 95.2,
        truthfulqa: 93.8,
        lastUpdated: "5 hours ago"
    },
    {
        rank: 3,
        model: "Claude 3 Opus",
        provider: "Anthropic",
        reasoningScore: 9.5,
        mmlu: 94.5,
        hellaswag: 94.2,
        truthfulqa: 93.4,
        lastUpdated: "1 day ago"
    },
    {
        rank: 4,
        model: "Gemini 1.5 Pro",
        provider: "Google",
        reasoningScore: 9.2,
        mmlu: 91.2,
        hellaswag: 93.7,
        truthfulqa: 92.1,
        lastUpdated: "6 hours ago"
    },
    {
        rank: 5,
        model: "Llama 3 70B",
        provider: "Meta",
        reasoningScore: 9.2,
        mmlu: 90.8,
        hellaswag: 93.4,
        truthfulqa: 91.3,
        lastUpdated: "1 day ago"
    },
    {
        rank: 6,
        model: "Mixtral 8x22B",
        provider: "Mistral AI",
        reasoningScore: 9.0,
        mmlu: 89.7,
        hellaswag: 91.8,
        truthfulqa: 90.2,
        lastUpdated: "2 days ago"
    },
    {
        rank: 7,
        model: "GPT-4 Turbo",
        provider: "OpenAI",
        reasoningScore: 9.0,
        mmlu: 89.2,
        hellaswag: 91.1,
        truthfulqa: 89.7,
        lastUpdated: "3 days ago"
    },
    {
        rank: 8,
        model: "Gemini 1.0 Ultra",
        provider: "Google",
        reasoningScore: 8.8,
        mmlu: 87.5,
        hellaswag: 90.2,
        truthfulqa: 88.9,
        lastUpdated: "5 days ago"
    }
];

// Coding Leaderboard Data
const codingLeaderboardData = [
    {
        rank: 1,
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        codingScore: 9.6,
        humaneval: 96.4,
        mbpp: 95.3,
        ds1000: 94.2,
        lastUpdated: "2 hours ago"
    },
    {
        rank: 2,
        model: "GPT-4o",
        provider: "OpenAI",
        codingScore: 9.5,
        humaneval: 95.8,
        mbpp: 94.7,
        ds1000: 93.7,
        lastUpdated: "5 hours ago"
    },
    {
        rank: 3,
        model: "Claude 3 Opus",
        provider: "Anthropic",
        codingScore: 9.2,
        humaneval: 92.4,
        mbpp: 91.8,
        ds1000: 90.5,
        lastUpdated: "1 day ago"
    },
    {
        rank: 4,
        model: "Gemini 1.5 Pro",
        provider: "Google",
        codingScore: 9.1,
        humaneval: 91.2,
        mbpp: 90.6,
        ds1000: 89.8,
        lastUpdated: "6 hours ago"
    },
    {
        rank: 5,
        model: "Llama 3 70B",
        provider: "Meta",
        codingScore: 8.9,
        humaneval: 88.7,
        mbpp: 89.2,
        ds1000: 88.3,
        lastUpdated: "1 day ago"
    },
    {
        rank: 6,
        model: "Mixtral 8x22B",
        provider: "Mistral AI",
        codingScore: 8.8,
        humaneval: 87.9,
        mbpp: 88.4,
        ds1000: 87.7,
        lastUpdated: "2 days ago"
    },
    {
        rank: 7,
        model: "GPT-4 Turbo",
        provider: "OpenAI",
        codingScore: 8.7,
        humaneval: 86.5,
        mbpp: 87.8,
        ds1000: 87.2,
        lastUpdated: "3 days ago"
    },
    {
        rank: 8,
        model: "Claude 3 Haiku",
        provider: "Anthropic",
        codingScore: 8.5,
        humaneval: 84.7,
        mbpp: 85.3,
        ds1000: 84.1,
        lastUpdated: "1 day ago"
    }
];

// Math Leaderboard Data
const mathLeaderboardData = [
    {
        rank: 1,
        model: "GPT-4o",
        provider: "OpenAI",
        mathScore: 9.7,
        gsm8k: 97.5,
        math: 95.8,
        lastUpdated: "5 hours ago"
    },
    {
        rank: 2,
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        mathScore: 9.5,
        gsm8k: 95.8,
        math: 94.7,
        lastUpdated: "2 hours ago"
    },
    {
        rank: 3,
        model: "Gemini 1.5 Pro",
        provider: "Google",
        mathScore: 9.4,
        gsm8k: 94.5,
        math: 93.8,
        lastUpdated: "6 hours ago"
    },
    {
        rank: 4,
        model: "Claude 3 Opus",
        provider: "Anthropic",
        mathScore: 9.3,
        gsm8k: 93.7,
        math: 92.5,
        lastUpdated: "1 day ago"
    },
    {
        rank: 5,
        model: "GPT-4 Turbo",
        provider: "OpenAI",
        mathScore: 8.9,
        gsm8k: 89.3,
        math: 88.6,
        lastUpdated: "3 days ago"
    },
    {
        rank: 6,
        model: "Gemini 1.0 Ultra",
        provider: "Google",
        mathScore: 8.8,
        gsm8k: 87.9,
        math: 87.2,
        lastUpdated: "5 days ago"
    },
    {
        rank: 7,
        model: "Llama 3 70B",
        provider: "Meta",
        mathScore: 8.7,
        gsm8k: 86.8,
        math: 85.7,
        lastUpdated: "1 day ago"
    },
    {
        rank: 8,
        model: "Mixtral 8x22B",
        provider: "Mistral AI",
        mathScore: 8.6,
        gsm8k: 85.2,
        math: 84.9,
        lastUpdated: "2 days ago"
    }
];

// Vision Leaderboard Data
const visionLeaderboardData = [
    {
        rank: 1,
        model: "GPT-4o",
        provider: "OpenAI",
        visionScore: 9.6,
        mmmu: 95.7,
        seedbench: 94.8,
        lastUpdated: "5 hours ago"
    },
    {
        rank: 2,
        model: "Claude 3 Opus",
        provider: "Anthropic",
        visionScore: 9.5,
        mmmu: 95.2,
        seedbench: 94.3,
        lastUpdated: "1 day ago"
    },
    {
        rank: 3,
        model: "Gemini 1.5 Pro",
        provider: "Google",
        visionScore: 9.4,
        mmmu: 94.3,
        seedbench: 93.7,
        lastUpdated: "6 hours ago"
    },
    {
        rank: 4,
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        visionScore: 9.3,
        mmmu: 93.1,
        seedbench: 92.8,
        lastUpdated: "2 hours ago"
    },
    {
        rank: 5,
        model: "GPT-4 Vision",
        provider: "OpenAI",
        visionScore: 9.1,
        mmmu: 91.5,
        seedbench: 90.8,
        lastUpdated: "3 days ago"
    },
    {
        rank: 6,
        model: "Gemini 1.0 Ultra",
        provider: "Google",
        visionScore: 8.9,
        mmmu: 89.2,
        seedbench: 88.5,
        lastUpdated: "5 days ago"
    },
    {
        rank: 7,
        model: "Claude 3 Haiku",
        provider: "Anthropic",
        visionScore: 8.6,
        mmmu: 86.3,
        seedbench: 85.8,
        lastUpdated: "1 day ago"
    },
    {
        rank: 8,
        model: "Llama 3 70B Vision",
        provider: "Meta",
        visionScore: 8.4,
        mmmu: 84.2,
        seedbench: 83.9,
        lastUpdated: "1 day ago"
    }
];

// Features Data
const featuresData = [
    {
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        contextLength: "200K tokens",
        vision: "Advanced",
        toolUsage: "Advanced",
        codeGen: "Advanced",
        fineTuning: "Limited",
        ragSupport: "Advanced",
        type: "claude"
    },
    {
        model: "Claude 3 Opus",
        provider: "Anthropic",
        contextLength: "200K tokens",
        vision: "Advanced",
        toolUsage: "Advanced",
        codeGen: "Advanced",
        fineTuning: "Limited",
        ragSupport: "Advanced",
        type: "claude"
    },
    {
        model: "Claude 3 Sonnet",
        provider: "Anthropic",
        contextLength: "200K tokens",
        vision: "Advanced",
        toolUsage: "Advanced",
        codeGen: "Advanced",
        fineTuning: "Limited",
        ragSupport: "Advanced",
        type: "claude"
    },
    {
        model: "Claude 3 Haiku",
        provider: "Anthropic",
        contextLength: "200K tokens",
        vision: "Advanced",
        toolUsage: "Basic",
        codeGen: "Good",
        fineTuning: "Limited",
        ragSupport: "Good",
        type: "claude"
    },
    {
        model: "GPT-4o",
        provider: "OpenAI",
        contextLength: "128K tokens",
        vision: "Advanced",
        toolUsage: "Advanced",
        codeGen: "Advanced",
        fineTuning: "Advanced",
        ragSupport: "Advanced",
        type: "gpt"
    },
    {
        model: "GPT-4 Turbo",
        provider: "OpenAI",
        contextLength: "128K tokens",
        vision: "Advanced",
        toolUsage: "Advanced",
        codeGen: "Advanced",
        fineTuning: "Advanced",
        ragSupport: "Advanced",
        type: "gpt"
    },
    {
        model: "GPT-4",
        provider: "OpenAI",
        contextLength: "8K tokens",
        vision: "Advanced",
        toolUsage: "Good",
        codeGen: "Advanced",
        fineTuning: "Good",
        ragSupport: "Good",
        type: "gpt"
    },
    {
        model: "GPT-3.5 Turbo",
        provider: "OpenAI",
        contextLength: "16K tokens",
        vision: "Basic",
        toolUsage: "Good",
        codeGen: "Good",
        fineTuning: "Advanced",
        ragSupport: "Good",
        type: "gpt"
    },
    {
        model: "Gemini 1.5 Pro",
        provider: "Google",
        contextLength: "1M tokens",
        vision: "Advanced",
        toolUsage: "Advanced",
        codeGen: "Advanced",
        fineTuning: "Good",
        ragSupport: "Advanced",
        type: "gemini"
    },
    {
        model: "Gemini 1.0 Ultra",
        provider: "Google",
        contextLength: "32K tokens",
        vision: "Advanced",
        toolUsage: "Good",
        codeGen: "Good",
        fineTuning: "Good",
        ragSupport: "Good",
        type: "gemini"
    },
    {
        model: "Gemini 1.0 Pro",
        provider: "Google",
        contextLength: "32K tokens",
        vision: "Good",
        toolUsage: "Basic",
        codeGen: "Good",
        fineTuning: "Good",
        ragSupport: "Good",
        type: "gemini"
    },
    {
        model: "Llama 3 70B",
        provider: "Meta",
        contextLength: "8K tokens",
        vision: "No",
        toolUsage: "Basic",
        codeGen: "Good",
        fineTuning: "Advanced",
        ragSupport: "Good",
        type: "llama"
    },
    {
        model: "Llama 3 8B",
        provider: "Meta",
        contextLength: "8K tokens",
        vision: "No",
        toolUsage: "Basic",
        codeGen: "Basic",
        fineTuning: "Advanced",
        ragSupport: "Basic",
        type: "llama"
    },
    {
        model: "Mixtral 8x22B",
        provider: "Mistral AI",
        contextLength: "32K tokens",
        vision: "No",
        toolUsage: "Basic",
        codeGen: "Good",
        fineTuning: "Good",
        ragSupport: "Good",
        type: "mistral"
    },
    {
        model: "Mistral Large",
        provider: "Mistral AI",
        contextLength: "32K tokens",
        vision: "No",
        toolUsage: "Good",
        codeGen: "Good",
        fineTuning: "Good",
        ragSupport: "Good",
        type: "mistral"
    },
    {
        model: "Mistral Medium",
        provider: "Mistral AI",
        contextLength: "32K tokens",
        vision: "No",
        toolUsage: "Basic",
        codeGen: "Basic",
        fineTuning: "Basic",
        ragSupport: "Basic",
        type: "mistral"
    }
];

// Pricing Data
const pricingData = [
    {
        model: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        priceInput: "$3.00",
        priceOutput: "$15.00",
        priceUnit: "per million tokens",
        apiAccess: true,
        freeCredits: true,
        freeVersion: "Claude 3 Haiku",
        features: [
            "200K context window",
            "Vision capabilities",
            "Tool use (function calling)",
            "Advanced reasoning",
            "Enterprise-grade security"
        ]
    },
    {
        model: "Claude 3 Opus",
        provider: "Anthropic",
        priceInput: "$15.00",
        priceOutput: "$75.00",
        priceUnit: "per million tokens",
        apiAccess: true,
        freeCredits: true,
        freeVersion: "Claude 3 Haiku",
        features: [
            "200K context window",
            "Vision capabilities",
            "Tool use (function calling)",
            "Advanced reasoning",
            "Enterprise-grade security"
        ]
    },
    {
        model: "GPT-4o",
        provider: "OpenAI",
        priceInput: "$5.00",
        priceOutput: "$15.00",
        priceUnit: "per million tokens",
        apiAccess: true,
        freeCredits: true,
        freeVersion: "Limited GPT-3.5",
        features: [
            "128K context window",
            "Vision capabilities",
            "Function calling",
            "Fine-tuning available",
            "Enterprise-grade security"
        ]
    },
    {
        model: "GPT-4 Turbo",
        provider: "OpenAI",
        priceInput: "$10.00",
        priceOutput: "$30.00",
        priceUnit: "per million tokens",
        apiAccess: true,
        freeCredits: true,
        freeVersion: "Limited GPT-3.5",
        features: [
            "128K context window",
            "Vision capabilities",
            "Function calling",
            "Fine-tuning available",
            "Enterprise-grade security"
        ]
    },
    {
        model: "Gemini 1.5 Pro",
        provider: "Google",
        priceInput: "$3.50",
        priceOutput: "$10.50",
        priceUnit: "per million tokens",
        apiAccess: true,
        freeCredits: true,
        freeVersion: "Gemini 1.0 Pro (limited)",
        features: [
            "1M context window",
            "Multimodal capabilities",
            "Google Search integration",
            "Code assistance",
            "Developer-friendly API"
        ]
    },
    {
        model: "Mistral Large",
        provider: "Mistral AI",
        priceInput: "$8.00",
        priceOutput: "$24.00",
        priceUnit: "per million tokens",
        apiAccess: true,
        freeCredits: true,
        freeVersion: "Mistral Small",
        features: [
            "32K context window",
            "Function calling",
            "Custom model fine-tuning",
            "Advanced reasoning",
            "Enterprise solutions"
        ]
    }
]; 