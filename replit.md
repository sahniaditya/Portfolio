# Aditya Sahni Portfolio Application

## Overview

This is a modern full-stack portfolio application for Aditya Sahni, a Data Engineer with expertise in Azure cloud solutions. The application is built using a React frontend with TypeScript, Express.js backend, and configured for PostgreSQL database integration with Drizzle ORM. The portfolio showcases professional experience, projects, skills, and provides contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Design System
- **Theme**: New York style from shadcn/ui
- **Color Scheme**: Neutral base colors with blue accent (#4A90E2)
- **Typography**: System fonts with careful hierarchy
- **Responsive**: Mobile-first design approach
- **Dark Mode**: Ready for dark theme implementation

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Professional summary with skills overview
3. **Experience Section**: Timeline of work experience and education
4. **Projects Section**: Featured projects with technologies used
5. **Skills Section**: Categorized technical skills and certifications
6. **Contact Section**: Contact form with resume download functionality

### Technical Components
- **Navigation**: Smooth scrolling navigation with mobile menu
- **Forms**: Contact form with validation and toast notifications
- **Resume Download**: API endpoint for secure resume file serving
- **Responsive Images**: Optimized image loading with proper alt texts
- **Animations**: Progressive enhancement with motion components

## Data Flow

### Client-Side Flow
1. User navigates to portfolio sections via smooth scrolling
2. Contact form submissions handled with client-side validation
3. Resume downloads trigger API calls to backend endpoint
4. Toast notifications provide user feedback for interactions

### Server-Side Flow
1. Express server serves static files and API endpoints
2. Resume download endpoint checks file existence and serves PDF
3. Database schema ready for user management and content storage
4. Session management configured for future authentication needs

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Consistent icon set

### Data and State Management
- **TanStack Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library
- **date-fns**: Date manipulation utilities

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with instant updates
- **Error Handling**: Runtime error overlay for development
- **TypeScript**: Strict type checking across the stack
- **Path Aliases**: Organized imports with @ and @shared prefixes

### Production Build
- **Frontend**: Vite builds optimized React bundle to dist/public
- **Backend**: esbuild compiles TypeScript server to dist/index.js
- **Assets**: Static assets served from Express in production
- **Environment**: NODE_ENV-based configuration switching

### Database Management
- **Migrations**: Drizzle migrations stored in /migrations directory
- **Schema**: Shared schema definitions in /shared directory
- **Connection**: Environment-based DATABASE_URL configuration

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared TypeScript types and schemas
├── dist/           # Production build output
└── migrations/     # Database migration files
```

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```