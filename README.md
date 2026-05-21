# Password Generator

An Angular password generator with customizable options, API integration, loading states and clipboard support.

## Features

- Generate secure random passwords
- Password length slider
- Include:
  - numbers
  - uppercase letters
  - symbols
- Exclude ambiguous characters
- Copy password to clipboard
- Refresh password
- Snackbar notifications
- API integration with API Ninjas
- Local fallback password generator
- Responsive UI

## Technologies

- Angular
- TypeScript
- Angular Material
- Lucide Angular Icons
- CSS

## Installation

Clone the repository:

```bash
git clone git@github.com:halynabondar/angular-password-generator.git
```

Install dependencies:
```bash
npm install
```

Run the project:
```bash
ng serve
```

Open:
```bash
http://localhost:4200
```


## API

This project uses the API Ninjas Password Generator API.

Create:
```bash
src/environments/environment.ts
```

Add your API key:
```bash
export const environment = {
  apiKey: 'YOUR_API_KEY',
};
```
