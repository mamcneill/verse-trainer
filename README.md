# Verse Trainer

A Scripture memory web application that helps users memorize Bible verses through interactive typing practice. Users can create and manage their list of memory verses, then practice typing them with configurable display options - showing all, some, or none of the verse text on screen.

## Project Overview

This application consists of:
- A .NET Web API backend
- A planned frontend (to be implemented)
- Integration with the ESV Bible API (planned)

This project serves both as a practical tool for Scripture memorization and as a learning platform for cloud development practices and patterns.

## Features

### Current
- REST API for managing memory verses
- In-memory storage of verses
- Basic CRUD operations for verses

### Planned MVP Features
- Frontend implementation with:
  - Verse list management (view, add, modify)
  - Interactive practice experience
  - Basic settings (case sensitivity toggle)
- ESV API integration for verse fetching

### Future Enhancements
- User profiles and authentication
- Progress tracking and metrics
- Additional practice settings:
  - Punctuation enforcement
  - Partial word hints
  - Various display modes
- Verse search functionality
- Cloud-based persistence
- Performance analytics

## Technical Stack

### Backend
- .NET 9.0
- ASP.NET Core Web API
- OpenAPI/Swagger documentation

### Planned
- Frontend framework (TBD)
- Azure cloud services
- ESV Bible API integration

## Getting Started

### Prerequisites
- .NET 9.0 SDK
- Your favorite IDE (Visual Studio, VS Code, etc.)

### Running the API
1. Clone the repository
2. Navigate to the API project:
   ```bash
   cd src/VerseTrainer.Api
   ```
3. Run the project:
   ```bash
   dotnet run
   ```
4. The API will be available at:
   - HTTP: http://localhost:5292
   - HTTPS: https://localhost:7239 (when configured)

### API Documentation
When running in development mode, view the OpenAPI documentation at:
```
http://localhost:5292/openapi/v1.json
```

## Development Roadmap

1. **Phase 1 - API Foundation** ✅
   - Basic verse CRUD operations
   - OpenAPI documentation

2. **Phase 2 - Core Features** 🚧
   - Frontend implementation
   - Practice mode
   - Basic settings
   - ESV API integration

3. **Phase 3 - User Experience**
   - User authentication
   - Progress tracking
   - Enhanced practice options
   - Verse search

4. **Phase 4 - Cloud Integration**
   - Azure deployment
   - Cloud storage
   - Monitoring and analytics

## Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to open an issue for discussion.

## License

[MIT License](LICENSE)