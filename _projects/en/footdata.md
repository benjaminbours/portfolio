---
title: 'Footdata - Football Match Predictions & Analytics'
excerpt: 'An interactive web application for building and testing custom football match prediction models. Built with Rust and WebAssembly for blazing-fast client-side calculations.'
coverImage: '/assets/projects/footdata-2.png'
date: '2025-10-30'
ogImage:
  url: '/assets/projects/footdata-2.png'
tags:
  - Rust
  - WebAssembly
  - Dioxus
  - Axum
  - TypeScript
featured: true
demoUrl: 'https://footprediction-pphu.vercel.app'
# githubUrl: 'https://github.com/yourusername/footdata'
screenshots:
  - '/assets/projects/footdata-1.png'
  - '/assets/projects/footdata-2.png'
  - '/assets/projects/footdata-3.png'
---

## Overview

Footdata is an interactive football prediction platform that empowers users to build and test their own match prediction models. Rather than presenting black-box predictions, the application lets users explore how different factors (attack strength, defense, form) influence match outcomes through an intuitive, real-time interface powered by WebAssembly.

**Note**: This is an active work-in-progress project exploring Rust/WASM for web applications. Many features are still in development.

## The Challenge

Building a performant, transparent prediction system required:

- Achieving instant client-side calculations for real-time interactivity
- Creating an intuitive model-building interface for non-technical users
- Processing and normalizing data from multiple football leagues
- Balancing model simplicity with prediction accuracy
- Delivering a native-like web experience with Rust/WASM

## Technical Implementation

### Frontend (Dioxus + WASM)

- **Dioxus 0.6** framework for reactive UI compiled to WebAssembly
- Client-side prediction calculations running at native speed
- Interactive weight sliders for attack, defense, and form factors
- Real-time prediction updates without backend roundtrips
- Prediction breakdown showing contribution of each factor
- Zero JavaScript dependencies for core prediction logic

### Backend (Axum)

- **Axum 0.7** REST API for data management
- Serves team statistics and historical match data
- Backtesting calculations (backend implementation complete, UI pending)
- WIP: Automated data pipeline for league updates
- WIP: User authentication and saved custom models

### Data Pipeline

- **TypeScript** scripts for data scraping from football APIs
- JSON data storage in shared directory structure
- Standardized schemas across leagues and seasons
- WIP: Automated real-time data scraping and updates
- Currently: Manual/periodic data updates
- Support for multiple leagues (Premier League, La Liga, etc.)

### Prediction Algorithm

Multiple models implemented for comparison:

- **Simple weighted scoring**: Adjustable weights for attack, defense, and recent form
- **Poisson distribution model**: Statistical approach based on expected goals
- **Monte Carlo simulation**: Computational technique that uses repeated random sampling to estimate the probability of different outcomes in uncertain events
- Users can compare different prediction methodologies
- All calculations visible and explainable to users
- Scores normalized to win/draw/loss probabilities

## Key Features

### Currently Available

- **Interactive Model Builder**: Adjust prediction factors in real-time with instant feedback
- **Team Comparison**: Side-by-side statistics display with visual indicators
- **Prediction Breakdown**: Transparent explanation of why predictions are what they are
- **Multiple Prediction Models**: Compare simple weighted scoring vs Poisson distribution
- **Multi-League Support**: Data for major European football leagues

### In Development (WIP)

- **Home/Away Toggle**: Account for home advantage in predictions
- **Historical Backtesting UI**: Test your model against past matches (backend ready, UI pending)
- **Automated Data Updates**: Real-time scraping and statistics refresh
- **User Accounts**: Save custom models and prediction history

## Technical Achievements

- **Instant predictions**: Sub-millisecond calculation times thanks to WASM
- **Educational value**: Transparent models help users understand prediction factors
- **Lightweight deployment**: Efficient WASM bundle size
- **Extensible architecture**: Easy to add new prediction models and features
- **Active learning project**: Exploring Rust's ecosystem for web development

## What I Learned

This project deepened my expertise in:

- **Rust web development**: Building full-stack applications with Rust
- **WebAssembly optimization**: Leveraging WASM for performance-critical calculations
- **Reactive UI frameworks**: Working with Dioxus's component model and signals
- **API design with Axum**: Building RESTful services in Rust
- **Data modeling**: Designing schemas for sports statistics
- **Transparency in predictions**: Making complex models understandable to users

## Technical Highlights

**Why Rust + WASM?**

- Predictions calculate instantly (no server roundtrip needed)
- Memory-safe implementation prevents bugs in complex calculations
- Compiled code runs at near-native speed in the browser
- Shared business logic between frontend and backend
- Learning opportunity to master Rust's ownership system

**Architecture Decisions**

- Monorepo structure with shared data directory
- TypeScript for data scraping (rich ecosystem), Rust for core app
- Static JSON files over database for simplicity and portability
- Client-side calculations over backend for responsiveness

## Roadmap

### Short-term (In Progress)

- Complete backtesting UI integration
- Implement home/away advantage toggle
- Add automated data scraping pipeline
- Improve mobile responsiveness

### Medium-term

- User accounts and saved model configurations
- Expected goals (xG) integration
- Model performance comparison dashboard
- Live betting odds comparison for value bet detection

### Long-term

- Machine learning model experimentation
- Social features: share models, accuracy leaderboards
- Mobile native apps using Rust shared core
- Public API for third-party integrations
