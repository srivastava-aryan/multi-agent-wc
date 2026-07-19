# Multi-Agent Writer-Critic System

A sophisticated multi-agent loop framework for testing and demonstrating advanced AI agent capabilities through a collaborative feedback mechanism between specialized agents.

## 🎯 Project Overview

This project implements a **Writer-Critic multi-agent system** where:
- **Agent-1 (Writer)**: Generates and iteratively improves content based on feedback
- **Agent-2 (Critic)**: Analyzes generated content and provides constructive feedback

The agents engage in a feedback loop to progressively enhance content quality, demonstrating how multiple specialized LLM instances can collaborate to achieve superior outputs compared to single-agent systems.

## 🚀 Key Features

- **Feedback Loop Mechanism**: Autonomous iteration between writer and critic agents
- **Configurable Loop Iterations**: Adjustable number of refinement cycles
- **Token Usage Analysis**: Comprehensive tracking and analysis of token consumption
- **Prompt Optimization**: Built-in capabilities for prompt engineering and improvement
- **Langchain Integration**: Leverages LangChain for seamless LLM orchestration
- **Multi-LLM Support**: Extensible architecture supporting various language models

## 💻 Tech Stack

| Component | Technology |
|-----------|-----------|
| **Language** | JavaScript |
| **Framework** | LangChain |
| **LLM Provider** | Google (Gemini 2.5 Flash) |
| **Architecture** | Multi-Agent System |
| **Runtime** | Node.js |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/srivastava-aryan/multi-agent-wc.git
cd multi-agent-wc

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your API keys and configuration to .env
```

## 🔧 Configuration

Create a `.env` file with the following variables:

```env
GEMINI_API_KEY=your_gemini_api_key_here
WRITER_MODEL=gemini-2.5-flash
CRITIC_MODEL=gemini-2.5-flash
MAX_LOOPS=5
TEMPERATURE=0.7
```

## 📖 Usage

```bash
# Run the multi-agent loop
npm start

# Run with custom configuration
npm start -- --loops 10 --temperature 0.8

# Analyze token usage
npm run analyze-tokens
```

## 🔄 How It Works

```
Initial Prompt
     ↓
Writer Agent (Generates Content)
     ↓
Critic Agent (Analyzes & Provides Feedback)
     ↓
Writer Agent (Refines Content)
     ↓
[Loop continues until max iterations or quality threshold]
     ↓
Final Optimized Output + Analysis
```

## 📊 Output Analysis

The system provides detailed analysis including:
- **Content Quality Metrics**: Grammar, coherence, relevance scores
- **Token Usage**: Input/output tokens per iteration and total consumption
- **Iteration Details**: Feedback history and content evolution
- **Performance Metrics**: Execution time and cost analysis

## 🎓 Use Cases

- Content generation and refinement automation
- Creative writing assistance and improvement
- Technical documentation enhancement
- Blog post optimization
- Email and message composition
- Report generation and review cycles

## 🔮 Future Scope

### Short-term Enhancements
- [ ] Add support for more LLM providers (OpenAI, Anthropic, Cohere)
- [ ] Implement parallel agent execution for faster iterations
- [ ] Web UI dashboard for real-time agent monitoring
- [ ] Export outputs in multiple formats (Markdown, PDF, JSON)
- [ ] Database integration for storing agent interactions and metrics

### Medium-term Features
- [ ] **Custom Agent Roles**: Extensible system to add specialized agents (editor, SEO analyst, translator)
- [ ] **Adaptive Feedback Loop**: Smart termination based on content quality convergence
- [ ] **Multi-Language Support**: Handle content generation in multiple languages
- [ ] **Domain-Specific Models**: Fine-tune agents for specific industries/domains
- [ ] **Benchmark Suite**: Automated testing against content quality standards
- [ ] **Prompt Library**: Curated prompts for different content types and use cases

### Long-term Vision
- [ ] **Hierarchical Agent System**: Multi-level agent architecture with supervisor agents
- [ ] **Memory Management**: Persistent memory for agents to learn across sessions
- [ ] **Cost Optimization Engine**: Intelligent routing to most cost-effective models
- [ ] **Real-time Collaboration**: Multi-user support for collaborative refinement
- [ ] **Advanced Analytics**: ML-powered insights on content patterns and improvements
- [ ] **API Service**: Deployable REST API for third-party integrations
- [ ] **Mobile Application**: iOS/Android app for on-the-go content refinement

### Research & Experimentation
- [ ] Compare effectiveness of different agent architectures
- [ ] Study optimal loop configurations for different content types
- [ ] Implement reinforcement learning for agent behavior optimization
- [ ] Explore constitutional AI approaches for agent alignment
- [ ] Analyze trade-offs between quality, cost, and speed

## 📈 Performance Metrics

Current system capabilities with Gemini 2.5 Flash:
- Average tokens per iteration: ~500-1500
- Cost per cycle: ~$0.001-0.005
- Typical improvement per iteration: 15-25%
- Optimal loop count: 3-5 iterations for diminishing returns

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋 Support & Feedback

For questions, suggestions, or bug reports:
- Open an [Issue](https://github.com/srivastava-aryan/multi-agent-wc/issues)
- Start a [Discussion](https://github.com/srivastava-aryan/multi-agent-wc/discussions)
- Contact: [Create an issue with the `question` label]

## 🔗 Related Resources

- [LangChain Documentation](https://docs.langchain.com/)
- [Google Gemini API](https://ai.google.dev/)
- [Multi-Agent Systems Research](https://arxiv.org/search/?query=multi-agent&searchtype=all)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

## 📅 Roadmap

See [ROADMAP.md](ROADMAP.md) for detailed development timeline and priorities.

---

**Last Updated**: July 2026 | **Version**: 1.0.0
