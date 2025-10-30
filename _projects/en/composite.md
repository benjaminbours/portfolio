---
title: 'Composite - 3D Multiplayer Game'
excerpt: 'A real-time multiplayer 3D platformer game built with Three.js and WebSockets. Players navigate through challenging levels with physics-based mechanics in an immersive 3D environment.'
coverImage: '/assets/projects/composite-1.png'
date: '2024-06-06'
ogImage:
  url: '/assets/projects/composite-1.png'
tags:
  - Three.js
  - WebSocket
  - TypeScript
  - Node.js
  - Multiplayer
featured: true
demoUrl: 'https://dev.compositethegame.com/en'
githubUrl: 'https://github.com/benjaminbours/Composite'
screenshots:
  - '/assets/projects/composite-1.png'
  - '/assets/projects/composite-2.png'
  - '/assets/projects/composite-3.png'
  - '/assets/projects/composite-4.png'
  - '/assets/projects/composite-5.png'
---

## Overview

Composite is a 3D multiplayer platformer game that pushes the boundaries of web-based gaming. Built entirely with modern web technologies, it demonstrates the power of WebGL and real-time communication protocols.

## The Challenge

Creating a smooth, responsive multiplayer experience in the browser while maintaining:
- Low latency between players
- Smooth 3D rendering at 60fps
- Physics synchronization across clients
- Scalable server architecture

## Technical Implementation

### Frontend Architecture
- **Three.js** for 3D rendering and scene management
- **TypeScript** for type-safe game logic
- Custom physics engine with collision detection
- Optimized render loop for consistent performance

### Backend Infrastructure
- **Node.js** server with WebSocket connections
- Real-time state synchronization
- Server-side physics validation
- Room-based matchmaking system

### Key Features
- Real-time multiplayer with up to 8 players per room
- Physics-based movement and interactions
- Level progression system
- Responsive controls optimized for web browsers

## Results & Impact

- Achieved sub-50ms latency for player actions
- Maintaining 60fps on mid-range hardware
- Successfully deployed and tested with concurrent players
- Positive feedback on gameplay mechanics and visual quality

## What I Learned

This project deepened my understanding of:
- Real-time networking and state management
- 3D graphics programming and optimization
- Game architecture patterns
- Performance profiling and optimization techniques

## Future Enhancements

- Additional level designs
- Power-ups and game mechanics
- Spectator mode
- Mobile device support
